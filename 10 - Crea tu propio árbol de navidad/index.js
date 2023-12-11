const createChristmasTree = (ornaments, height) => {
  const allOrnaments = ornaments.repeat(height * height);
  let tree = "";
  let currentOrnamentsIndex = 0;

  for (let i = 1; i <= height; i++) {
    const treeLine = allOrnaments
      .substring(currentOrnamentsIndex, currentOrnamentsIndex + i)
      .split("")
      .join(" ");

    tree += `${" ".repeat(height - i)}${treeLine}\n`;

    currentOrnamentsIndex += i;
  }

  const trunkIndex = Math.floor((height * 2 - 1) / 2);
  tree += `${" ".repeat(trunkIndex)}|\n`;

  return tree;
};

console.log(createChristmasTree("123", 5));
/*
    1
   2 3
  1 2 3
 1 2 3 1
2 3 1 2 3
    |
*/
