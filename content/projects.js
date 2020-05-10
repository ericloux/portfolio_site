function projects() { 
    let content = "";

    content += `
    <h3>
        Eric's Projects
    </h3>

    <span class="center-content">Click on the project headers to view my projects!</span><br><br>

    <span class="center-content"><button class="link" id="alu">1. Simulated ALU</button></span>
    <p class="link-info">Converts a decimal to boolean, then uses only NAND to perform a variety of functions.</p><br>

    <span class="center-content"><button class="link" id="conway">2. Conway's Game</button></span>
    <p class="link-info">Conway's Game of Life, simulating his rules of underpopulation, overpopulation, and reproduction.</p><br>

    <span class="center-content"><button class="link" id="tetris">3. Alexey's Game</button></span>
    <p class="link-info">Everyone needs to code this once, but its real name is trademarked by The Tetris Company.</p><br>    

    <span class="center-content"><form target="_blank" action="//www.gratuityacuity.com"><button class="link" id="gratuity">4. Gratuity Acuity</button></form></span>
    <p class="link-info">My capstone project for Savvy Coders, which allows delivery drivers to track their tips by amount, date, and location.
    View the write-up <u><a id ="gratuity-writeup">here</a></u>.</p><br>

    <span class="center-content"><button class="link" id="tablemaker">5. Table Maker</button></span>
    <p class="link-info">A lot of the truth tables for my blog were created using just tabs and enters. Replacing all the formatting 
    was a chore, so I wrote a program to do it for me. Hooray for practicality!</p><br>

    <span class="center-content"><button class="link" id="genetic-algorithm">6. Genetic Algorithm</button></span>
    <p class="link-info">My genetic algorithm. See my blog for more details.</p><br>    

    <span class="center-content"><button class="link" id="sql">7. Databases Project</button></span>
    <p class="link-info">The final project for my relational databases class.</p><br>
    
    <br><br><br>  
    `;

    document.getElementsByClassName("content")[0].innerHTML = content;
}

export {projects};