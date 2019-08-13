function contact() {
    let content = "";

    content += `
    <h3>
        Reach out!
    </h3>

    Until I implement my contact form, are are the best ways to contact me. Here's instructions: <br><br>

    `;

    content += `Email: <span class="hide-me">contact.</span>eric.<span class="dont-hide-me">charles.</span>loux*gmail@com<br>`;
    content += `Phone: ` + String(2*3*358073*365507).replace(2, "-").replace(2, "-");

    content = content.replace('@', '.');
    content = content.replace('*', '@');

    document.getElementsByClassName("content")[0].innerHTML = content;
}

export {contact};