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

    content += `<br><br>I have my doubts about putting this info where spammers can find it, so I had some fun with it! 
        Although it shows as normal to you and me, I did some manipulation with CSS and JavaScript to make it fool any bots 
        trawling for email addresses or phone numbers. I put some random divs that hide information (and some that do nothing) 
        in my email addresses, and I provided a factorization of my phone number with some extra digits thrown in, then replaced 
        those extra digits with dashes after typecasting the number to a string. It probably would have been easier to just 
        implement the form!`;

    document.getElementsByClassName("content")[0].innerHTML = content;
}

export {contact};