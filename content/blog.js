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

    <p>
        <a href="#" id="abstraction">1. Abstraction and Computer Science</a>: An overview of what a computer is, from the bottom to the top.
    </p>

    <p>
        <a href="#" id="elementary">2. Elementary Logic Gates</a>: How can we get electricity to perform logical functions?
    </p>

    <p>
        <a href="#" id="boolean">3. Boolean Functions</a>: Doing more advanced tasks once we've built a logic gate.
    </p>

    <p>
        <a href="#" id="representing">4. Representing Binary Logic</a>: Notes on notation.
    </p>

    <p>
        <a href="#" id="decisions">5. Decisions and Addition</a>: At this point, we can start to do some useful things with logic gates!
    </p>

    `;

    document.getElementsByClassName("content")[0].innerHTML = content;
}

export {blog};