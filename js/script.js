// get all elements
const firstWindowEl = document.querySelector('.first-window');
const secondWindowEl = document.querySelector('.second-window');
const thirdWindowEl = document.querySelector('.third-window');
const fourthWindowEl = document.querySelector('.fourth-window');
const fifthWindowEl = document.querySelector('.fifth-window');
const sixthWindowEl = document.querySelector('.sixth-window');
const seventhWindowEl = document.querySelector('.seventh-window');
const eighthWindowEl = document.querySelector('.eighth-window');
const ninethWindowEl = document.querySelector('.nineth-window');

// arrays for counting
const firstPlayerArr = [false, false, false, false, false, false, false, false, false,];
const secondPlayerArr = [false, false, false, false, false, false, false, false, false,];

// add events to elements
firstWindowEl.addEventListener("click", onFirstWindowElClick);
secondWindowEl.addEventListener("click", onSecondWindowElClick);
thirdWindowEl.addEventListener("click", onThirdWindowElClick);
fourthWindowEl.addEventListener("click", onFourthWindowElClick);
fifthWindowEl.addEventListener("click", onFifthWindowElClick);
sixthWindowEl.addEventListener("click", onSixthWindowElClick);
seventhWindowEl.addEventListener("click", onSeventhWindowElClick);
eighthWindowEl.addEventListener("click", onEighthWindowElClick);
ninethWindowEl.addEventListener("click", onNinethWindowElClick);

