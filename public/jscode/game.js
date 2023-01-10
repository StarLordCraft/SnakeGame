//DIFICULDADE VAI TER A VER COM O TEMPO DE UPDATE DA TELA



import {handleButtonClick, handleClickOutside} from './pause.js'
import {Snake, Apple} from './classes.js'

document.querySelector('.btnMenu').addEventListener('click', handleButtonClick);
document.querySelector('.btnMenu').addEventListener('touchstart', handleButtonClick);


function createRect(x, y, width, height, color) {
    display.fillStyle = color
    display.fillRect(x, y, width, height)
}

function drawBoard(){
    let colorCounter = 0;
    let color = ['#228B22', '#96c93d'];
    for(let currentROW = 0; currentROW < 21; ++currentROW){
        for(let currentCOL = 0; currentCOL < 21; ++currentCOL){
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
            apple = new Apple(display.width, display.height, player.size, player.tail);
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
            createRect(player.tail[i].x, player.tail[i].y,
                player.size, player.size, "#0047ab")
            }else{
                createRect(player.tail[i].x, player.tail[i].y,
                    player.size, player.size, "#00004d")
                }
    }
}

function gameLoop(){
    let timeNow = Date.now();
    console.log(timeNow)
    const delta = timeNow - timeStart;

    console.log(delta);

    if(delta >= timer){
        update();
        drawPlayer();

        timeStart = Date.now();
    }
    requestAnimationFrame(gameLoop)
}

const display = document.getElementById('display').getContext('2d');

const player = new Snake(5 * 30, 10 * 30, 30);
let apple = new Apple(display.width, display.height, player.size, player.tail);

const timer = 100;
let timeStart = Date.now();
console.log(timeStart)

gameLoop();