function projects() {
    let content = "";

    content += `
    <h3>
        Eric's Projects
    </h3>

    <p>
        <a href="#" id="alu">1. A Simulated ALU</a>: Converts a decimal to boolean, then uses only NAND to perform a variet of functions.
    </p>
    `;

    document.getElementsByClassName("content")[0].innerHTML = content;
}

export {projects};