// checking wining combination of two players (need to add array)
function checkWinningCombinationOfPlayer(i) {
    if (i[0] === true && i[1] === true && i[2] === true) {
        alert("You're won!");
        firstWindowEl.disabled = false;
        firstWindowEl.className = "first-window window";
        secondWindowEl.disabled = false;
        secondWindowEl.className = "second-window window";
        thirdWindowEl.disabled = false;
        thirdWindowEl.className = "third-window window";
        fourthWindowEl.disabled = false;
        fourthWindowEl.className = "fourth-window window";
        fifthWindowEl.disabled = true;
        fifthWindowEl.className = "fifth-window window";
        sixthWindowEl.disabled = true;
        sixthWindowEl.className = "sixth-window window";
        seventhWindowEl.disabled = true;
        seventhWindowEl.className = "seventh-window window";
        eighthWindowEl.disabled = true;
        eighthWindowEl.className = "eighth-window window";
        ninethWindowEl.disabled = true;
        ninethWindowEl.className = "nineth-window window";
        firstPlayerArr = [false, false, false, false, false, false, false, false, false,];
        secondPlayerArr = [false, false, false, false, false, false, false, false, false,];
    } else if (i[3] === true && i[4] === true && i[5] === true) {
        alert("You're won!");
        firstWindowEl.disabled = false;
        firstWindowEl.className = "first-window window";
        secondWindowEl.disabled = false;
        secondWindowEl.className = "second-window window";
        thirdWindowEl.disabled = false;
        thirdWindowEl.className = "third-window window";
        fourthWindowEl.disabled = false;
        fourthWindowEl.className = "fourth-window window";
        fifthWindowEl.disabled = true;
        fifthWindowEl.className = "fifth-window window";
        sixthWindowEl.disabled = true;
        sixthWindowEl.className = "sixth-window window";
        seventhWindowEl.disabled = true;
        seventhWindowEl.className = "seventh-window window";
        eighthWindowEl.disabled = true;
        eighthWindowEl.className = "eighth-window window";
        ninethWindowEl.disabled = true;
        ninethWindowEl.className = "nineth-window window";
        firstPlayerArr = [false, false, false, false, false, false, false, false, false,];
        secondPlayerArr = [false, false, false, false, false, false, false, false, false,];
    } else if (i[6] === true && i[7] === true && i[8] === true) {
        alert("You're won!");
        firstWindowEl.disabled = false;
        firstWindowEl.className = "first-window window";
        secondWindowEl.disabled = false;
        secondWindowEl.className = "second-window window";
        thirdWindowEl.disabled = false;
        thirdWindowEl.className = "third-window window";
        fourthWindowEl.disabled = false;
        fourthWindowEl.className = "fourth-window window";
        fifthWindowEl.disabled = true;
        fifthWindowEl.className = "fifth-window window";
        sixthWindowEl.disabled = true;
        sixthWindowEl.className = "sixth-window window";
        seventhWindowEl.disabled = true;
        seventhWindowEl.className = "seventh-window window";
        eighthWindowEl.disabled = true;
        eighthWindowEl.className = "eighth-window window";
        ninethWindowEl.disabled = true;
        ninethWindowEl.className = "nineth-window window";
        firstPlayerArr = [false, false, false, false, false, false, false, false, false,];
        secondPlayerArr = [false, false, false, false, false, false, false, false, false,];
    } else if (i[0] === true && i[3] === true && i[6] === true) {
        alert("You're won!");
        firstWindowEl.disabled = false;
        firstWindowEl.className = "first-window window";
        secondWindowEl.disabled = false;
        secondWindowEl.className = "second-window window";
        thirdWindowEl.disabled = false;
        thirdWindowEl.className = "third-window window";
        fourthWindowEl.disabled = false;
        fourthWindowEl.className = "fourth-window window";
        fifthWindowEl.disabled = true;
        fifthWindowEl.className = "fifth-window window";
        sixthWindowEl.disabled = true;
        sixthWindowEl.className = "sixth-window window";
        seventhWindowEl.disabled = true;
        seventhWindowEl.className = "seventh-window window";
        eighthWindowEl.disabled = true;
        eighthWindowEl.className = "eighth-window window";
        ninethWindowEl.disabled = true;
        ninethWindowEl.className = "nineth-window window";
        firstPlayerArr = [false, false, false, false, false, false, false, false, false,];
        secondPlayerArr = [false, false, false, false, false, false, false, false, false,];
    } else if (i[1] === true && i[4] === true && i[7] === true) {
        alert("You're won!");
        firstWindowEl.disabled = false;
        firstWindowEl.className = "first-window window";
        secondWindowEl.disabled = false;
        secondWindowEl.className = "second-window window";
        thirdWindowEl.disabled = false;
        thirdWindowEl.className = "third-window window";
        fourthWindowEl.disabled = false;
        fourthWindowEl.className = "fourth-window window";
        fifthWindowEl.disabled = true;
        fifthWindowEl.className = "fifth-window window";
        sixthWindowEl.disabled = true;
        sixthWindowEl.className = "sixth-window window";
        seventhWindowEl.disabled = true;
        seventhWindowEl.className = "seventh-window window";
        eighthWindowEl.disabled = true;
        eighthWindowEl.className = "eighth-window window";
        ninethWindowEl.disabled = true;
        ninethWindowEl.className = "nineth-window window";
        firstPlayerArr = [false, false, false, false, false, false, false, false, false,];
        secondPlayerArr = [false, false, false, false, false, false, false, false, false,];
    } else if (i[2] === true && i[5] === true && i[8] === true) {
        alert("You're won!");
        firstWindowEl.disabled = false;
        firstWindowEl.className = "first-window window";
        secondWindowEl.disabled = false;
        secondWindowEl.className = "second-window window";
        thirdWindowEl.disabled = false;
        thirdWindowEl.className = "third-window window";
        fourthWindowEl.disabled = false;
        fourthWindowEl.className = "fourth-window window";
        fifthWindowEl.disabled = true;
        fifthWindowEl.className = "fifth-window window";
        sixthWindowEl.disabled = true;
        sixthWindowEl.className = "sixth-window window";
        seventhWindowEl.disabled = true;
        seventhWindowEl.className = "seventh-window window";
        eighthWindowEl.disabled = true;
        eighthWindowEl.className = "eighth-window window";
        ninethWindowEl.disabled = true;
        ninethWindowEl.className = "nineth-window window";
        firstPlayerArr = [false, false, false, false, false, false, false, false, false,];
        secondPlayerArr = [false, false, false, false, false, false, false, false, false,];
    } else if (i[0] === true && i[4] === true && i[8] === true) {
        alert("You're won!");
        firstWindowEl.disabled = false;
        firstWindowEl.className = "first-window window";
        secondWindowEl.disabled = false;
        secondWindowEl.className = "second-window window";
        thirdWindowEl.disabled = false;
        thirdWindowEl.className = "third-window window";
        fourthWindowEl.disabled = false;
        fourthWindowEl.className = "fourth-window window";
        fifthWindowEl.disabled = true;
        fifthWindowEl.className = "fifth-window window";
        sixthWindowEl.disabled = true;
        sixthWindowEl.className = "sixth-window window";
        seventhWindowEl.disabled = true;
        seventhWindowEl.className = "seventh-window window";
        eighthWindowEl.disabled = true;
        eighthWindowEl.className = "eighth-window window";
        ninethWindowEl.disabled = true;
        ninethWindowEl.className = "nineth-window window";
        firstPlayerArr = [false, false, false, false, false, false, false, false, false,];
        secondPlayerArr = [false, false, false, false, false, false, false, false, false,];
    } else if (i[2] === true && i[4] === true && i[6] === true) {
        alert("You're won!");
        firstWindowEl.disabled = false;
        firstWindowEl.className = "first-window window";
        secondWindowEl.disabled = false;
        secondWindowEl.className = "second-window window";
        thirdWindowEl.disabled = false;
        thirdWindowEl.className = "third-window window";
        fourthWindowEl.disabled = false;
        fourthWindowEl.className = "fourth-window window";
        fifthWindowEl.disabled = true;
        fifthWindowEl.className = "fifth-window window";
        sixthWindowEl.disabled = true;
        sixthWindowEl.className = "sixth-window window";
        seventhWindowEl.disabled = true;
        seventhWindowEl.className = "seventh-window window";
        eighthWindowEl.disabled = true;
        eighthWindowEl.className = "eighth-window window";
        ninethWindowEl.disabled = true;
        ninethWindowEl.className = "nineth-window window";
        firstPlayerArr = [false, false, false, false, false, false, false, false, false,];
        secondPlayerArr = [false, false, false, false, false, false, false, false, false,];
    }
}

