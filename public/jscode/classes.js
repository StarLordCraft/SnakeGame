class Snake{
    constructor(x, y, size){
        this.x = x;
        this.y = y;

        this.directionX = 1;
        this.directionY = 0;
        this.size = size;

        this.tail = [{x: this.x, y: this.y}]

    }

    move(){
        let newRect
        if(this.directionX == 1){
            newRect = {
                x: this.tail[this.tail.length - 1].x + this.size,
                y: this.tail[[this.tail.length - 1]].y
            }
        }

        if(this.directionX == -1){
            newRect = {
                x: this.tail[this.tail.length - 1].x - this.size,
                y: this.tail[[this.tail.length - 1]].y
            }
        }

        if(this.directionY == 1){
            newRect = {
                x: this.tail[this.tail.length - 1].x,
                y: this.tail[this.tail.length - 1].y + this.size
            }
        }

        if(this.directionY == -1){
            newRect = {
                x: this.tail[this.tail.length - 1].x,
                y: this.tail[this.tail.length - 1].y - this.size
            }
        }

        this.tail.shift();
        this.tail.push(newRect);
    }
}

class Apple{
    constructor(canvasWidth, canvasHeight, snakeSize, snakeTail){
        let isTouching;

        while(true){
            isTouching = false;
            this.x = Math.floor(Math.random() * canvasWidth / snakeSize) * snakeSize;
            this.y = Math.floor(Math.random() * canvasHeight / snakeSize) * snakeSize;
        
            for(let i = 0; i < snakeTail; ++i){
                if(this.x == snakeTail[i].x && this.y == snakeTail[i].y)isTouching = true;
                if(isTouching)break;
            }
            if(!isTouching)break;
        }
    }
}

export {Snake, Apple}