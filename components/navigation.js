function addNavigation(state) {
    let nav = document.getElementsByTagName("nav")[0];
    nav.innerHTML = "<br>";

    nav.innerHTML += `<a href="#" id="link-home">HOME</a><br>`;
    nav.innerHTML += `<a href="#" id="link-bio">BIO</a><br>`;
    nav.innerHTML += `<a href="#" id="link-projects">PROJECTS</a><br>`;
    nav.innerHTML += `<a href="#" id="link-blog">BLOG</a><br>`;
    nav.innerHTML += `<a href="#" id="link-contact">CONTACT</a><br>`;
}

export {addNavigation};