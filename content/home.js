function home() {
    let content = "";

    content += `
    <h3>
        Welcome to my portfolio site!
    </h3>
    
    <p>
        There are plenty of reasons you might find this page. Whatever the reason, welcome to my site and I hope you 
        find yourself interested in the content.
    </p>
    
    <p>
        Nearly every line of code here was written by myself. I had no experience writing HTML, CSS, or JavaScript prior 
        to June of 2019, but have honestly grown to enjoy those languages and their possibilities. Of course, that doesn't 
        mean that I started programming then. I've had a long history with computers which is described in my Bio page.
    </p>
    
    <p>
        Enjoy looking around, and please feel free to contact me! My details are in the Contact page.
    </p>
    `;

    document.getElementsByClassName("content")[0].innerHTML = content;
}

export {home};