
var context = canvas.getContext("2d");
var shape = new Object();
var board;
var score;
var pac_color;
var time_elapsed;
var interval;
var CurrSide;
var i1, j1;
var monsters;
var locations;
var monsMeetpac;
var EndTime;
var monData = [{ x: 1, y: 1, img: "./pics/pinki.ico", xPrev: 1, yPrev: 1 }, { x: 21, y: 21, img: "./pics/redi.png", xPrev: 21, yPrev: 21 }, { x: 1, y: 21, img: "./pics/blui.ico", xPrev: 1, yPrev: 21 }];
var special = ["./pics/love.png", "./pics/clock.png"];
var iceCream = { x: 21, y: 1, img: "./pics/ice.png", xPrev: 1, yPrev: 1, isAlive: true };
var iceY = 1;
var iceX = 21;
var life = 3;
var limit;
var GameMusic, winMusic, eatenMusic, gameOverMusic;
var isPlay = false;
var CoinsEaten = 0;
var food_remain;


function Start() {
    
    board = new Array();
    score = 0;
    life = 3;
    limit=$("#selectTime").val();
    pac_color = "green";
    food_remain=food;
    start_time = new Date();
    var blue = 0.6 * food_remain;
    var silver = 0.3 * food_remain;
    var gold = 0.1 * food_remain;
    CoinsEaten = 0;
      isPlay = false;
    board = [
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 4, 4, 4, 0, 4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 0, 4],
        [4, 0, 4, 0, 4, 0, 4, 0, 0, 4, 0, 4, 0, 4, 0, 0, 4, 0, 4, 0, 4, 0, 4],
        [4, 0, 4, 0, 4, 0, 4, 0, 4, 4, 0, 4, 0, 4, 4, 0, 4, 0, 4, 0, 4, 0, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4, 4],
        [4, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 4],
        [4, 0, 4, 4, 4, 0, 4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 0, 4],
        [4, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4],
        [4, 0, 4, 4, 4, 0, 4, 0, 4, 4, 0, 4, 0, 0, 4, 0, 4, 0, 4, 4, 4, 0, 4],
        [4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4],
        [4, 4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4],
        [4, 0, 0, 0, 0, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 4, 4, 4, 4, 0, 4],
        [4, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 4, 0, 4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 0, 4],
        [4, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4],
        [4, 0, 0, 0, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 0, 4],
        [4, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 0, 0, 4, 0, 4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4],
        [4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
    ];

    var emptyCell = findRandomEmptyCell(board);
    shape.i = emptyCell[0];
    shape.j = emptyCell[1];
    board[emptyCell[0]][emptyCell[1]] = 2;
    emptyCell = findRandomEmptyCell(board);

    board[emptyCell[0]][emptyCell[1]] = 7; //love
    emptyCell = findRandomEmptyCell(board);
    board[emptyCell[0]][emptyCell[1]] = 8; //clock


    while (food_remain > 0) {
        emptyCell = findRandomEmptyCell(board);
        if (blue > 0) {
            board[emptyCell[0]][emptyCell[1]] = 5;
            blue--;

        }
        else if (silver > 0) {
            board[emptyCell[0]][emptyCell[1]] = 15;
            silver--;

        }
        else if (gold > 0) {
            board[emptyCell[0]][emptyCell[1]] = 25;
            gold--;

        }
        food_remain--;

    }
    creatMons();

    //reset life
    for(var i =0 ; i<3; i++){
        var elem = document.createElement("img");
        elem.src = 'pics/love.png';
        elem.setAttribute("height", "22");
        elem.setAttribute("width", "22");
        var livesDive = document.getElementById("lives");
        livesDive.appendChild(elem);
        livesDive.appendChild(elem);
        livesDive.appendChild(elem);
     }

    keysDown = {};
    addEventListener("keydown", function (e) {
        keysDown[e.keyCode] = true;
    }, false);
    addEventListener("keyup", function (e) {
        keysDown[e.keyCode] = false;
    }, false);
    interval = setInterval(UpdatePosition, 90);
    timeinterval = setInterval(Gametimer, 1000);

}


function pacMeetIce() {
    if (iceCream.isAlive == true && iceCream.x == shape.i && iceCream.y == shape.j) {
        score = score + 50;
        iceCream.isAlive = false;
    }

}

function drawIceCream() {
    if (iceCream.isAlive == true) {
        var iceImage = new Image();
        iceImage.width = "20px";
        iceImage.height = "20px";
        iceImage.src = iceCream.img;
        context.drawImage(iceImage, iceCream.x * 20 + 10 - 10, iceCream.y * 20 + 10 - 10, 20, 20);
    }
}

