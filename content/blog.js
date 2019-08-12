function blog() {
    let content = "";

    content += `
    <h3>
        Blog Articles
    </h3>

    <p>
        I love to learn, and writing about what I learn lets me both lets me internally organize that knowledge and put it back 
        into the world. To that end, here are some of my assorted writings on various subjects.
    </p>

    <h3>
        How Do Computers Work - A Series
    </h3>

    <span class="center-content"><button class="link" id="abstraction">1. Abstraction and Computer Science</button></span>
    <p class="link-info">An overview of what a computer is, from the bottom to the top.</p><br>
    
    <span class="center-content"><button class="link" id="elementary">2. Elementary Logic Gates</button></span>
    <p class="link-info">How can we get electricity to perform logical functions?</p><br>

    <span class="center-content"><button class="link" id="boolean">3. Boolean Functions</button></span>
    <p class="link-info">Doing more advanced tasks once we've built a logic gate.</p><br>

    <span class="center-content"><button class="link" id="representing">4. Representing Binary Logic</button></span>
    <p class="link-info">Notes on notation.</p><br>
    
    <span class="center-content"><button class="link" id="decisions">5. Decisions and Addition</button></span>
    <p class="link-info">At this point, we can start to do some useful things with logic gates!</p><br>

    <span class="center-content"><button class="link" id="binary">6. Representing Binary</button></span>
    <p class="link-info">How can we combine 0s and 1s into longer numbers?</p><br>

    <h3>
        Making a Genetic Algorithm
    </h3>

    <span class="center-content"><button class="link" id="genetic">1. Genetic Algorithms</button></span>
    <p class="link-info">What is a genetic algorithm, and what are they used for?</p><br>

    <span class="center-content"><button class="link" id="fitness">2. Genotype, Phenotype and Fitness</button></span>
    <p class="link-info">What are we going to do with our genetic algorithm, and how?</p><br>
    
    `;

    document.getElementsByClassName("content")[0].innerHTML = content;
}

export {blog};