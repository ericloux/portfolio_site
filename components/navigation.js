function addNavigation(state) {
    let nav = document.getElementsByTagName("nav")[0];
    nav.innerHTML = "<br>";

    nav.innerHTML += `<input type="button" class="nav-button" id="link-home" value="HOME"><br>`;
    nav.innerHTML += `<input type="button" class="nav-button" id="link-bio" value="BIO"><br>`;
    nav.innerHTML += `<input type="button" class="nav-button" id="link-projects" value="PROJECTS"><br>`;
    nav.innerHTML += `<input type="button" class="nav-button" id="link-blog" value="BLOG"><br>`;
    nav.innerHTML += `<input type="button" class="nav-button" id="link-contact" value="CONTACT"><br>`;
}

export {addNavigation};