function moveIceCream() {

    var i = Math.floor((Math.random() * 22) + 1);
    if (i < 7) {
        var getBest = getBestMoveIceCream();
        iceCream.xPrev = iceCream.x
        iceCream.yPrev = iceCream.y
        iceCream.x = getBest.x;
        iceCream.y = getBest.y;


    }
    if (iceCream.x == shape.i && iceCream.y == shape.j) {
        pacMeetIce();
    }

}

function getBestMoveIceCream() {

    var CurrMax = Number.MAX_SAFE_INTEGER;
    var best;
    //var i = Math.floor((Math.random() * 4) + 1);
    if ((board[iceCream.x - 1][iceCream.y] != 4) && (iceCream.xPrev != iceCream.x - 1 || iceCream.yPrev != iceCream.y)) {
        best = { x: iceCream.x - 1, y: iceCream.y };
    }
    else if ((board[iceCream.x][iceCream.y + 1] != 4) && (iceCream.xPrev != iceCream.x || iceCream.yPrev != iceCream.y + 1)) {

        best = { x: iceCream.x, y: iceCream.y + 1 };

    }
    else if ((board[iceCream.x][iceCream.y - 1] != 4) && (iceCream.xPrev != iceCream.x || iceCream.yPrev != iceCream.y - 1)) {

        best = { x: iceCream.x, y: iceCream.y - 1 };
    }
    else if ((board[iceCream.x + 1][iceCream.y] != 4) && (iceCream.xPrev != iceCream.x + 1 || iceCream.yPrev != iceCream.y)) {

        best = { x: iceCream.x + 1, y: iceCream.y };

    }



    if (best == undefined) {
        best = { x: iceCream.xPrev, y: iceCream.yPrev };
    }
    return best;
}

function findRandomEmptyCell(board) {
    var i = Math.floor((Math.random() * 22) + 1);
    var j = Math.floor((Math.random() * 22) + 1);
    while (board[i][j] != 0) {
        i = Math.floor((Math.random() * 22) + 1);
        j = Math.floor((Math.random() * 22) + 1);
    }
    return [i, j];
}

function GetKeyPressed() {
    if (keysDown[38]) {
        return 1;
    }
    if (keysDown[40]) {
        return 2;
    }
    if (keysDown[37]) {
        return 3;
    }
    if (keysDown[39]) {
        return 4;
    }
}

function creatMons() {
    monsters = [];
    for (var g = 0; g < numOfMonster; g++) {
        var monster1 = { x: monData[g].x, y: monData[g].y, img: monData[g].img, xPrev: monData[g].xPrev, yPrev: monData[g].yPrev };
        monsters.push(monster1);
    }
}



function GameOver(over) {
    window.clearInterval(interval);
    window.clearInterval(timeinterval);
    GameMusic.pause();
    GameMusic.currentTime = 0;
    if (over == 1) {
        winMusic = new Audio('./data/win.mp3');
        winMusic.play();
         $("#dialogText").text("You Won! \n Your score is: " + score);
          document.getElementById("GameOver").showModal();
    } else if (over == 3) {
         $("#dialogText").text("You Lost! \n Your score is: " + score);
             document.getElementById("GameOver").showModal();
        gameOverMusic = new Audio('./data/gameOver.mp3');
        gameOverMusic.play();
    } else if (over == (2)) {
        if (score < 150) {
              $("#dialogText").text("You can do better. \n Your score is: " + score);
            gameOverMusic = new Audio('./data/gameOver.mp3');
            gameOverMusic.play();
        }
        else {
             $("#dialogText").text("We have a winner!!. \n Your score is: " + score);
            winMusic = new Audio('./data/win.mp3');
            winMusic.play();
        }

            document.getElementById("GameOver").showModal();
    }
    //remove heartes
       var hearts = document.getElementById("lives");
       while (hearts.hasChildNodes()) {
        hearts.removeChild(hearts.lastChild);
       }
}
function getBestMove(monster) {

    var CurrMax = Number.MAX_SAFE_INTEGER;
    var best;
    if (board[monster.x - 1][monster.y] != 4) {
        var distance = Math.sqrt(Math.pow(monster.x - 1 - shape.i, 2) + Math.pow(monster.y - shape.j, 2));
        if (distance < CurrMax && (monster.xPrev != monster.x - 1 || monster.yPrev != monster.y)) {
            CurrMax = distance;
            best = { x: monster.x - 1, y: monster.y };
        }
    }
    if (board[monster.x + 1][monster.y] != 4) {
        var distance = Math.sqrt(Math.pow(monster.x + 1 - shape.i, 2) + Math.pow(monster.y - shape.j, 2));
        if (distance < CurrMax && (monster.xPrev != monster.x + 1 || monster.yPrev != monster.y)) {
            CurrMax = distance;
            best = { x: monster.x + 1, y: monster.y };
        }
    }
    if (board[monster.x][monster.y - 1] != 4) {
        var distance = Math.sqrt(Math.pow(monster.x - shape.i, 2) + Math.pow(monster.y - 1 - shape.j, 2));
        if (distance < CurrMax && (monster.xPrev != monster.x || monster.yPrev != monster.y - 1)) {
            CurrMax = distance;
            best = { x: monster.x, y: monster.y - 1 };
        }
    }
    if (board[monster.x][monster.y + 1] != 4) {
        var distance = Math.sqrt(Math.pow(monster.x - shape.i, 2) + Math.pow(monster.y + 1 - shape.j, 2));
        if (distance < CurrMax && (monster.xPrev != monster.x || monster.yPrev != monster.y + 1)) {
            CurrMax = distance;
            best = { x: monster.x, y: monster.y + 1 };
        }
    }
    return best;
}

