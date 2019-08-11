import {addTemplate, putFooter} from "./components/template.js";
import {addNavigation} from "./components/navigation.js";
import {home} from "./content/home.js";
import {bio} from "./content/bio.js";
import {projects} from "./content/projects.js";
import {blog} from "./content/blog.js";
import {abstraction} from "./content/blog/abstraction.js";
import {elementary} from "./content/blog/elementary.js";
import {boolean} from "./content/blog/boolean.js";
import {representing} from "./content/blog/representing.js";
import {decisions} from "./content/blog/decisions.js";
import {contact} from "./content/contact.js";
import {alu} from "./content/projects/alu.js";
import {tetris} from "./content/projects/tetris.js";
import {conway} from "./content/projects/conway.js";
import {gratuity} from "./content/blog/gratuity.js";
import {tablemaker} from "./content/projects/tablemaker.js";
import {binary} from "./content/blog/binary.js";
import {genetic} from "./content/blog/genetic.js";

let state = {
    page: "home",
    subpage: "none"
};

function render(state) {
    addTemplate();
    
    addNavigation(state);

    switch (state.page){
    case "home":
        home();
        break;

    case "bio":
        bio();
        break;

    case "projects":
        switch (state.subpage) {
        case "alu":
            alu();
            break;

        case "tetris":
            tetris();
            break;

        case "conway":
            conway();
            break;

        case "gratuity":
            gratuity();
            break;

        case "tablemaker":
            tablemaker();
            break;

        default:
            projects();
            break;
        }
        break;

    case "blog":
        switch (state.subpage) {
        case "abstraction":
            abstraction();
            break;

        case "elementary":
            elementary();
            break;

        case "boolean":
            boolean();
            break;

        case "representing":
            representing();
            break;

        case "decisions":
            decisions();
            break;

        case "binary":
            binary();
            break;

        case "genetic":
            genetic();
            break;

        default:
            blog();
            break;
        }
        break;

    case "contact":
        contact();
        break;
    }

    document.getElementById("link-home").addEventListener("click", function() {
        event.preventDefault();
        state.page = "home";
        state.subpage = "none";
        render(state);
    });


    document.getElementById("link-bio").addEventListener("click", function() {
        event.preventDefault();
        state.page = "bio";
        state.subpage = "none";
        render(state);
    });

    document.getElementById("link-projects").addEventListener("click", function() {
        event.preventDefault();
        state.page = "projects";
        state.subpage = "none";
        render(state);
    });

    if (state.page == "projects" && state.subpage == "none") {
        document.getElementById("alu").addEventListener("click", function() {
            event.preventDefault();
            state.page = "projects";
            state.subpage = "alu";
            render(state);
        });

        document.getElementById("tetris").addEventListener("click", function() {
            event.preventDefault();
            state.page = "projects";
            state.subpage = "tetris";
            render(state);
        });

        document.getElementById("conway").addEventListener("click", function() {
            event.preventDefault();
            state.page = "projects";
            state.subpage = "conway";
            render(state);
        });tablemaker

        document.getElementById("tablemaker").addEventListener("click", function() {
            event.preventDefault();
            state.page = "projects";
            state.subpage = "tablemaker";
            render(state);
        });

        document.getElementById("gratuity-writeup").addEventListener("click", function() {
            event.preventDefault();
            state.page = "projects";
            state.subpage = "gratuity";
            render(state);
        });
    }

    document.getElementById("link-blog").addEventListener("click", function() {
        event.preventDefault();
        state.page = "blog";
        state.subpage = "none";
        render(state);
    });

    if (state.page == "blog" && state.subpage == "none") {
        document.getElementById("abstraction").addEventListener("click", function() {
            event.preventDefault();
            state.page = "blog";
            state.subpage = "abstraction";
            render(state);
        });

        document.getElementById("elementary").addEventListener("click", function() {
            event.preventDefault();
            state.page = "blog";
            state.subpage = "elementary";
            render(state);
        });

        document.getElementById("boolean").addEventListener("click", function() {
            event.preventDefault();
            state.page = "blog";
            state.subpage = "boolean";
            render(state);
        });

        document.getElementById("representing").addEventListener("click", function() {
            event.preventDefault();
            state.page = "blog";
            state.subpage = "representing";
            render(state);
        });

        document.getElementById("decisions").addEventListener("click", function() {
            event.preventDefault();
            state.page = "blog";
            state.subpage = "decisions";
            render(state);
        });

        document.getElementById("binary").addEventListener("click", function() {
            event.preventDefault();
            state.page = "blog";
            state.subpage = "binary";
            render(state);
        });

        document.getElementById("genetic").addEventListener("click", function() {
            event.preventDefault();
            state.page = "blog";
            state.subpage = "genetic";
            render(state);
        });
    }
    
    document.getElementById("link-contact").addEventListener("click", function() {
        event.preventDefault();
        state.page = "contact";
        state.subpage = "none";
        render(state);
    });

    putFooter();   
};

render(state);