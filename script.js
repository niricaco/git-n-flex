/* 
kulon fv-be annyi szambol alljon ahany a tomb eleme
Richárd Atom10:31
200
001
002
003
_____
2000
0001
0002
0003
______
20000
00001
00002
*/

const zerosNumbers = function (amount) {
  const returnArray = [];
  
  amount = parseInt(amount);

  if (!Number.isNaN(amount)) {
    for (let i = 1; i < amount + 1; i++) {
      if (String(i).length < String(amount).length) {
        const padded = String(i).padStart((String(amount).length), "0");
        returnArray.push(`${padded}`);
        console.log(padded);
      } else {
        returnArray.push(`${i}`);
      }
    }
  } else {
    returnArray.push("error");
  }
  return returnArray;
}

//repeat

const generateArray = function (amount) {
  let returnArray = [];

  /*
  let amountConverted = psresInt(amount);
  amount = amountConverted;
  ez egyenlo
  amount = parseInt(amount);
  */

  amount = parseInt(amount);
  //console.log(amount);

  if (!Number.isNaN(amount)) {
    //console.log("The amount is a number.");
    for (let i = 0; i < amount; i++) {
      returnArray.push(`${i}`);
    }
  } else {
    //console.log("The amount is NaN!");
    returnArray.push("error");
  }

  return returnArray;
}

const loadEvent = function () {
  console.log("The page has loaded!");

  /* 
  console.log(generateArray("100"));
  console.log(generateArray(15));
  console.log(generateArray("kiskutya"));
  console.log(generateArray([2]));
  */

  const root = document.getElementById("root");
  const zeros = zerosNumbers(1000);
  const list = generateArray(0);

  console.log(zeros);
  console.log(typeof zeros);
  
  if (zeros[0] !== "error") {
    for (const item of zeros) {
      root.insertAdjacentHTML("beforeend", `<div>${item}</div>`);
    }
  }
  
  console.log(list);
  console.log(typeof list);

  if (list[0] !== "error") {
    for (const item of list) {
      root.insertAdjacentHTML("beforeend", `<div>${item}</div>`);
    }
  }
}

window.addEventListener("load", loadEvent);

/*
window.addEventListener("load", function() {
  ez is teljes jo, ugyanaz mint a fenti
})

window.addEventListener("load", () => {
  arrow function
  ez is teljes jo, ugyanaz mint a fenti
})
*/

//https://www.w3schools.com/jsref/jsref_splice.asp
//Metodus pont van elotte es zarojel a vege.
/* 
http://www.flexboxdefense.com/
flexbox.io
https://bennettfeely.com/flexplorer/
https://flexbox.help/
 */