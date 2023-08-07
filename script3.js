let currentPlayer;
let boardArray = ['', '', '', '', '', '', '', '', '']

function createBoard() {
    function createDiv(valorQuadrado) {
        const board = document.getElementById('board')
        let boardDiv = document.createElement('div')
        boardDiv.classList.add('board-square')
        boardDiv.addEventListener('click', function() {
            boardDiv.textContent = currentPlayer.mark
            boardArray[valorQuadrado] = currentPlayer.mark
            console.log(boardArray)
            winCondition();
            currentPlayer.switch()
        })
        board.appendChild(boardDiv)
        return boardDiv
    }
    return {
        render() {
            for (let i = 0; i < 9; i++) {
                createDiv(i)
            }
        }
    }
}

function game() {
    board = createBoard()
    board.render()
    p1 = createPlayer('matheus', 'X')
    p2 = createPlayer('Joao', 'O')
    currentPlayer = p1

}

function createPlayer(nome, mark) {
    return {
        nome: nome,
        mark: mark,
        switch() {
            if (currentPlayer == p1) {
                currentPlayer = p2
            } else {
                currentPlayer = p1
            }
        }
    }
}

// function winCondition(){
//     if(boardArray[0] == boardArray[1] && boardArray[0] == boardArray[2]){
//         window.alert(`${p1.nome} venceu`)
//     }
// }

function winCondition(){
      const winningStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
    for (let winState of winningStates){
        const [position1, position2, position3]= winState
        if (boardArray[position1] != '' && boardArray[position1] == boardArray[position2] && boardArray[position1] == boardArray[position3]){
            window.alert(`${currentPlayer.nome} venceu`)
        }
    }
}
game()