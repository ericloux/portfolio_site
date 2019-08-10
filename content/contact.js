function contact() {
    let content = "";

    content += `
    <h3>
        Reach out!
    </h3>

    Until I implement my contact form, the best way to contact me is by email. Here's instructions: <br><br>

    [first] = eric<br>
    [middle] = charles<br>
    [last] = loux<br>
    [dot] = . (a period)<br>
    [domain] = gmail.com<br><br>

    My email is [first][dot][middle][dot][loux]@[domain]
    `;

    document.getElementsByClassName("content")[0].innerHTML = content;
}

export {contact};