// draws the page template in div with ID template
function addTemplate() {
    let templateDiv = document.getElementById("template");
    templateDiv.innerHTML = `
    <header>
        <b>Eric Loux's Portfolio Site</b>
    </header>
    <div class="grid-master">
        <nav class="grid-side">
            Here is the nav.
        </nav>

        <div class="content">
            Here is the content.
        </div>

        <div class="grid-side">
            Here is blank space.
        </div>
    </div>
    <footer>
        Copyright 2019 Eric Loux
    </footer>`;
}

    // Puts footer at the bottom of the page or below content (whichever is lower)
function putFooter() {
    let footAndHeadHeight = document.getElementsByTagName("footer")[0].offsetHeight + document.getElementsByTagName("header")[0].offsetHeight;
    let contentHeight = document.getElementsByClassName("content")[0].offsetHeight;

    console.log((footAndHeadHeight + contentHeight) + " " + window.innerHeight);

    if (footAndHeadHeight + contentHeight < window.innerHeight) { 
        document.getElementsByClassName("grid-master")[0].style.height = (window.innerHeight - footAndHeadHeight) + "px";
    }
}

export {addTemplate, putFooter};