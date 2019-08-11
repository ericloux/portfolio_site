function tetris() {
    let content = "";

    content += `
    <br><br>
    <div id="board">
        <canvas width="350" height="440"></canvas>
    </div>

    <br>

    <p>
        This game is named after its creator, Alexey Pajitnov, instead of giving it its more well-known, trademarked name. I've been playing 
        this game for as long as I can remember, so implementing it in JavaScript was almost a necessity for me.
    </p>
    
    <p>
        In true gamer fashion, the controls use the letter keys rather than the arrow keys. A description of each key follows:
    </p>

    <table>
        <tr>
            <td>A</td>
            <td>Move Left</td>
        </tr>
        <tr>
            <td>D</td>
            <td>Move Right</td>
        </tr>
        <tr>
            <td>S</td>
            <td>Soft Down</td>
        </tr>
        <tr>
            <td>Space</td>
            <td>Hard Down</td>
        </tr>
        <tr>
            <td>K</td>
            <td>Counter-clockwise</td>
        </tr>
        <tr>
            <td>L</td>
            <td>Clockwise</td>
        </tr>
    </table>

    <br><br>
    `;

    document.getElementsByClassName("content")[0].innerHTML = content;

    const canvas = document.querySelector("#board canvas");
    const ctx = canvas.getContext("2d");
    const { width:w, height:h } = canvas;

        // start positions in pixels for drawing squares
    const tileStartX = 22;
    const tileStartY = 22;

        // distance between start and end of tile
    const tileWidth = 18;

        // distance between starts of tiles
    const tileSpan = 20;

        // total columns and rows
    const tileColumns = 10;
    const tileRows = 20;

        // pieces already on the board
    let gameBoard = new Array(tileColumns);

    for (let i = 0; i < tileColumns; i++) {
        gameBoard[i] = new Array(tileRows);
    }

        // array for current piece
    let pieceMask = new Array(4);

        // string identifier of current piece
    let pieceType;
    let nextPieceType = "I";

        // current piece's position on board
    let pieceX = 3;
    let pieceY = -2;

        // listens for keypress events
    document.addEventListener("keydown", keyDownHandler, false);

        // variables for input
    let leftPressed = false;
    let rightPressed = false;
    let downPressed = false;
    let upPressed = false;
    let clockwisePressed = false;
    let counterclockwisePressed = false;
    let spacePressed = false;

        // variables for when next piece will move
    let dropInterval = 120;
    let currentInterval = 0;

        // variables for scoring
    let linesCleared = 0;
    let score = 0;
    let level = 1;

    let gameOver = false;

    let globalHueModifier = Math.floor(Math.random()*360); 
    let globalSaturation = Math.floor(Math.random()*75)+25;
    let globalLightness = Math.floor(Math.random()*30)+40;

    const iHue = 0;
    const jHue = 50;
    const lHue = 100;
    const oHue = 150;
    const sHue = 200;
    const tHue = 250;
    const zHue = 300;

        // initialize pieceMask as 4x4 grid
    for (let i = 0; i < 4; i++) {
        pieceMask[i] = new Array(4);
        for (let j = 0; j < 4; j++) {
            pieceMask[i][j] = {
                color:"#FFFFFF",
                filled: false
            }
        }
    }

    function createHSL(pieceType) {
        let output = "hsl(";

        let myHue = globalHueModifier;
        switch (pieceType) {

        case "I":
            myHue += iHue;
            break;
            
        case "J":
            myHue += jHue;
            break;
            
        case "L":
            myHue += lHue;
            break;
            
        case "O":
            myHue += oHue;
            break;
            
        case "S":
            myHue += sHue;
            break;
            
        case "T":
            myHue += tHue;
            break;
            
        case "Z":
            myHue += zHue;
            break;
            
        default:
            myHue = Math.floor(Math.random()*360);
            break;
        }

        myHue %= 360;
        output += myHue;
        output += "," + globalSaturation + "%," + globalLightness + "%)";
        return output;
    }

        // returns a string in hex given RGB
    function createRGB(red, green, blue) {
        red = red.toString(16);
        if (red == 0) red = "00";
        green = green.toString(16);
        if (green == 0) green = "00";
        blue = blue.toString(16)
        if (blue == 0) blue = "00";
        return `#${red}${green}${blue}`;
    }

        // colors a piece a given color
    function colorPiece(newColor) {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                pieceMask[i][j].color = newColor;
            }
        }
    }

        // initialize gameBoard as tileRows x tileColumns grid
    function initializeBoard() {
        for (let i = 0; i < tileColumns; i++) {
            for (let j = 0; j < tileRows; j++) {
                let myColor = createHSL("A");
                gameBoard[i][j] = {
                    color:myColor,
                    filled: false
                }
            }
        }
    }

    function newPiece() {
        pieceX = 3;
        pieceY = -2;
        randomPiece();
    }

        // turns pieceMask to O shape
    function pieceO() {
        pieceMask[0][0].filled = false;
        pieceMask[0][1].filled = false;
        pieceMask[0][2].filled = false;
        pieceMask[0][3].filled = false;
        pieceMask[1][0].filled = false;
        pieceMask[1][1].filled = false;
        pieceMask[1][2].filled = false;
        pieceMask[1][3].filled = false;
        pieceMask[2][0].filled = false;
        pieceMask[2][1].filled = false;
        pieceMask[2][2].filled = true;
        pieceMask[2][3].filled = true;
        pieceMask[3][0].filled = false;
        pieceMask[3][1].filled = false;
        pieceMask[3][2].filled = true;
        pieceMask[3][3].filled = true;
        colorPiece(createHSL("O"));
    }

        // turns pieceMask to J shape
    function pieceJ() {
        pieceMask[0][0].filled = false;
        pieceMask[0][1].filled = false;
        pieceMask[0][2].filled = false;
        pieceMask[0][3].filled = false;
        pieceMask[1][0].filled = false;
        pieceMask[1][1].filled = false;
        pieceMask[1][2].filled = true;
        pieceMask[1][3].filled = false;
        pieceMask[2][0].filled = false;
        pieceMask[2][1].filled = false;
        pieceMask[2][2].filled = true;
        pieceMask[2][3].filled = false;
        pieceMask[3][0].filled = false;
        pieceMask[3][1].filled = false;
        pieceMask[3][2].filled = true;
        pieceMask[3][3].filled = true;
        colorPiece(createHSL("J"));
    }

        // turns pieceMask to L shape
    function pieceL() {
        pieceMask[0][0].filled = false;
        pieceMask[0][1].filled = false;
        pieceMask[0][2].filled = false;
        pieceMask[0][3].filled = false;
        pieceMask[1][0].filled = false;
        pieceMask[1][1].filled = false;
        pieceMask[1][2].filled = true;
        pieceMask[1][3].filled = true;
        pieceMask[2][0].filled = false;
        pieceMask[2][1].filled = false;
        pieceMask[2][2].filled = true;
        pieceMask[2][3].filled = false;
        pieceMask[3][0].filled = false;
        pieceMask[3][1].filled = false;
        pieceMask[3][2].filled = true;
        pieceMask[3][3].filled = false;
        colorPiece(createHSL("L"));
    }

        // turns pieceMask to I shape
    function pieceI() {
        pieceMask[0][0].filled = false;
        pieceMask[0][1].filled = false;
        pieceMask[0][2].filled = true;
        pieceMask[0][3].filled = false;
        pieceMask[1][0].filled = false;
        pieceMask[1][1].filled = false;
        pieceMask[1][2].filled = true;
        pieceMask[1][3].filled = false;
        pieceMask[2][0].filled = false;
        pieceMask[2][1].filled = false;
        pieceMask[2][2].filled = true;
        pieceMask[2][3].filled = false;
        pieceMask[3][0].filled = false;
        pieceMask[3][1].filled = false;
        pieceMask[3][2].filled = true;
        pieceMask[3][3].filled = false;
        colorPiece(createHSL("I"));
    }

        // turns pieceMask to S shape
    function pieceS() {
        pieceMask[0][0].filled = false;
        pieceMask[0][1].filled = false;
        pieceMask[0][2].filled = false;
        pieceMask[0][3].filled = false;
        pieceMask[1][0].filled = false;
        pieceMask[1][1].filled = false;
        pieceMask[1][2].filled = false;
        pieceMask[1][3].filled = true;
        pieceMask[2][0].filled = false;
        pieceMask[2][1].filled = false;
        pieceMask[2][2].filled = true;
        pieceMask[2][3].filled = true;
        pieceMask[3][0].filled = false;
        pieceMask[3][1].filled = false;
        pieceMask[3][2].filled = true;
        pieceMask[3][3].filled = false;
        colorPiece(createHSL("S"));
    }

        // turns pieceMask to Z shape
    function pieceZ() {
        pieceMask[0][0].filled = false;
        pieceMask[0][1].filled = false;
        pieceMask[0][2].filled = false;
        pieceMask[0][3].filled = false;
        pieceMask[1][0].filled = false;
        pieceMask[1][1].filled = false;
        pieceMask[1][2].filled = true;
        pieceMask[1][3].filled = false;
        pieceMask[2][0].filled = false;
        pieceMask[2][1].filled = false;
        pieceMask[2][2].filled = true;
        pieceMask[2][3].filled = true;
        pieceMask[3][0].filled = false;
        pieceMask[3][1].filled = false;
        pieceMask[3][2].filled = false;
        pieceMask[3][3].filled = true;
        colorPiece(createHSL("Z"));
    }

        // turns pieceMask to T shape
    function pieceT() {
        pieceMask[0][0].filled = false;
        pieceMask[0][1].filled = false;
        pieceMask[0][2].filled = false;
        pieceMask[0][3].filled = false;
        pieceMask[1][0].filled = false;
        pieceMask[1][1].filled = false;
        pieceMask[1][2].filled = true;
        pieceMask[1][3].filled = false;
        pieceMask[2][0].filled = false;
        pieceMask[2][1].filled = false;
        pieceMask[2][2].filled = true;
        pieceMask[2][3].filled = true;
        pieceMask[3][0].filled = false;
        pieceMask[3][1].filled = false;
        pieceMask[3][2].filled = true;
        pieceMask[3][3].filled = false;
        colorPiece(createHSL("T"));
    }

        // chooses a new piece and calls appropriate piece()
    function randomPiece() {
        let pieceSelection = Math.floor(Math.random()*7);

        switch (nextPieceType) {
        case "I":
            pieceI();
            pieceType = "I";
            break;

        case "J":
            pieceJ();
            pieceType = "J";
            break;

        case "L":
            pieceL();
            pieceType = "L";
            break;

        case "O":
            pieceO();
            pieceType = "O";
            break;

        case "S":
            pieceS();
            pieceType = "S";
            break;

        case "T":
            pieceT();
            pieceType = "T";
            break;

        case "Z":
            pieceZ();
            pieceType = "Z";
            break;
        }
        let pieceX = 3;
        let pieceY = -2;

        switch (pieceSelection) {
        case 0:
            nextPieceType = "I";
            break;

        case 1:
            nextPieceType = "J";
            break;
            
        case 2:
            nextPieceType = "L";
            break;
            
        case 3:
            nextPieceType = "O";
            break;
            
        case 4:
            nextPieceType = "S";
            break;
            
        case 5:
            nextPieceType = "T";
            break;
            
        case 6:
            nextPieceType = "Z";
            break;
        }
    }

        // rotates piece counterclockwise
    function rotatePieceCounterclockwise() {
        switch (pieceType) {
        case "O":
            return;

        case "I":
            if (pieceMask[2][0].filled === true) {
                pieceMask[2][0].filled = false;
                pieceMask[2][1].filled = false;
                pieceMask[2][3].filled = false;
                pieceMask[0][2].filled = true;
                pieceMask[1][2].filled = true;
                pieceMask[3][2].filled = true;
            } else {
                pieceMask[2][0].filled = true;
                pieceMask[2][1].filled = true;
                pieceMask[2][3].filled = true;
                pieceMask[0][2].filled = false;
                pieceMask[1][2].filled = false;
                pieceMask[3][2].filled = false;
            }

            if (moveOpen(0,0) == false) {
                rotatePieceCounterclockwise();
            }
            return;

        default:
            break;
        }
        let tempMask = new Array(4);
        for (let i = 0; i < 4; i++) {
            tempMask[i] = new Array(4);
            for (let j = 0; j < 4; j++) {
                tempMask[i][j] = {
                    color:"#FFFFFF",
                    filled: false
                }
            }
        }
        
        tempMask[1][1] = pieceMask[3][1];
        tempMask[1][2] = pieceMask[2][1];
        tempMask[1][3] = pieceMask[1][1];
        tempMask[2][1] = pieceMask[3][2];
        tempMask[2][2] = pieceMask[2][2];
        tempMask[2][3] = pieceMask[1][2];
        tempMask[3][1] = pieceMask[3][3];
        tempMask[3][2] = pieceMask[2][3];
        tempMask[3][3] = pieceMask[1][3];

        pieceMask = tempMask;

        if (moveOpen(0,0) == false) {
            rotatePieceClockwise();
        }
    }

        // rotates piece clockwise
    function rotatePieceClockwise() {

        switch (pieceType) {
        case "O":
            return;

        case "I":
            rotatePieceCounterclockwise();
            return;

        default:
            break;
        }

        let tempMask = new Array(4);
        for (let i = 0; i < 4; i++) {
            tempMask[i] = new Array(4);
            for (let j = 0; j < 4; j++) {
                tempMask[i][j] = {
                    color:"#FFFFFF",
                    filled: false
                }
            }
        }
        tempMask[1][1] = pieceMask[1][3];
        tempMask[1][2] = pieceMask[2][3];
        tempMask[1][3] = pieceMask[3][3];
        tempMask[2][1] = pieceMask[1][2];
        tempMask[2][2] = pieceMask[2][2];
        tempMask[2][3] = pieceMask[3][2];
        tempMask[3][1] = pieceMask[1][1];
        tempMask[3][2] = pieceMask[2][1];
        tempMask[3][3] = pieceMask[3][1];

        pieceMask = tempMask;

        if (moveOpen(0,0) == false) {
            rotatePieceCounterclockwise();
        }
    }

        // sets input variable to true on press
    function keyDownHandler(e) {
        event.preventDefault();
        switch (e.key) {
        case "d":
            rightPressed = true;
            break;

        case "a":
            leftPressed = true;
            break;

        case "w":
            upPressed = true;
            break;

        case "s":
            downPressed = true;
            break;

        case "l":
            clockwisePressed = true;
            break;

        case "k":  
            counterclockwisePressed = true;
            break;

        case " ":
            spacePressed = true;
            break;

        default:
            break;
        }
    }

        // returns input variables to false
    function resetKeys() {
        leftPressed = false;
        rightPressed = false;
        upPressed = false;
        downPressed = false;
        spacePressed = false;
        clockwisePressed = false;
        counterclockwisePressed = false;
    }

        // detects whether (x,y) is an open square
    function squareOpen(x,y) {
        if (x < 0) return false;
        if (x > tileRows) return false;
        if (y > tileColumns) return false;
        return !gameBoard[x][y].filled;
    }

        // detects whether current piece can move by (x,y)
    function moveOpen(x,y) {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (pieceMask[i][j].filled == true) {
                    if (pieceX + i + x < 0 || pieceX + i + x >= tileColumns) {
                        return false;
                    }
                    if (pieceY + j + y >= tileRows) {
                        return false;
                    }

                    if (pieceY+j+y >=0 && gameBoard[pieceX+i+x][pieceY+j+y].filled == true) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

        // tries to move piece left
    function movePieceLeft() {
        if (moveOpen(-1, 0)){
            pieceX--;
        }
    }

        // tries to move piece right
    function movePieceRight() {
        if (moveOpen(1, 0)) {
            pieceX++;
        }
    }

        // tries to move piece down
    function movePieceDown() {
        if (moveOpen(0, 1)){
            pieceY++;
        } else {
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    if (pieceMask[i][j].filled) {
                        gameBoard[pieceX+i][pieceY+j].filled = true;
                        gameBoard[pieceX+i][pieceY+j].color = pieceMask[i][j].color;
                    }
                }
            }
            checkRows();
            newPiece();
            if (moveOpen(0,0) == false) {
                gameOver = true;
            }
        }
    }

        // checks if any lines were cleared
    function checkRows() {
        let lines = 0;
        for (let y = 0; y < tileRows; y++) {
            let rowClear = true;
            for (let x = 0; x < tileColumns; x++) {
                if (gameBoard[x][y].filled == false) {
                    rowClear = false;
                }
            }
            if (rowClear == true) {
                lines++;
                score += (lines*100);
                for (let x = 0; x < tileColumns; x++) {
                    gameBoard[x][y].filled = false;
                }
                for (let i = y; i > 0; i--) {
                    for (let x = 0; x < tileColumns; x++) {
                        gameBoard[x][i].filled = gameBoard[x][i-1].filled;
                        gameBoard[x][i].color = gameBoard[x][i-1].color;
                    }
                }
                for (let x = 0; x < tileColumns; x++) {
                    gameBoard[x][0].filled = false;
                }
            }
        }
        linesCleared += lines;

        if (linesCleared/10 >= level) {
            level++;
            dropInterval = dropInterval * 3/4;
            globalHueModifier = Math.floor(Math.random()*360); 
            globalSaturation = Math.floor(Math.random()*75)+25;
            globalLightness = Math.floor(Math.random()*30)+40;

        }
    }

        // draws current board
    function drawBoard() {
        ctx.fillStyle = "#444444";
        ctx.fillRect(0,0,w,h);
        
        let xStart;
        let yStart;

        for (let x = 0; x < tileColumns; x++) {
            for (let y = 0; y < tileRows; y++) {
                xStart = x*tileSpan+tileStartX;
                yStart = y*tileSpan+tileStartY;

                if (gameBoard[x][y].filled === true) {
                    ctx.fillStyle = gameBoard[x][y].color
                } else {
                    ctx.fillStyle = "#000000";
                }
                ctx.fillRect(xStart, yStart, tileWidth, tileWidth);
            }
        }
    }

        // draws current piece
    function drawPiece() {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                let xStart = (pieceX+i)*tileSpan+tileStartX;
                let yStart = (pieceY+j)*tileSpan+tileStartY;
                if (pieceMask[i][j].filled === true) {
                    ctx.fillStyle = pieceMask[i][j].color;
                    ctx.fillRect(xStart, yStart, tileWidth, tileWidth);
                } 
            }
        }
        ctx.fillStyle = "#444444";
        ctx.fillRect(0,0,w,tileStartY);
    }

    function drawNextPiece() {
        switch (nextPieceType) {
        case "I":
            ctx.fillStyle = createHSL("I");
            ctx.fillRect(245, 75, tileWidth, tileWidth);
            ctx.fillRect(265, 75, tileWidth, tileWidth);
            ctx.fillRect(285, 75, tileWidth, tileWidth);
            ctx.fillRect(305, 75, tileWidth, tileWidth);
            break;

        case "J":
            ctx.fillStyle = createHSL("J");
            ctx.fillRect(255, 65, tileWidth, tileWidth);
            ctx.fillRect(275, 65, tileWidth, tileWidth);
            ctx.fillRect(295, 65, tileWidth, tileWidth);
            ctx.fillRect(295, 85, tileWidth, tileWidth);
            break;

        case "L":
            ctx.fillStyle = createHSL("L");
            ctx.fillRect(255, 65, tileWidth, tileWidth);
            ctx.fillRect(275, 65, tileWidth, tileWidth);
            ctx.fillRect(295, 65, tileWidth, tileWidth);
            ctx.fillRect(255, 85, tileWidth, tileWidth);
            break;

        case "O":
            ctx.fillStyle = createHSL("O");
            ctx.fillRect(265, 65, tileWidth, tileWidth);
            ctx.fillRect(265, 85, tileWidth, tileWidth);
            ctx.fillRect(285, 65, tileWidth, tileWidth);
            ctx.fillRect(285, 85, tileWidth, tileWidth);
            break;

        case "S":
            ctx.fillStyle = createHSL("S");
            ctx.fillRect(255, 85, tileWidth, tileWidth);
            ctx.fillRect(275, 85, tileWidth, tileWidth);
            ctx.fillRect(275, 65, tileWidth, tileWidth);
            ctx.fillRect(295, 65, tileWidth, tileWidth);
            break;

        case "T":
            ctx.fillStyle = createHSL("T");
            ctx.fillRect(255, 65, tileWidth, tileWidth);
            ctx.fillRect(275, 65, tileWidth, tileWidth);
            ctx.fillRect(295, 65, tileWidth, tileWidth);
            ctx.fillRect(275, 85, tileWidth, tileWidth);
            break;

        case "Z":
            ctx.fillStyle = createHSL("Z");
            ctx.fillRect(255, 65, tileWidth, tileWidth);
            ctx.fillRect(275, 65, tileWidth, tileWidth);
            ctx.fillRect(275, 85, tileWidth, tileWidth);
            ctx.fillRect(295, 85, tileWidth, tileWidth);
            break;

        }
    }

    function drawHUD() {
        ctx.strokeStyle = "black";
        ctx.font = "20px Courier";
        ctx.textAlign = "center";
        ctx.strokeText("NEXT", 285, 40);
        ctx.strokeText("SCORE", 285, 140);
        ctx.strokeText(score, 285, 160);
        ctx.strokeText("LEVEL", 285, 200);
        ctx.strokeText(level, 285, 220);
        ctx.strokeText("LINES", 285, 260);
        ctx.strokeText(linesCleared, 285, 280);

        ctx.fillStyle = "black";
        ctx.fillRect(240, 50, 90, 70);

        drawNextPiece();
    }

    function drawGameOver() {
        ctx.fillStyle = "black";
        ctx.strokeStyle = "#444444";

        ctx.fillRect(81, 91, 188, 80);
        ctx.strokeRect(81, 91, 188, 80);

        ctx.strokeStyle = "#444444";
        ctx.font = "20px Courier";
        ctx.textAlign = "center";
        ctx.strokeText("GAME OVER", 175, 116);
        ctx.strokeText("Space to retry", 175, 156);
    }

        // main game loop
    function loop (t) {
        requestAnimationFrame(loop);

        if (gameOver == false) {
            drawBoard();
            drawPiece();
            drawHUD();

            if (clockwisePressed) rotatePieceClockwise();
            if (counterclockwisePressed) rotatePieceCounterclockwise();
            if (spacePressed) {
                while (moveOpen(0, 1)) {
                    movePieceDown();
                }
                movePieceDown();
            }
            if (leftPressed) movePieceLeft();
            if (rightPressed) movePieceRight();

            if (currentInterval >= dropInterval || downPressed) {
                movePieceDown();
                currentInterval = 0;
            }
            currentInterval++;
        } else {
            drawBoard();
            drawPiece();
            drawHUD();
            drawGameOver();

            if (spacePressed) {
                gameOver = false;
                initializeBoard();
                newPiece();
                level = 1;
                linesCleared = 0;
                score = 0;
                dropInterval = 120;
                currentInterval = 0;
            }
        }
        resetKeys();
    }

    randomPiece();
    randomPiece();
    initializeBoard();

    requestAnimationFrame(loop);
}

export {tetris};