const indexOfTurn = 0;

// actions on click first player
function onFirstWindowElClick() {
    if (indexOfTurn % 2 == 0) {
        firstPlayerArr[0] = true;
        firstWindowEl.className = "first-window window cross";
        firstWindowEl.disabled = true;
        indexOfTurn++;
        checkWinningCombinationOfPlayer(firstPlayerArr);
    } else {
        secondPlayerArr[0] = true;
        firstWindowEl.className = "first-window window circle";
        firstWindowEl.disabled = true;
        indexOfTurn++;
        checkWinningCombinationOfPlayer(secondPlayerArr);
    }
    console.log(firstPlayerArr);
    console.log(secondPlayerArr);
}

function onSecondWindowElClick() {
    if (indexOfTurn % 2 == 0) {
        firstPlayerArr[1] = true;
        secondWindowEl.className = "second-window window cross";
        secondWindowEl.disabled = true;
        checkWinningCombinationOfPlayer(firstPlayerArr);
        indexOfTurn++;
    } else {
        secondPlayerArr[1] = true;
        secondWindowEl.className = "second-window window circle";
        secondWindowEl.disabled = true;
        checkWinningCombinationOfPlayer(secondPlayerArr);
        indexOfTurn++;
    }
    console.log(firstPlayerArr);
    console.log(secondPlayerArr);
}

function onThirdWindowElClick() {
    if (indexOfTurn % 2 == 0) {
        firstPlayerArr[2] = true;
        thirdWindowEl.className = "third-window window cross";
        thirdWindowEl.disabled = true;
        checkWinningCombinationOfPlayer(firstPlayerArr);
        indexOfTurn++;
    } else {
        secondPlayerArr[2] = true;
        thirdWindowEl.className = "third-window window circle";
        thirdWindowEl.disabled = true;
        checkWinningCombinationOfPlayer(secondPlayerArr);
        indexOfTurn++;
    }
    console.log(firstPlayerArr);
    console.log(secondPlayerArr);
}

