const organizeGifts = (gifts) => {
  const GIFTS_PER_PALLET = 50;
  const GIFTS_PER_BOX = 10;
  
  const splitAmounts = (gifts) => gifts.match(/[\d]+[\w]{1}/gi);

  const amounts = splitAmounts(gifts).map((amount) => [
    amount.match(/[\d]+/gi)[0],
    amount.match(/[a-z]{1}/gi)[0],
  ]);

  const warehouse = amounts.reduce((warehouse, [giftAmount, giftype]) => {
    const palletsAmmounts = giftAmount / GIFTS_PER_PALLET;
    const boxesAmount = (giftAmount % GIFTS_PER_PALLET) / GIFTS_PER_BOX;
    const additionalGiftsAmmount = (giftAmount % GIFTS_PER_PALLET) % GIFTS_PER_BOX;

    const pallets = `[${giftype}]`.repeat(palletsAmmounts);
    const boxes = `{${giftype}}`.repeat(boxesAmount);
    const additionalGifts = additionalGiftsAmmount > 0
        ? `(${giftype.repeat(additionalGiftsAmmount)})`
        : "";

    warehouse += pallets + boxes + additionalGifts;

    return warehouse;
  }, '');

  return warehouse;
};

console.log(organizeGifts(`76a11b`));
// '[a]{a}{a}(aaaaaa){b}(b)'

/* Explicación:

  76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos, resultando en 1 palé [a] (por las primeras 5 cajas), 2 cajas sueltas {a}{a} y una bolsa con 6 regalos (aaaaaa)

  11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo, resultando en 1 caja suelta {b} y una bolsa con 1 regalo (b) 
  
*/
