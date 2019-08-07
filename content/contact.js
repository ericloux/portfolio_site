function contact() {
    let content = "";

    content += `
    <h3>
        Reach out!
    </h3>
    `;

    document.getElementsByClassName("content")[0].innerHTML = content;
}

export {contact};