// document.getElementById("count").innerText = 5

// let myAge = 18;
// let dogAge = 7;
// let myDogAge = myAge * dogAge;

// console.log("Your age in dog years is " + myDogAge + "!");

//

// let bonusPoints = 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

// let lapsCompleted = 0;

// function incrementLap() {
//     lapsCompleted++;
// }

// incrementLap();
// incrementLap();
// incrementLap();

// console.log(lapsCompleted);

//

let count = 0;

let countEl = document.getElementById("count-el");

let saveEl = document.getElementById("save-el");

function increment() {
   count++;
   countEl.textContent = count;
}

function decrement() {
    count--;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;

}

function reset() {
    count = 0;
    countEl.textContent = 0;
}

