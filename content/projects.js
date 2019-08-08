function projects() {
    let content = "";

    content += `
    <h3>
        Eric's Projects
    </h3>

    <p>
        <a href="#" id="alu">1. Simulated ALU</a>: Converts a decimal to boolean, then uses only NAND to perform a variety of functions.
    </p>

    <p>
        <a href="#" id="conway">2. Conway's Game</a>: Conway's Game of Life, simulating his rules of underpopulation, overpopulation, and reproduction.
    </p>

    <p>
        <a href="#" id="tetris">3. Alexey's Game</a>: Everyone needs to code this once, but its real name is trademarked by The Tetris Company.
    </p>

    <p>
        <a href="www.google.com" id="gratuity">4. Gratuity Acuity</a>: My capstone project for Savvy Coders, which allows delivery drivers to track their tips 
        by amount, date, and location.
    </p>
    `;

    document.getElementsByClassName("content")[0].innerHTML = content;
}

export {projects};