function conway() {
    let content = "";

    content += `
    <br>
    <div id="board">
        <canvas width="500" height="500"></canvas>
    </div>

    <p>
        Conway's Game of Life was a project that I wanted to create early for a few reasons. First, I had discovered the canvas element 
        and wanted to build something with it. Since the Game of Life has simple rules, it seemed like an ideal candidate.
    </p>

    <p>
        For the uninitiated, the Game of Life is a simulation that's run on a grid. Each element in the grid can either be populated or 
        unpopulated. In the above, the populated squares are yellow, with the unpopulated being gray.
    </p>

    <p>
        Each iteration, every square in the grid is checked. Depending on how many orthogonically or diagonally adjacent squares are also populated, 
        the square can change state. Any live cell with exactly two or three living neighbors will live to the next generation. Those with more 
        or less do not. Likewise, any non-living cell with exactly three living neighbors will be "born" and become populated.
    </p>

    <p>
        Although these rules are simple, they can create a variety of shapes. Some end up static, some form repetitive patterns, and some 
        explode and retract as if they're organic.
    </p>

    <p>
        The original plan was to take mouse input to turn cells either on or off, but that wasn't implemented. Instead, a random configuration 
        of cells is set as alive each time the function is loaded, which allows a variety of initial states.
    </p>

    <br><br>
    `;

    document.getElementsByClassName("content")[0].innerHTML = content;

    const canvas = document.querySelector("#board canvas");
    const ctx = canvas.getContext("2d");
    const { width:w, height:h } = canvas;
    
        // board width in tiles
    const tileSpan = 100;
    const tileMargin = 5;
    
    let gameBoard = new Array(tileSpan);
    let computeBoard = new Array(tileSpan);
    
    let running = true;
    let cyclesBeforeUpdate = 6;
    let currentCycles = 0;
    
    let mousePressed = false;
    
    for (let x = 0; x < tileSpan; x++) {
        gameBoard[x] = new Array(tileSpan);
        computeBoard[x] = new Array(tileSpan);
        for (let y = 0; y < tileSpan; y++) {
            gameBoard[x][y] = false;
            computeBoard[x][y] = false;
            if (Math.random() < .05) gameBoard[x][y] = true;
        }
    }
    
    function drawBoard() {
        ctx.strokeStyle = "black";
        for (let x = 0; x < tileSpan; x++) {
            for (let y = 0; y < tileSpan; y++) {
                if (gameBoard[x][y] == false) {
                    ctx.fillStyle = "#444";
                } else {
                    ctx.fillStyle = "#FD0";
                }
                let xStart = x*tileMargin;
                let yStart = y*tileMargin;
                ctx.fillRect(xStart,yStart,tileMargin,tileMargin);
            }
        }    
    }
    
    function updateBoard() {
        for (let x = 0; x < tileSpan; x++) {
            for (let y = 0; y < tileSpan; y++) {
                let touching = 0;
    
                if (x > 0) {
                    if (y > 0) {
                        if (gameBoard[x-1][y-1] == true) touching++;
                    }
                    if (gameBoard[x-1][y] == true) touching++;
                    if (y < tileSpan-1) {
                        if (gameBoard[x-1][y+1] == true) touching++;
                    }
                }
                if (y > 0) {
                    if (gameBoard[x][y-1] == true) touching++;
                }
                if (y < tileSpan-1) {
                    if (gameBoard[x][y+1] == true) touching++;
                }
    
                if (x < tileSpan-1) {
                    if (y > 0) {
                        if (gameBoard[x+1][y-1] == true) touching++;
                    }
                    if (gameBoard[x+1][y] == true) touching++;
                    if (y < tileSpan-1) {
                        if (gameBoard[x+1][y+1] == true) touching++;
                    }
                }
    
                computeBoard[x][y] = false;
                if (gameBoard[x][y] == true) {
                    if (touching == 2 || touching ==3) {
                        computeBoard[x][y] = true;
                    }
                }
                if (gameBoard[x][y] == false && touching == 3) {
                    computeBoard[x][y] = true;
                }
            }
        }
        for (let x = 0; x < tileSpan; x++) {
            for (let y = 0; y < tileSpan; y++) {
                gameBoard[x][y] = computeBoard[x][y];
            }
        }
    }
    
    function loop(evt) {
        requestAnimationFrame(loop);
        drawBoard();
    
        if (running) {
            if (currentCycles >= cyclesBeforeUpdate) {
                updateBoard();
                currentCycles = 0;
            }
            currentCycles++;
        } else {
            if (mousePressed == true) {
    
            }
        }
    }
    
    loop();
}

export {conway};