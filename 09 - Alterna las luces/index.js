const adjustLights = (lights) => {
  let adjust = 0;
  let previous = "";

  for (light of lights) {
    if (light === previous) adjust++;

    previous = light === previous ? "" : light;
  }

  return adjust;
};

console.log(adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]));
// -> 1 (cambias la cuarta luz a 🔴)

console.log(adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]));
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

console.log(adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"]));
// -> 0 (ya están alternadas)

console.log(adjustLights(["🔴", "🔴", "🔴"]));
// -> 1 (cambias la segunda luz a 🟢)