function DrawMons() {

    for (var i = 0; i < numOfMonster; i++) {
        var mon = monsters[i];
        var pic = new Image();
        pic.width = "20px";
        pic.height = "20px";
        pic.src = mon.img;
        context.drawImage(pic, mon.x * 20, mon.y * 20, 20, 20);
        if (mon.x == shape.i && mon.y == shape.j) 
            pacMeetMonst();
    }
}

function pacMeetMonst() {
    for (var i = 0; i < numOfMonster; i++) {
        var mon = monsters[i];
        if (mon.x == shape.i && mon.y == shape.j) {
            monsMeetpac = true;
            //  if(GameMusic!=null)
            if (life == 1) {
                GameOver(3);
            }
            else {
                life--;
                GameMusic.pause();
                var hearts = document.getElementById("lives");
                hearts.removeChild(hearts.lastChild);
                //$("#strikeText").text("You met a ghost! \n you have " + livesLeft + " lives left");
               // document.getElementById("Strike").showModal();
                initGame();
            }
        }
    }
    monsMeetpac = false;
    // 

}


function Draw(side) {
    //  var side=arguments[0];
    canvas.width = canvas.width; //clean board
    lblScore.value = score;
    lblTime.value = time_elapsed;
    for (i1 = 0; i1 < 23; i1++) {
        for (j1 = 0; j1 < 23; j1++) {
            var center = new Object();
            center.x = i1 * 20 + 10;
            center.y = j1 * 20 + 10;
            if (board[i1][j1] == 2) {
                DrawPac();
            } else if (board[i1][j1] == 5) {
                context.beginPath();
                context.arc(center.x, center.y, 7, 0, 2 * Math.PI); // circle
                context.fillStyle = "blue"; //color 
                context.fill();
            }
            else if (board[i1][j1] == 15) {
                context.beginPath();
                context.arc(center.x, center.y, 7, 0, 2 * Math.PI); // circle
                context.fillStyle = "silver"; //color 
                context.fill();
            }

            else if (board[i1][j1] == 25) {
                context.beginPath();
                context.arc(center.x, center.y, 7, 0, 2 * Math.PI); // circle
                context.fillStyle = "gold"; //color 
                context.fill();
            }
            else if (board[i1][j1] == 4) {
                context.fillStyle = "#9386a0"; //color 
                context.fillRect(i1 * 20, j1 * 20, 20, 20)
            }

            else if ((board[i1][j1] == 7)) {
                var pic = new Image();
                pic.width = "20px";
                pic.height = "20px";
                pic.src = special[0];
                context.drawImage(pic, i1 * 20, j1 * 20, 20, 20);
            }
            else if ((board[i1][j1] == 8)) {
                var pic = new Image();
                pic.width = "20px";
                pic.height = "20px";
                pic.src = special[1];
                context.drawImage(pic, i1 * 20, j1 * 20, 20, 20);
            }
        }
    }
    moveMonst();
    DrawMons();
    drawIceCream();
    moveIceCream();


}

function moveMonst() {
    for (var c = 0; c < numOfMonster; c++) {
        var i = Math.floor((Math.random() * 22) + 1);
        if (i < 7) {
            var getBest = getBestMove(monsters[c]);
            monsters[c].xPrev = monsters[c].x
            monsters[c].yPrev = monsters[c].y
            monsters[c].x = getBest.x;
            monsters[c].y = getBest.y;
        }
    }
}



