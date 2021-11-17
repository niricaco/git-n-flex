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
  let returnArray = [];
  
  console.log("returnArray =", returnArray);
  
  amount = parseInt(amount);

  console.log("amount =", amount);

  if (!Number.isNaN(amount)) {
    for (let i = 0; i < amount; i++) {

      console.log("i =", i);

      if (String(i).length < String(amount).length) {

        console.log("String(i).length =", String(i).length, "<", "String(amount).length =", String(amount).length);

        const difference = String(amount).length - String(i).length + 1;

        console.log("difference =", difference);

        let padded = String(i).padStart(difference, "0");

        console.log("padded =", padded);
        console.log("typeof padded =", typeof padded);


        returnArray.push(`${padded}`);

        console.log(returnArray);
      } else {
        returnArray.push(`${i}`);

        console.log(returnArray);
      }
    }
  } else {
    returnArray.push("error");
  }
}

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
  const zeros = zerosNumbers(101);
  const list = generateArray(0);

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