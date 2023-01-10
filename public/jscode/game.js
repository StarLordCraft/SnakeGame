//DIFICULDADE VAI TER A VER COM O TEMPO DE UPDATE DA TELA



import {handleButtonClick, handleClickOutside} from './pause.js'
import {player, Apple} from './classes.js'

document.querySelector('.btnMenu').addEventListener('click', handleButtonClick);
document.querySelector('.btnMenu').addEventListener('touchstart', handleButtonClick);


function drawBoard(){
    let colorCounter = 0;
    let color = ['#228B22', '#96c93d'];
    for(let currentROW = 0; currentROW < gameMatrix.length; ++currentROW){
        for(let currentCOL = 0; currentCOL < gameMatrix[currentROW].length; ++currentCOL){
            display.fillStyle = color[colorCounter % 2];
            display.fillRect(currentROW * 30, currentCOL * 30, 30, 30);
            
            ++colorCounter;
        }
    }   
}

function eatApple(){
    if(player.tail[player.tail.length - 1].x == apple.x &&
        player.tail[player.tail.length - 1].y == apple.y){
            player.tail[player.tail.length] = {x:apple.x, y: apple.y}
            apple = new Apple(display.width, display.height, player);
        }
    }
    
function update(){
    drawBoard();
    player.move();
    eatApple();
}

function drawPlayer(){
    for (let i = 0; i < player.tail.length; i++){
        if(i != player.tail.length -1 ){
            createRect(player.tail[i].x + 2.5, player.tail[i].y + 2.5,
                player.size - 5, player.size- 5, "#0047ab")
            }else{
                createRect(player.tail[i].x + 2.5, player.tail[i].y + 2.5,
                    player.size - 5, player.size- 5, "#00004d")
                }
    }
}
const display = document.getElementById('display').getContext('2d');

const player = new player(10, 10, 30);
let apple = new Apple(display.width, display.height, player);