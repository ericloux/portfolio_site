function blogEnd() {
    let content = "";

    content += `<span class="center-content"><input type="button" class="nav-button" id="link-blog-second" value="BLOG"><br></span><br>`;
    content += `<span class="center-content"><input type="button" class="nav-button" id="go-to-top" value="TOP"><br></span>`;
    content += `<br><br><br><br>`;

    document.getElementsByClassName("content")[0].innerHTML += content;

    document.getElementById("go-to-top").addEventListener("click", function() {
        window.scrollTo(0, 0);
    });
}

export {blogEnd};