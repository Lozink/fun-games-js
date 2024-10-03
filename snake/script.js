let direction;
let last_direction;
var isLaunched = false;
let touched = false;

var width = 450; //BoxWidth
var height = 450; //BowHeight
var p = 10; //Padding

var x = p+7*30;
var y = p+7*30;
var list = [[x,y]];

var x_toEat;
var y_toEat;
var inside = true;

var canvas = document.getElementById('field');
var ctx = canvas.getContext("2d");

function drawBoard() {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    for (var x = 0; x <= width; x += 30) {
        ctx.moveTo(0.5 + x + p, p);
        ctx.lineTo(0.5 + x + p, height + p);
    }

    for (var x = 0; x <= height; x += 30) {
        ctx.moveTo(p, 0.5 + x + p);
        ctx.lineTo(width + p, 0.5 + x + p);
    }
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle='red';
    ctx.fillRect(220,220,30,30);
    ctx.stroke();
}

function move() {
    last_direction=direction;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.strokeStyle = "black";
    for (var i = 0; i <= width; i += 30) {
        ctx.moveTo(0.5 + i + p, p);
        ctx.lineTo(0.5 + i + p, height + p);
    }

    for (var i = 0; i <= height; i += 30) {
        ctx.moveTo(p, 0.5 + i + p);
        ctx.lineTo(width + p, 0.5 + i + p);
    }
    ctx.stroke();

    switch (direction) {
        case "left":
            x=x-30;
            break
        case "up":
            y-=30;
            break
        case "right":
            x+=30;
            break
        case "down":
            y+=30;
            break
    }

    if (x<10 || x>450 || y<10 || y>450) {
        clearInterval(myInterval);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.fillStyle='black';
        ctx.fillText("You lost ! Your score : " + list.length,170,210);
        ctx.stroke();
        isLaunched=false;
        let btn = document.createElement('button');
        btn.innerText='Retry';
        btn.classList.add('retry_button');
        btn.addEventListener('click', () => {retry()
            btn.remove()});
        document.getElementById('btn').appendChild(btn);
    } else {
        for (let i = 0; i<list.length;i++) {
            if (x==list[i][0] && y==list[i][1]) {
                clearInterval(myInterval);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                ctx.fillStyle='black';   
                ctx.fillText("You lost ! Your score : " + list.length,170,210);
                ctx.stroke();
                isLaunched=false;
                let btn = document.createElement('button');
                btn.innerText='Retry';
                btn.classList.add('retry_button');
                btn.addEventListener('click', () => {
                    retry();
                    btn.remove()});
                document.getElementById('btn').appendChild(btn);
                touched=true;
            }
        }
        if (! touched) {
            if (x==x_toEat && y==y_toEat) {
                list.push([0,0]);
                for (let i = list.length-1;i>0;i--) {
                    list[i]=list[i-1];
                }
                list[0]=[x,y];
                while (inside) {
                    inside=false;
                    for (let i = 0; i<list.length;i++) {
                        if (x_toEat==list[i][0] && y_toEat==list[i][1]) {
                            inside=true;
                            x_toEat = p+30*Math.floor(Math.random() * 15);
                            y_toEat = p+30*Math.floor(Math.random() * 15);
                        }
                    }
                }
                inside=true;
            } else {
                for (let i = list.length-1;i>0;i--) {
                    list[i]=list[i-1];
                }
                list[0]=[x,y];
            }

            for (let i =0;i<list.length;i++) {
                ctx.beginPath();
                ctx.fillStyle='red';
                ctx.fillRect(list[i][0],list[i][1],30,30);
                ctx.stroke();
            }

            ctx.beginPath();
            ctx.fillStyle='green';
            ctx.fillRect(x_toEat,y_toEat,30,30);
            ctx.stroke();
        }
    }
}

function retry() {
    direction='';
    last_direction='';
    isLaunched = false;
    touched = false;

    width = 450; //BoxWidth
    height = 450; //BowHeight
    p = 10; //Padding

    x = p+7*30;
    y = p+7*30;
    list = [[x,y]];

    inside = true;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBoard();
    getDirection();
}

function getDirection() {
    $(document).keydown(function(e) {
        if (e.keyCode > 36 && e.keyCode < 41) {
            if (!isLaunched) {
                isLaunched=true;
                myInterval = setInterval(move,150);
                x_toEat = p+30*Math.floor(Math.random() * 15);
                y_toEat = p+30*Math.floor(Math.random() * 15);
            }
            switch (e.keyCode) {
                case 37:
                    if (last_direction!="right") {
                        direction = "left";
                    }
                    break
                case 38:
                    if (last_direction!="down") {
                        direction = "up";
                    }
                    break
                case 39:
                    if (last_direction!="left") {
                        direction = "right";
                    }
                    break
                case 40:
                    if (last_direction!="up") {
                        direction = "down";
                    }
                    break
            }
        }
    });
}

drawBoard();

$(document).ready(getDirection());
