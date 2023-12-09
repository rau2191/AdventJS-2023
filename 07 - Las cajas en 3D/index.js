const drawGift = (size, symbol) => {
  const append = (current, line, spaces) => `${' '.repeat(spaces)}${line}\n${current}\n${line}`;
  const sizeDifference = size - 2; 

  const middleSymbolCount = sizeDifference >= 0 ? sizeDifference : 0;
  let draw = `${"#".repeat(size)}${symbol.repeat(middleSymbolCount)}${sizeDifference >= 0 ? "#" : ""}`;

  for (let symbolCount = sizeDifference, spaces = 1; symbolCount > 0; symbolCount--, spaces++) {
    const line = `#${symbol.repeat(sizeDifference)}#${symbol.repeat(symbolCount - 1)}#`;
    draw = append(draw, line, spaces);
  }

  if (size > 1) {
    const end = "#".repeat(size);
    draw = append(draw, end, size - 1);
  }

  return `${draw}\n`;
};

console.log(drawGift(4, "+"));

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

console.log(drawGift(5, '*'))
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

console.log(drawGift(1, '^'))
/*
#
*/

console.log(drawGift(2, '^'))
/*
 ##
###
##
*/