function DrawPac() {
    var center = new Object();
    x = i1 * 20 + 10;
    y = j1 * 20 + 10;
    if (CurrSide == 2) { //down
        context.beginPath();
        context.arc(x, y, 10, 0.65 * Math.PI, 0.35 * Math.PI); // half circle
        context.lineTo(x, y);
        context.fillStyle = pac_color; //color 
        context.fill();
        context.beginPath();
        context.arc(x + 3.6, y + 2, 1.5, 0, 2 * Math.PI); // circle
        context.fillStyle = "black"; //color 
        context.fill();
    }
    else if (CurrSide == 3) { //left
        context.beginPath();
        context.arc(x, y, 10, 1.15 * Math.PI, 0.85 * Math.PI); // half circle
        context.lineTo(x, y);
        context.fillStyle = pac_color; //color 
        context.fill();
        context.beginPath();
        context.arc(x - 1.6, y - 5, 1.5, 0, 2 * Math.PI); // circle
        context.fillStyle = "black"; //color 
        context.fill();
    }
    else if (CurrSide == 1) {//up
        context.beginPath();
        context.arc(x, y, 10, 1.65 * Math.PI, 1.35 * Math.PI); // half circle
        context.lineTo(x, y);
        context.fillStyle = pac_color; //color 
        context.fill();
        context.beginPath();
        context.arc(x + 3.6, y - 2, 1.5, 0, 2 * Math.PI); // circle
        context.fillStyle = "black"; //color 
        context.fill();
    }
    else if (CurrSide == 4) {//right
        context.beginPath();
        context.arc(x, y, 10, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
        context.lineTo(x, y);
        context.fillStyle = pac_color; //color 
        context.fill();
        context.beginPath();
        context.arc(x + 1.6, y - 5, 1.5, 0, 2 * Math.PI); // circle
        context.fillStyle = "black"; //color 
        context.fill();
    }
    else {
        context.beginPath();
        context.arc(x, y, 10, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
        context.lineTo(x, y);
        context.fillStyle = pac_color; //color 
        context.fill();
        context.beginPath();
        context.arc(x + 1.6, y - 5, 1.5, 0, 2 * Math.PI); // circle
        context.fillStyle = "black"; //color 
        context.fill();
    }


}
function initGame() {
    //GameMusic = new Audio('./data/music.mp3');
    board[shape.i][shape.j] = 0;
    var emptyCell = findRandomEmptyCell(board);
    shape.i = emptyCell[0];
    shape.j = emptyCell[1];
    board[emptyCell[0]][emptyCell[1]] = 2;
    for (var g = 0; g < numOfMonster; g++) {
        monsters[g].x = monData[g].x;
        monsters[g].y = monData[g].y;
        monsters[g].img = monData[g].img;
        monsters[g].yPrev = monData[g].yPrev;
        monsters[g].xPrev = monData[g].xPrev;
    }
    //GameMusic.pause();
    eatenMusic = new Audio('./data/whawha.mp3');
    eatenMusic.play();
    GameMusic.play();
    //  Draw();
}


function UpdatePosition() {
    $("#lblScore").text(score);
    board[shape.i][shape.j] = 0;
    var x = GetKeyPressed()
    if (x == 1) {
        if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
            shape.j--;
            CurrSide = 1;
        }
    }
    if (x == 2) {
        if (shape.j < 22 && board[shape.i][shape.j + 1] != 4) {
            shape.j++;
            CurrSide = 2;
        }
    }
    if (x == 3) {
        if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
            shape.i--;
            CurrSide = 3;
        }
    }
    if (x == 4) {
        if (shape.i < 22 && board[shape.i + 1][shape.j] != 4) {
            shape.i++;
            CurrSide = 4;
        }
    }
    if (board[shape.i][shape.j] == 5) {
        score += 5;
        CoinsEaten++;
    }
    else if (board[shape.i][shape.j] == 15) {
        score += 15;
        CoinsEaten++;
    }
    else if (board[shape.i][shape.j] == 25) {
        score += 25;
        CoinsEaten++;
    }
    else if (board[shape.i][shape.j] == 7) {
        life++;
        var img = document.createElement("img"); 
        img.src = 'pics/love.png';
        img.setAttribute("height", "22");
        img.setAttribute("width", "22");
        var hearts = document.getElementById("lives");
        hearts.appendChild(img);
    }
    else if (board[shape.i][shape.j] == 8) {
        limit += 20;
    }

    board[shape.i][shape.j] = 2;


    if (CoinsEaten == food) {
        GameOver(1);
    }
    if (limit<=0) {
        GameOver(2);
    }
    else {
        Draw();
    }
    if (!isPlay) {
        GameMusic = new Audio('./data/avicii.mp3');
        GameMusic.play();
        isPlay = true;
    }
}

function restart(){
    GameOver(4);
    Start();
}

function goToSettings(){
    GameOver(4);
    $("#userSettings").show();
    $("#Game").hide();
    }

function Gametimer(){
        limit=limit-1;
        $("#lblTime").text(limit);
}