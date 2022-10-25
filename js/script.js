// Al click di una cella
// Il primo giocatore inserirà una X in una cella vuota (la flag passerà a false e il numero dell'indice della cella verrà inserito in un array)
// In seguito, il secondo giocatore inserirà una O in una cella vuota (flag ripasserà a true e il numero dell'indice della cella verrà inserito in un array)
// Il ciclo confronterà gli array ad ogni click con gli array con le combinazioni disponibili
// Quando un array corrisponde ad una delle combinazioni, il gioco finisce

const cells = document.querySelectorAll(".cell");

const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const gameField = document.getElementById("gameField");


const playerOne = [];
const playerTwo = [];

let currentPlayer = true;
for (let i = 0; i < cells.length; i++) {
    document.getElementById("restart").addEventListener("click", function() {
        singleCell.innerHTML = "";
    })
    const singleCell = cells[i];
    singleCell.addEventListener("click", function() {
        if (currentPlayer) {
            singleCell.innerHTML +=`&#215;`;
            playerOne.push(i);
            currentPlayer = false;
            
        } else {
            singleCell.innerHTML += `&#9900;`;
            playerTwo.push(i);
            currentPlayer = true;
        }
        console.log(playerOne, playerTwo);
    })
    function winFunction() {
        if (playerOne === winCombinations) {
            alert("Player One Wins!");
        } else if (playerTwo === winCombinations) {
            alert("Player Two Wins!");
        }
    }
}