function onFourthWindowElClick() {
    if (indexOfTurn % 2 == 0) {
        firstPlayerArr[3] = true;
        fourthWindowEl.className = "fourth-window window cross";
        fourthWindowEl.disabled = true;
        checkWinningCombinationOfPlayer(firstPlayerArr);
        indexOfTurn++;
    } else {
        secondPlayerArr[3] = true;
        fourthWindowEl.className = "fourth-window window circle";
        fourthWindowEl.disabled = true;
        checkWinningCombinationOfPlayer(secondPlayerArr);
        indexOfTurn++;
    }
    console.log(firstPlayerArr);
    console.log(secondPlayerArr);
}

function onFifthWindowElClick() {
    if (indexOfTurn % 2 == 0) {
        firstPlayerArr[4] = true;
        fifthWindowEl.className = "fifth-window window cross";
        fifthWindowEl.disabled = true;
        checkWinningCombinationOfPlayer(firstPlayerArr);
        indexOfTurn++;
    } else {
        secondPlayerArr[4] = true;
        fifthWindowEl.className = "fifth-window window circle";
        fifthWindowEl.disabled = true;
        checkWinningCombinationOfPlayer(secondPlayerArr);
        indexOfTurn++;
    }
    console.log(firstPlayerArr);
    console.log(secondPlayerArr);
}

function onSixthWindowElClick() {
    if (indexOfTurn % 2 == 0) {
        firstPlayerArr[5] = true;
        sixthWindowEl.className = "sixth-window window cross";
        sixthWindowEl.disabled = true;
        checkWinningCombinationOfPlayer(firstPlayerArr);
        indexOfTurn++;
    } else {
        secondPlayerArr[5] = true;
        sixthWindowEl.className = "sixth-window window circle";
        sixthWindowEl.disabled = true;
        checkWinningCombinationOfPlayer(secondPlayerArr);
        indexOfTurn++;
    }
    console.log(firstPlayerArr);
    console.log(secondPlayerArr);
}

function onSeventhWindowElClick() {
    if (indexOfTurn % 2 == 0) {
        firstPlayerArr[6] = true;
        seventhWindowEl.className = "seventh-window window cross";
        seventhWindowEl.disabled = true;
        checkWinningCombinationOfPlayer(firstPlayerArr);
        indexOfTurn++;
    } else {
        secondPlayerArr[6] = true;
        seventhWindowEl.className = "seventh-window window circle";
        seventhWindowEl.disabled = true;
        checkWinningCombinationOfPlayer(secondPlayerArr);
        indexOfTurn++;
    }
    console.log(firstPlayerArr);
    console.log(secondPlayerArr);
}

function onEighthWindowElClick() {
    if (indexOfTurn % 2 == 0) {
        firstPlayerArr[7] = true;
        eighthWindowEl.className = "eighth-window window cross";
        eighthWindowEl.disabled = true;
        checkWinningCombinationOfPlayer(firstPlayerArr);
        indexOfTurn++;
    } else {
        secondPlayerArr[7] = true;
        eighthWindowEl.className = "eighth-window window circle";
        eighthWindowEl.disabled = true;
        checkWinningCombinationOfPlayer(secondPlayerArr);
        indexOfTurn++;
    }
    console.log(firstPlayerArr);
    console.log(secondPlayerArr);
}

function onNinethWindowElClick() {
    if (indexOfTurn % 2 == 0) {
        firstPlayerArr[8] = true;
        ninethWindowEl.className = "nineth-window window cross";
        ninethWindowEl.disabled = true;
        checkWinningCombinationOfPlayer(firstPlayerArr);
        indexOfTurn++;
    } else {
        secondPlayerArr[8] = true;
        ninethWindowEl.className = "nineth-window window circle";
        ninethWindowEl.disabled = true;
        checkWinningCombinationOfPlayer(secondPlayerArr);
        indexOfTurn++;
    }
    console.log(firstPlayerArr);
    console.log(secondPlayerArr);
}