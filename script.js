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

function teste1(param1){
    console.log(`esse eh o param1 ${param1}`)
}

const teste2 = param2 =>{
    console.log(`esse eh o param2 ${param2}`)
}

const teste3 = (param3) => {
    console.log(`esse eh o param3 ${param3}`)
}

teste1(1);
teste2(2);
teste3(3);