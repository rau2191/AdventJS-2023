const cyberReindeer = (road, time) => {
    const ROAD_SYMBOL = '.';
    const SANTAS_SLED_SYMBOL = 'S';
    const OPEN_BARRIER_SYMBOL = '*';
    const CLOSED_BARRIER_SYMBOL = '|';
    const CLOSED_BARRIER_TIME = 5;

    return Array(time)
        .fill(road)
        .reduce((state, stepRoad, index) => {

            if (state.steps > 0) {
                stepRoad = ROAD_SYMBOL + road.substr(1);
            }

            if (index >= CLOSED_BARRIER_TIME) {
                stepRoad = stepRoad.replaceAll(CLOSED_BARRIER_SYMBOL, OPEN_BARRIER_SYMBOL)
            }

            if (stepRoad.at(state.steps) === CLOSED_BARRIER_SYMBOL) {
                state.roads.push(state.roads.at(-1));
                return state;
            }

            stepRoad = stepRoad.substring(0, state.steps)
                + SANTAS_SLED_SYMBOL
                + stepRoad.substring(state.steps + 1);

            state.roads.push(stepRoad);

            state.steps++;

            return state;
        }, { steps: 0, roads: [] })
        .roads;
}

console.log(cyberReindeer('S..|...|..', 10))

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/
