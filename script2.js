let boardArray = ['', '', '', '', '', '', '', '', '']
let currentPlayer;
const winConditions = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6],
];

function createPlayer(name, mark) {
    return {
        name: name,
        mark: mark,
        switchPlayer() {
            if (currentPlayer == p1) {
                currentPlayer = p2
                // console.log(currentPlayer)
            } else {
                currentPlayer = p1
                // console.log(currentPlayer)
            }
        }
    }
}

function winCondition() {
    // for(let winCondition of winConditions){
    //     const [position1, position2, position 3]= winCondition;
    //     if(boardArray[position1] !=='' && boardArray[position1]===boardArray[position2]&&boardArray[position1] === boardArray[position3]){
    //         window.alert(`o ${currentPlayer} venceu!`)
    //     }
    // }
    
    if (boardArray[1].textContent == boardArray[0].textContent && boardArray[1].textContent == boardArray[2].textContent) {
        window.alert(`o ${currentPlayer} venceu!`)
        console.log('vitoria')
        createBoard();
    }
}

function createSquare() {
    let sqr = document.createElement('div')
    sqr.classList.add('board-square')
    sqr.addEventListener('click', function() {
        sqr.textContent = currentPlayer.mark
        winCondition();
        currentPlayer.switchPlayer();
    }, { once: true })
    return sqr
}

function createBoard() {
    const board = document.getElementById('board')
    for (let i = 0; i < 9; i++) {
        let sqr = createSquare();
        boardArray[i] = sqr
        board.appendChild(sqr)
    }
}

function gameIsOn() {

    p1 = createPlayer('p1', 'X')
    p2 = createPlayer('p2', 'O')
    currentPlayer = p1;
    createBoard()
    console.log(boardArray)

}

gameIsOn()