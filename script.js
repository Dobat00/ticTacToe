let boardTrack = ['','','','','','','','','']

function createPlayer(name, mark) {
    return {
        name: name,
        mark: mark,
        getName() {
            return name
        },
        marcar(player){
            for (let i = 0; i < 9; i++){
                let quadrado = document.getElementsByClassName('board-div')[i]
                // quadrado.addEventListener('click', function(){
                //     console.log('clicado')
                //     if (player == 1){
                //         quadrado.innerHTML = 'X'
                //     }else if(player == 2){
                //         quadrado.innerHTML = 'O'
                //     }
                    
                // })          
            } 
        }
    }
}

function gameIsOn(){
    return{
        start(){
            board = createBoard()
            window.onload = board.render()
            p1 = createPlayer('matheus','X')
            p2 = createPlayer('lucas', 'O')
            },
        makePlay(){
            console.log(game.currentPlayer)
            }
        }
    }
    


// function createBoard(){
//     function createDiv(){
//         const board = document.getElementById('board')
//         let boardDiv = docuemnt.createElement('div')
//         boardDiv.classList.add('board-div')
//         boardDiv.addEvenetListener('click', function(){
//             console.log('clicado')
//         })
//         board.appendChild(boardDiv)
//         return boardDiv
//     }
//     return{
//         render(){
//             for (let i = 0; i<9; i++){
//                 createDiv()
//             }
//         }
//     }
// }
function createBoard() {
    function createDiv(track) {
        const board = document.getElementById('board')
        let boardDiv = document.createElement('div')
        boardDiv.classList.add('board-div')
        boardDiv.addEventListener('click', function(){
            boardDiv.textContent = 'x'
        })
        board.appendChild(boardDiv)
        boardTrack[track] = 'x'
        return boardDiv
    }
    return {
        getShape() {
            console.log(shape)
            return shape
        },
        render() {
            for (let i = 0; i < 9; i++) {
                createDiv(i)
            }
        },
    }
}

const game = gameIsOn()
game.start()


