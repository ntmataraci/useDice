const useDice = (value) => {
  let diceList = [];
  let sumOfResult;
  let critDice;
  let typeofDice;
  let typeofBonus;
  let bonusValue;
  let mytype;

  if (value === "adv" || value === "disadv") {
    mytype = value;
    value = "2d20";
    calculations();
    critical(mytype);
  } else {
    calculations();
    totalize();
  }

  function calculations() {
    const qtyOfDice = +value.substring(0, value.indexOf("d"));
    if (value.indexOf("+") > 0) {
      typeofDice = value.substring(value.indexOf("d") + 1, value.indexOf("+"));
      bonusValue = +value.substring(value.indexOf(typeofDice) + 2);
      typeofBonus = "+";
    } else if (value.indexOf("-") > 0) {
      typeofDice = value.substring(value.indexOf("d") + 1, value.indexOf("-"));
      bonusValue = +value.substring(value.indexOf(typeofDice) + 2);
      typeofBonus = "-";
    } else {
      typeofDice = value.substring(value.indexOf("d") + 1);
      typeofBonus = "";
      bonusValue = "";
    }

    for (let i = 1; i < qtyOfDice + 1; i++) {
      const dice = Math.floor(Math.random() * typeofDice + 1);
      diceList.push(dice);
    }
  }

  function totalize() {
    const reducer = (prev, curr) => prev + curr;
    if (typeofBonus === "+") {
      sumOfResult = diceList.reduce(reducer) + bonusValue;
    } else if (typeofBonus === "-") {
      sumOfResult = diceList.reduce(reducer) - bonusValue;
    } else {
      sumOfResult = diceList.reduce(reducer);
    }
  }

  function critical(type) {
    type === "disadv" ? (critDice = +Math.min(...diceList)) : "";
    type === "adv" ? (critDice = +Math.max(...diceList)) : "";
  }
  // console.log(typeofDice);
  // console.log(diceList);
  // console.log(sumOfResult);
  return {
    value: value,
    total: critDice || sumOfResult,
    dice: diceList
  };
};

export default useDice;
