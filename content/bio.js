function bio() {
    let content = "";

    content += `
    <h3>
        About Eric Loux
    </h3>
    `;

    document.getElementsByClassName("content")[0].innerHTML = content;
}

export {bio};