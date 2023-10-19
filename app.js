// global
// state of the game
let isNewGame;


let activePlayer;
let scores;
let roundScore;


let diceDom = document.querySelector(".dice");

// start the game
initGame();

// New game 
function initGame() {
    // togloom ehelle state of the game
    isNewGame = true;
    // Toglogchin eelj keep var
    activePlayer = 0;

    // Player point keep var
    scores = [0, 0];

    // Player eelj tsugluulj bga onoog hadgalah
    roundScore = 0;

    // Dice side 1-6


    //  Programming start
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;

    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;

    // Return player names
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");

    diceDom.style.display = "none";
}

// Dice event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
    if (isNewGame) {
        // 1 - 6 until
        let diceNumber = Math.floor(Math.random() * 6 + 1);

        // dice image 
        diceDom.style.display = "block";

        // The picture corresponding to the random number that landed
        diceDom.src = 'dice-' + diceNumber + '.png';

        // 1 s ylgaatai bol 

        if (diceNumber !== 1) {
            // 1-s yalgaatai too buulaa. Buusan toog toglogchid nemj ugn.
            roundScore += diceNumber;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else {
            switchToNextPlayer();  // Dry dont't repeat yourself

            // // 1 buusan tul player shift

            // // this point = 0
            // roundScore = 0;
            // document.getElementById('current-' + activePlayer).textContent = 0;


            // // herv active bga player 0 bvl activeplayer 1 blgo.
            // // else activeplayer 0
            // // shift player
            // activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);


            // // active dots shift
            // document.querySelector(".player-0-panel").classList.toggle("active");
            // document.querySelector(".player-1-panel").classList.toggle("active");

            // // dice hide
            // diceDom.style.display = "none";


            // if (activePlayer === 0) {
            //     activePlayer = 1;
            // } else {
            //     activePlayer = 0;
            // }
        }

    } else {
        alert("Please click the New Game button first!");
    }

})

// hold btn eventlist

document.querySelector(".btn-hold").addEventListener('click', function () {
    if (isNewGame) {
        // add score in global scores array

        // if (activePlayer === 0) {
        //     scores[0] += roundScore;
        // } else {
        //     scores[1] += roundScore;
        // }

        scores[activePlayer] += roundScore;

        // display add point
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        // Check if the player has won (point 100)
        if (scores[activePlayer] >= 10) {
            //  state of the isGameOver 
            isNewGame = false;
            // winner 
            document.getElementById('name-' + activePlayer).textContent = "WINNER!!!"
            document.querySelector(".player-" + activePlayer + "-panel").classList.add('winner');
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove('active');
        } else {
            switchToNextPlayer();  // Dry dont't repeat yourself
        }
    } else {
        alert("Please click the New Game button first!");
    }
})

function switchToNextPlayer() {
    // this point = 0
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0;


    // herv active bga player 0 bvl activeplayer 1 blgo.
    // else activeplayer 0
    // shift player
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);


    // active dots shift
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // dice hide
    diceDom.style.display = "none";

}

// new game btn
// document.querySelector('.btn-new').addEventListener('click', function () {
//     initGame();
// });
document.querySelector('.btn-new').addEventListener('click', initGame);





