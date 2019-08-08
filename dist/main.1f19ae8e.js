// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"components/template.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTemplate = addTemplate;
exports.putFooter = putFooter;

// draws the page template in div with ID template
function addTemplate() {
  var templateDiv = document.getElementById("template");
  templateDiv.innerHTML = "\n    <header>\n        <b>Eric Loux's Portfolio Site</b>\n    </header>\n    <div class=\"grid-master\">\n        <nav class=\"grid-side\">\n            Here is the nav.\n        </nav>\n\n        <div class=\"content\">\n            Here is the content.\n        </div>\n\n        <div class=\"grid-side\">\n            Here is blank space.\n        </div>\n    </div>\n    <footer>\n        Copyright 2019 Eric Loux\n    </footer>";
} // Puts footer at the bottom of the page or below content (whichever is lower)


function putFooter() {
  var footAndHeadHeight = document.getElementsByTagName("footer")[0].offsetHeight + document.getElementsByTagName("header")[0].offsetHeight;
  var contentHeight = document.getElementsByClassName("content")[0].offsetHeight;
  console.log(footAndHeadHeight + contentHeight + " " + window.innerHeight);

  if (footAndHeadHeight + contentHeight < window.innerHeight) {
    document.getElementsByClassName("grid-master")[0].style.height = window.innerHeight - footAndHeadHeight + "px";
  }
}
},{}],"components/navigation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNavigation = addNavigation;

function addNavigation(state) {
  var nav = document.getElementsByTagName("nav")[0];
  nav.innerHTML = "<br>";
  nav.innerHTML += "<a href=\"#\" id=\"link-home\">HOME</a><br>";
  nav.innerHTML += "<a href=\"#\" id=\"link-bio\">BIO</a><br>";
  nav.innerHTML += "<a href=\"#\" id=\"link-projects\">PROJECTS</a><br>";
  nav.innerHTML += "<a href=\"#\" id=\"link-blog\">BLOG</a><br>";
  nav.innerHTML += "<a href=\"#\" id=\"link-contact\">CONTACT</a><br>";
}
},{}],"content/home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.home = home;

function home() {
  var content = "";
  content += "\n    <h3>\n        Welcome to my portfolio site!\n    </h3>\n    \n    <p>\n        There are plenty of reasons you might find this page. Whatever the reason, welcome to my site and I hope you \n        find yourself interested in the content.\n    </p>\n    \n    <p>\n        Nearly every line of code here was written by myself. I had no experience writing HTML, CSS, or JavaScript prior \n        to June of 2019, but have honestly grown to enjoy those languages and their possibilities. Of course, that doesn't \n        mean that I started programming then. I've had a long history with computers which is described in my Bio page.\n    </p>\n    \n    <p>\n        Enjoy looking around, and please feel free to contact me! My details are in the Contact page.\n    </p>\n    ";
  document.getElementsByClassName("content")[0].innerHTML = content;
}
},{}],"content/bio.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bio = bio;

function bio() {
  var content = "";
  content += "\n    <h3>\n        About Eric Loux\n    </h3>\n    ";
  document.getElementsByClassName("content")[0].innerHTML = content;
}
},{}],"content/projects.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.projects = projects;

function projects() {
  var content = "";
  content += "\n    <h3>\n        Eric's Projects\n    </h3>\n\n    <p>\n        <a href=\"#\" id=\"alu\">1. Simulated ALU</a>: Converts a decimal to boolean, then uses only NAND to perform a variety of functions.\n    </p>\n\n    <p>\n        <a href=\"#\" id=\"conway\">2. Conway's Game</a>: Conway's Game of Life, simulating his rules of underpopulation, overpopulation, and reproduction.\n    </p>\n\n    <p>\n        <a href=\"#\" id=\"tetris\">3. Alexey's Game</a>: Everyone needs to code this once, but its real name is trademarked by The Tetris Company.\n    </p>\n\n    <p>\n        <a href=\"www.google.com\" id=\"gratuity\">4. Gratuity Acuity</a>: My capstone project for Savvy Coders, which allows delivery drivers to track their tips \n        by amount, date, and location.\n    </p>\n    ";
  document.getElementsByClassName("content")[0].innerHTML = content;
}
},{}],"content/blog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blog = blog;

function blog() {
  var content = "";
  content += "\n    <h3>\n        Blog Articles\n    </h3>\n\n    <p>\n        I love to learn, and writing about what I learn lets me both lets me internally organize that knowledge and put it back \n        into the world. To that end, here are some of my assorted writings on various subjects.\n    </p>\n\n    <h3>\n        How Do Computers Work - A Series\n    </h3>\n\n    <p>\n        <a href=\"#\" id=\"abstraction\">1. Abstraction and Computer Science</a>: An overview of what a computer is, from the bottom to the top.\n    </p>\n\n    <p>\n        <a href=\"#\" id=\"elementary\">2. Elementary Logic Gates</a>: How can we get electricity to perform logical functions?\n    </p>\n\n    <p>\n        <a href=\"#\" id=\"boolean\">3. Boolean Functions</a>: Doing more advanced tasks once we've built a logic gate.\n    </p>\n\n    <p>\n        <a href=\"#\" id=\"representing\">4. Representing Binary Logic</a>: Notes on notation.\n    </p>\n\n    <p>\n        <a href=\"#\" id=\"decisions\">5. Decisions and Addition</a>: At this point, we can start to do some useful things with logic gates!\n    </p>\n\n    ";
  document.getElementsByClassName("content")[0].innerHTML = content;
}
},{}],"content/blog/abstraction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.abstraction = abstraction;

function abstraction() {
  var content = "";
  content += "\n    <h3>\n        Abstraction and Computer Science\n    </h3>\n\n    If you ask, \"How does a computer work?\" then the majority of the population will likely tell you they don't know. And surely, just looking at \n     computer, it seems like a box that works on magic alone. Sure, most can tell you that it does something with electricity, but what is that \n     something, and how does it turn that electricity into every webpage and program that you've ever seen?<br><br>\n    \n    The answer, of course, is complex. Rather than thinking of the process as one concrete whole, it's through abstraction of each level that was \n    can examine how we go from \"this electron jiggles\" to sending a text message to your friends. There are plenty of levels, which is one of the \n    reasons that understanding of what happens in a computer is lost, even to many people who program them on a daily basis. Each layer is vast \n    enough to be an entire field of study. Although I hardly consider myself an expert, the scope of this article is to give a brief examination \n    into each of those levels, as well as how they work together to form the modern computer.<br><br>\n    \n    Given that there are each of these many levels, what exactly are they? I will give a brief overview before going into more detail, starting \n    from the bottom up. First, we have electricity, which can or cannot be flowing through a conductor at any moment. A switch allows this flow \n    to be interrupted or resumed. Using electricity to control switches, we can begin to create basic logical operations based on the flow of \n    electricity. By smartly wiring these logical operations together, we can build more and more complex operations, eventually being able to \n    simulate math and decision making.<br><br>\n    \n    By adding a clock that controls one of the aforementioned switches, we can add a timing element to the system we are constructing. This \n    allows us to create a memory cell, which can remain on or off until told to change. Chaining these memory cells together, we get a construct \n    known as a register, which can likewise be combined into a block of memory. The clock also allows us to perform our math and logic operations \n    in steps. It's at this point that we are finally able to create a rudimentary computer program!<br><br>\n    \n    Input and output are also possible at this point. Think about a digital clock that has seven lines, each of which can be on or off. When all \n    seven are on, an 8 appears. When you remove the right top line, you have a six. So on and so forth, you end up being able to draw any number. \n    If instead of having seven lines you have a grid of six by eight boxes, then in addition to numbers, you can draw letters and even rudimentary \n    pictures as well. Behind these boxes are registers - those groups of memory cells - that will tell which of the boxes (known as pixels) should \n    be on, and which should be off. When new information is put into the registers then the pixels change state and a new image is drawn.<br><br>\n    \n    Managing input is similar to output. When you press a key, it closes a circuit, and a register with information about which keys are being \n    pressed updated to show that the key was pressed. The computer then takes this input and uses it as input into its calculations.For example, \n    if you have a block of registers, then the results of the input may be stored in a sequence of registers. A counter tells the computer which \n    register is the next to write to. When you type 8, then the first register gets set to the binary representation of eight, and the counter \n    increments so that the second register will store the next input value. In addition to numbers, the input register could have mathmatical \n    operands and other keys, such as keys to compute what was entered, clear all the data that was inputted, clear the last key or whole number \n    entered, add parenthesies, or a number of other functions. I've just described the modern calculator!<br><br>\n    \n    Now that we can program our computer, we can write a program that makes it easier for humans to interpret a program. The lowest level of \n    these programs is called assembly language, which simply takes commands and turns it into the on and off signals that can be put through \n    the binary logic gates. Now, we can write a program that tells which operations to perform on which blocks of memory without setting the \n    state of each individual memory cell. Using assembly language, we can likewise write another language on top that allows the programmer to \n    write code that makes even more sense to a human. This program is known as a compiler.<br><br>\n    \n    From here, the path is wide open. You can write a language that makes it even easier for a human to interact with (such as JavaScript or \n    Python). You can update your output decvice so that instead of each pixel only showing on or off, you can add colors as well. Your input \n    device can have keys added to write other characters, or to directly open programs. You can chain more blocks of memory together, allowing \n    your math unit to process larger numbers or fractions. <br><br>\n    \n    One major program that is a necessity is an operating system. Using this, a number of functions that multiple functions might use can be \n    bundled together. Instead of telling the computer to manipulate individual pixels, you could tell it to draw shapes. Instead of telling it \n    to store items in specific spots in memory, the operating system can find an open spot and remember which locations are associated with what \n    program was saved. <br><br>\n    \n    Although the process is simplified, this is an outline of how a computer \"does its magic\" with electricity. There is so much going on at \n    each different level that one could write a book describing what happens - and indeed books have been written on the subject. Although I \n    intend to continue writing more on many of these levels and implementing several of the items described here, I would be remiss if I didn't \n    recommend reading \"The Elements of Computer Science\" by Noam Nisan and Shimon Schocken. Their book has done wonders for my understanding in \n    the internal workings of a computer, and I highly suggest that anyone who wants a more technical understanding of these workings read their \n    writings. Said book also invites readers to create their own computer system by modelling low-level hardware, then using those models to \n    create bigger and better tools, eventually ending with a functioning computer.<br><br>\n    ";
  document.getElementsByClassName("content")[0].innerHTML = content;
}
},{}],"content/blog/elementary.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elementary = elementary;

function elementary() {
  console.log("test");
  var content = "";
  content += "\n    <h3>\n    Elementary Logic Gates\n    </h3>\n\n\n    When a circuit is complete, electricity flows through it. When a circuit is broken, electricity does not. While this principle seems elementary, \n    the capacity for complexity increases dramatically when the circuit is allowed to connect and beeak itself. The vacuum tube and transistor allowed \n    such circuits to become commercially viable, leading to our current Age of Information. It's at the lowest level that electrity is manipulated into \n    logical abstractions, and the scope of this article is to examine what happens at those lowest of levels.<br><br>\n\n    A switch is the devide that can make or break the flow of a material. In computers, this usually refers to electrons moving through a conductor, \n    but there are other examples, such as a valve closing and not allowing water to flow. The quintessential electrical example, though, is light \n    switches. When the switch is open, the circuit is broken, and electricity cannot flow. When the switch is closed, the electricity is allowed to \n    flow through the circuit. Part of that circuit is a light bulb, where the flowing electrons are converted into visible light.<br><br>\n\n    Of course, there are more exciting ways to combine switches and lights than just one circuit. However, another electrical component must be \n    introduced - the resistor. A resistor makes it harder for electrons to travel on a circuit. It's a bit like a wall that the electrons have to \n    climb over to continue on the circuit. On our light switch circuit, adding a resistor would have a negligable effect. The light may be a bit \n    dimmer, but it wouldn't hamper the flow of electricity. The electrons would pile up at the wall and eventually flow over it, like the zombies \n    in World War Z.<br><br>\n\n    However, what if the path branches? Imagine the electrons have two choices. On one path, they have a clear shot forward with no obstructions.\n     On the other, they have to push through a resistor. In this case, the electrons will ignore the more difficult path and push on through the \n     other. If there are light bulbs on each side of the branch, only the bulb on the path with no resistor will light up, since all the electrons \n     are moving down that path.<br><br>\n\n    Continuing our thought experiment, what happens if all of a sudden the path without the resistor has a switch? When the switch is closed and \n    the circuit is complete, the easiest path is through the switch and away from the resistor. When the switch is opened, however, and the path \n    without a resistor is a complete dead-end, then the electrons instead go through the resistor and down the other path. If that switch is \n    controlled by electricity, then we have a logic gate.<br><br>\n\n    Consider that we have two paths leading into our logic gate, and two leading out. One of the paths in is the power supply. We'll call this \n    Power. In our circuit, electrons are always coming through Power. Thus, we say that it is always \"on,\" as opposed to one with no flow that is \n    \"off.\" The other path leading in leads to power our switch, so we will call it Switch. When it's on, the switch closes, and the electrons pass \n    through the easier open road. When Switch is off, then the switch opens, and the electrons move out the other, harder route with the resistor. \n    We will call these output paths Easy and Hard. Whether they are on or off depends on whether Switch is on or off. Here is a table showing the \n    various sates of Power, Switch, Easy and Hard:<br><br>\n\n    <table>\n        <thead>\n            <tr>\n                <th>Power</th>\t\n                <th>Switch</th>\t\n                <th>Easy</th>\t\n                <th>Hard</th>\n            </tr>\n        </thead>\n        <tr>\n            <td>On</td>\t\t\n            <td>On</td>\t\t\n            <td>On</td>\t\t\n            <td>Off</td>\n        </tr>\n        <tr>\n            <td>On</td>\t\t\n            <td>Off</td>\t\t\n            <td>Off</td>\t\t\n            <td>On</td>\n        </tr>\n    </table><br>\n\n    As you can see, the value of Power is always on, and the value of Easy is always the same as Switch. However, Switch and Hard always have the \n    opposite state. We can say that Output \"Hard\" is not input \"Switch.\" This is known as an inverter or \"not gate,\" and is one of the simplest \n    logic gates.<br><br>\n\n    Let's add another switch to our circuit. This time, the switch will be after the first switch, Switch. Since there are multiple switches, \n    calling the input \"Switch\" is confusing, so we will refer to it as \"Input 1\" and the second switch we are adding this time will be \"Input 2.\" \n    For consistency, we'll also rename our outputs from \"Easy\" and \"Hard\" to \"Output 1\" and \"Output 2.\" Our whole circuit consists of the following. \n    At the fork, the electrons can either move down one path through Input 1's switch, through Input 2's switch, and out Output 1. Alternatively, \n    they can move through the resistor and out Output 2. Naturally, they want to move out Output 1 unless one of the switches is off (open) which \n    means that they can't make it and will take the harder road though Output 2. So, if both of the switches are on, the electrons will flow through \n    Output 1. If either is closed, they will go the other direction. Here is another table showing this relationship:<br><br>\n\n    <table>\n        <thead>\n            <tr>\n                <th>Input 1</th>\t\n                <th>Input 2</th>\t\n                <th>Output 1</th>\t\n                <th>Output 2</th>\t\n            </tr>\n        </thead>\n        <tr>\n            <td>On</td>\t\t\n            <td>On</td>\t\t\n            <td>On</td>\t\t\n            <td>Off</td>\t\t\n        </tr>\n        <tr>\n            <td>On</td>\t\t\n            <td>Off</td>\t\t\n            <td>Off</td>\t\t\n            <td>On</td>\t\t\t\n        </tr>\n        <tr>\n            <td>Off</td>\t\t\n            <td>On</td>\t\t\n            <td>Off</td>\t\t\n            <td>On</td>\t\n        </tr>\n        <tr>\n            <td>Off</td>\t\t\n            <td>Off</td>\t\t\n            <td>Off</td>\t\t\n            <td>On</td>\n        </tr>\n    <table><br>\n\n    To describe this relationship in English, Output 1 is on if Input 1 and Input 2 are on. This creates an \"and gate.\" Likewise, Output 2 is on \n    if Input 1 and Input 2 are not on. Thus it is a \"not and\" gate, which is usually shortened to \"nand.\"<br><br>\n\n    If you're the inquisitive sort, then you may wonder, \"What happens if we connect the output from one gate to the input from another?\" The answer \n    is that you can create gates that have any relationship with the inputs. I've presented three here: not, and, and nand. With these three logic \n    gates, we can make a host of other logic gates. We can combine them so that there are more than two inputs and create chips that can make choices, \n    or start doing math. These operations found the basis for the whole field of computer science. Looking at the interactions between these more \n    complex gates is beyond the scope of this article, but will be examined in subsequent entries.<br><br>\n    ";
  document.getElementsByClassName("content")[0].innerHTML = content;
  console.log(document.getElementsByClassName("content")[0]);
}
},{}],"content/blog/boolean.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boolean = boolean;

function boolean() {
  var content = "";
  content += "\n    <h3>\n    Boolean Functions\n    </h3>\n\n    Previously, we had examined how switches and resistors could turn a basic circuit into a logic gate. We also built logic gates that represented \n    logical not, and, and nand. Naturally, at this level, there is not much practical application. However, by continuing to build on the previous \n    concepts, we can continue to add functionality, eventually building chips that can solve more complex problems.<br><br>\n    \n    At this point, we have built a few gates. The not gate took one input and output the opposite: if the input was on, the output was off, and \n    vice-versa. The and gate outputs on only if both of the input gates are true. Likewise, the nand gate is the opposite, outputting off only if \n    both of the inputs are true. In addition to these gates, how many more exist, and can we build them?<br><br>\n    \n    The number of unique gates that can be created is dependent on the number of inputs. For example, a one-input gate has two states that can feed \n    into it, on or off. For those two states, there are four sets out outputs that can result: (on, on), (on, off), (off, on), and (off, off). If we \n    think of the possible input states as (on, off), then we can chart out each of the possible relationships that can result from this input \n    state:<br><br>\n    \n    <table>\n        <thead>\n            <tr>\n                <th>Input</th>\t\n                <th>Output 1</th>\t\n                <th>Output 2</th>\t\n                <th>Output 3</th>\t\n                <th>Output 4</th>\n            </tr>\n        </thead>\n        <tr>\n            <td>on</td>\t\t\n            <td>on</td>\t\t\n            <td>on</td>\t\t\n            <td>off</td>\t\t\n            <td>off</td>\n        </tr>\n        <tr>\n            <td>off</td>\t\t\n            <td>on</td>\t\t\n            <td>off</td>\t\t\n            <td>on</td>\t\t\n            <td>off</td>\n        </tr>\n    </table><br>\n    \n    If you compare the input to Output 3, then you see it's the same as the not gate we previously built. Looking at the other gates built here are \n    also not particularly exciting. Output 1 is always on, independent of the input. Similarly, Output 4 is always off. The implementation of them \n    is simple - the former simply represents any closed circuit, and the other, any open circuit. Lastly, Output 2 is exactly the same as the input. \n    Most of the gates, excluding not, are not particularly userful.<br><br>\n    \n    Now, what happens if we have two inputs? This is where things get interesting, but also more complex. Instead of having the input only be on or \n    off as with a one-input gate, they can now be any of the sets (on, on), (on, off), (off, on), or (off, off). Each of these pairs of inputs can \n    have two choices for output. This means that there are 2^4 different potential output sets. Compare this to the single-input gate, where there \n    are 2^2 choices. With no inputs, the output can either be on or off, showing 2^1. Therefore, with x input gates, there are 2^(2^x-1) possible \n    unique gates that can be created. That means with three inputs, there are 256 different functions. Examining each of those is unnecessary, but \n    there are a few important three-input logic gates that we will consider at a future point.<br><br>\n    \n    We can create tables showing the potential outputs given the inputs. Such a table is called a truth table. We have done this above for all single \n    input gate combinations, but we can do this for two-input gates as well. Creating a table with all sixteen is a bit extreme, so here are the gates \n    we have already explored (including the two input versions of the single-input gates). Note that we are calling each output column by a name that \n    describes its function, rather than an arbitrary number:<br><br>\n    \n    <table>\n        <thead>\n            <tr>\n                <th>Input 1</th>\t\n                <th>Input 2</th>\t\n                <th>Always</th>\t\n                <th>Never</th>\t\n                <th>Not 1</th>\t\n                <th>Not 2</th>\t\n                <th>And</th>\t\n                <th>Nand</th>\n            </tr>\n        </thead>\n        <tr>\n            <td>on</td>\t\t\n            <td>on</td>\t\t\n            <td>on</td>\t\t\n            <td>off</td>\t\t\n            <td>off</td>\t\t\n            <td>off</td>\t\t\n            <td>on</td>\t\t\n            <td>off</td>\n        </tr>\n        <tr>\n            <td>on</td>\t\t\n            <td>off</td>\t\t\n            <td>on</td>\t\t\n            <td>off</td>\t\t\n            <td>off</td>\t\t\n            <td>on</td>\t\t\n            <td>off</td>\t\t\n            <td>on</td>\n        </tr>\n        <tr>\n            <td>off</td>\t\t\n            <td>on</td>\t\t\n            <td>on</td>\t\t\n            <td>off</td>\t\t\n            <td>on</td>\t\t\n            <td>off</td>\t\t\n            <td>off</td>\t\t\n            <td>on</td>\n        </tr>\n        <tr>\n            <td>off</td>\t\t\n            <td>off</td>\t\t\n            <td>on</td>\t\t\n            <td>off</td>\t\t\n            <td>on</td>\t\t\n            <td>on</td>\t\t\n            <td>off</td>\t\t\n            <td>on</td>\n        </tr>\n    </table\n    \n    Note that there are two functions for not - one that returns the opposite of input 1 and the other with input 2. Of course, we also have the \n    gates that always return true and false (which are named Always and Never respectively), and the And and Nand gates we had previously examined. \n    Given that there are sixteen in total, what are the others? Two are outputs that match each of the inputs - that is, if Input 1 is on, then the \n    output will be on regardless of Input 2. A similar gate can exist that matches Input 2 and ignores Input 1. This brings the total to 8, but what \n    about the others?<br><br>\n    \n    Here is a truth table showing the remaining eight gates. Here is a truth table showing their values and names:<br><br>\n    \n    <table>\n        <thead>\n            <tr>\n                <th>Input 1</th>\t\n                <th>Input 2</th>\t\n                <th>Only 1</th>\t\n                <th>Only 2</th>\t\n                <th>Xor</th>\t\n                <th>Or</th>\t\n                <th>Nor</th>\t\n                <th>Xnor</th>\n                <th>1 or not 2</th>\n                <th>2 or not 1</th>\n            </tr>\n        </thead>\t\n        <tr>\t\n            <td>on</td>\t\n            <td>on</td>\t\n            <td>off</td>\t\n            <td>off</td>\t\n            <td>off</td>\t\n            <td>on</td>\t\n            <td>off</td>\t\n            <td>on</td>\t\n            <td>on</td>\t\n            <td>on</td>\n        </tr>\n        <tr>\n            <td>on</td>\t\n            <td>off</td>\t\n            <td>on</td>\t\n            <td>off</td>\t\n            <td>on</td>\t\n            <td>on</td>\t\n            <td>off</td>\t\n            <td>off</td>\t\n            <td>on</td>\t\n            <td>off</td>\n        </tr>\n        <tr>\t\n            <td>off</td>\t\n            <td>on</td>\t\n            <td>off</td>\t\n            <td>on</td>\t\n            <td>on</td>\t\n            <td>on</td>\t\n            <td>off</td>\t\n            <td>off</td>\t\n            <td>off</td>\t\n            <td>on</td>\n        </tr>\n        <tr>\n            <td>off</td>\t\n            <td>off</td>\t\n            <td>off</td>\t\n            <td>off</td>\t\n            <td>off</td>\t\n            <td>off</td>\t\n            <td>on</td>\t\n            <td>on</td>\t\n            <td>on</td>\t\n            <td>on</td>\n        <tr>\n    </table>\t\n    \n    Now that we have the full set, we can begin examining how to build them. Since we have already shown how to use the gates in the first set, we \n    can chain those together to create even more gates. We will see examples as we construct this second set, but there are a couple of ideas that \n    may not be intuitive that allow for construction of these more complex gates.<br><br>\n    \n    First, the output of one gate can be fed into the input of another. For example, if you put two inputs through an And gate, and then put the \n    output of the And gate through a Not gate, then you end up with a Nand gate. Of course, the way we described to build a Nand gate previously \n    is more straightforward, but it illustrates the concept. Second, the input for one gate can split and simultaneously fed into another gate. \n    If we take one input and feed it into both inputs for a Nand gate, for example, then we end up with a Not gate. Again, the earlier method is \n    easier. Note also that both inputs don't necessarily need to feed into the same gate.<br><br>\n    \n    With that, let's examine each of the gates and see how we can construct them.<br><br>\n    \n    If we feed one of the inputs into a Not gate, then feed the result of that input into an And gate with the other input, then the result is an \n    Only gate. To demonstrate that, here is another truth table that shows the values at each step of the way:<br><br>\n    \n    <table>\n        <thead>\n            <tr>\n                <th>Input 1</th>\t\n                <th>Input 2</th>\t\n                <th>Not 1</th>\t\n                <th>2 And Not 1</th>\t\n            </tr>\n        </thead>\n        <tr>\n            <td>on</td>\t\t\t\n            <td>on</td>\t\t\n            <td>off</td>\t\t\n            <td>off</td>\n        </tr>\n        <tr>\n            <td>on</td>\t\t\n            <td>off</td>\t\t\n            <td>off</td>\t\t\n            <td>off</td>\n        </tr>\n        <tr>\n            <td>off</td>\t\t\n            <td>on</td>\t\t\n            <td>on</td>\t\t\n            <td>on</td>\n        </tr>\n        <tr>\n            <td>off</td>\t\t\n            <td>off</td>\t\t\n            <td>on</td>\t\t\n            <td>off</td>\n        </tr>\n    </table><br>\n    \n    Note that this is identical to the Only 2 gate described above. In fact, another name for this gate is the And Not gate. Also, even though \n    there are two inputs and one output, we have four columns in our truth table. This is so we can see the effect of our operations at an \n    intermediate point - in this case, after Not has been applied to Input 1. Truth tables are a great debugging tool. If you write out the inputs \n    and the expected outputs, then perform intermediate calculations, then you can start to narrow down the operations needed to end at a specific \n    output. This works for numbers as well, although in that setting, it is called a function table rather than a truth table.<br><br>\n    \n    Of course, if we take our Only logic gate and flip the inputs, running Input 2 through the Not gate before combining it with Input 1 in an And \n    gate, then we get the other version of the Only gate, which is on only if Input 1 is on. On top of that, if we run the output of one of the Only \n    gates through a Not gate, then we get the 1 Or Not 2 and 2 Or Not 1 gates, depending on which version of the Only gate we started with. As you \n    can see, adding these gates together can quickly provide a variety of new functions quickly.<br><br>\n    \n    Having implemented half the gates, the only four remaining all appear very similar: Or, Nor, Xor, and Xnor. \"Or\" means exactly what you think \n    it does - if Input 1 or Input 2 is on, then the output is on as well. If both are on, then it is true as well. Each of the other three gates \n    have some combination of N and X in front of the or. The N stands Not, much as it did with Nand. Of course, \"nor\" is also a word in English \n    that means exactly that - it is only on if neither input is on. The X means exclusive. In the case of Xor, it will be on only if exactly one \n    of the inputs is on. With Xnor, it will be true only if the inputs are equal - that is, they are both on, or both off. With this understanding, \n    we can move forward with seeing how they might be implemented.<br><br>\n    \n    To make the Only gates, we flipped one of the inputs with a Not gate, then ran both through an And gate. So what happens if we invert them both \n    before running them through the And gate? We can make a truth table to easily see the result:<br><br>\n    \n    <table>\n        <thead>\n            <tr>\n                <th>Input 1</th>\t\n                <th>Input 2</th>\t\n                <th>Not 1</th>\t\n                <th>Not 2</th>\t\n                <th>Not 1 And Not 2</th>\n            </tr>\n        </thead>\n        <tr>\n            <td>on</td>\t\t\n            <td>on</td>\t\t\n            <td>off</td>\t\t\n            <td>off</td>\t\t\n            <td>off</td>\n        </tr>\n        <tr>\n            <td>on</td>\t\t\n            <td>off</td>\t\t\n            <td>off</td>\t\t\n            <td>on</td>\t\t\n            <td>off</td>\n        </tr>\n        <tr>\n            <td>off</td>\t\t\n            <td>on</td>\t\t\n            <td>on</td>\t\t\n            <td>off</td>\t\t\n            <td>off</td>\n        </tr>\n        <tr>\n            <td>off</td>\t\t\n            <td>off</td>\t\t\n            <td>on</td>\t\t\n            <td>on</td>\t\t\n            <td>on</td>\n        </tr>\n    </table><br>\n    \n    Looking at the table above, we've just made our Nor gate! It's the same as taking Not 1 And Not 2. Of course, 1 Nor 2 is a much simpler way of \n    expressing that relationship. From here, if we put the output of our Nor gate through another Not gate, then the relationship we get is the Or \n    gate. (Remember, the N stands for \"not,\" so taking Not Nor is the same as taking Not Not Or, which is another way to say just Or.<br><br>\n    \n    Now, the only two gates that we have to represent are Xor and Xnor. These gates are also opposites, as Xor is on only if the inputs do not match, \n    and Xnor only if they do match. So, if we can create one, we can run it through a Not gate and get the other missing gate. (And, technically, \n    we can make each of these gates in other ways with the gates that we have already created. If we look at the language we use to describe \n    the Xnor gate in English, we can get a hint as to how we might create it from our gates. Remember, a Xnor gate is on if the inputs are both \n    on. That is, if Input 1 and Input 2 are on, or if Input 1 is off and Input 2 is off. Let's create a truth table that shows each of these \n    relationships:<br><br>\n    \n    <table>\n        <thead>\n            <tr>\n                <th>Input 1</th>\t\n                <th>Input 2</th>\t\n                <th>And</th>\t\n                <th>Not 1</th>\t\n                <th>Not 2</th>\t\n                <th>Not 1 And Not 2</th>\t\n                <th>(1 And 2) Or (Not 1 And Not 2)</th>\n            </tr>\n        </thead>\n        <tr>\n            <td>on</td>\t\t\n            <td>on</td>\t\t\n            <td>on</td>\t\t\n            <td>off</td>\t\t\n            <td>off</td>\t\t\n            <td>off</td>\t\t\n            <td>on</td>\n        </tr>\n        <tr>\n            <td>on</td>\t\t\n            <td>off</td>\t\t\n            <td>off</td>\t\t\n            <td>off</td>\t\t\n            <td>on</td>\t\t\n            <td>off</td>\t\t\n            <td>off</td>\n        </tr>\n        <tr>\n            <td>off</td>\t\t\n            <td>on</td>\t\t\n            <td>off</td>\t\t\n            <td>on</td>\t\t\n            <td>off</td>\t\t\n            <td>off</td>\t\t\n            <td>off</td>\n        </tr>\n        <tr>\n            <td>off</td>\t\t\n            <td>off</td>\t\t\n            <td>off</td>\t\t\n            <td>on</td>\t\t\n            <td>on</td>\t\t\n            <td>on</td>\t\t\n            <td>on</td>\n        </tr>\n    </table><br>\n    \n    Voila, the Xnor gate! As said before, putting this through a Not gate will give us the Xor gate, which means that now we can represent each of \n    these 16 two-input gates with real hardware. While not particularly useful on their own, if we continue to build on these gates, we'll be able \n    to create some chips that we can put to work for us!<br><br>\n    ";
  document.getElementsByClassName("content")[0].innerHTML = content;
}
},{}],"content/blog/representing.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.representing = representing;

function representing() {
  var content = "";
  content += "\n    <h3>\n    Representing Binary Logic\n    </h3>\n\n    As we have been looking directly at the electrical circuits that make up these logic gates. However, as we deeper into how these logic gates \n    combine, it's useful to refer to them from more of a logical standpoint rather than practical.<br><br>\n\n    Up to this point, we've been referring to the operations of these logic gates in specific ways that represent what is happening at the \n    electrical level. If a wire leading into or out of a gate, then we've said it's \"on,\" or if not, then it's \"off.\" While \"on\" and \"off\" show \n    what is going on with the wires, typically other symbols are used in computer science. The main alternative used in higher level programming \n    is \"true/false\" rather than \"on/off,\" although they mean the same thing. Another choice is to use numbers. A one represents on or true, and \n    a zero represents off or false. Using numbers also allows us to be able to perform math on the inputs. Similarly, an input is also called an \n    \"operand.\"<br><br>\n\n    We also have different names for logic gates. Since we are representing these systems mathematically and logically, we can also call them an \n    operation or a function. This also means we can use function notation to describe their relationships as well in order to more accurately show \n    their relationship. For example, instead of saying \"Input 1 and Input 2\" we can instead say and(Input 1, Input 2). These are again how similar \n    functions are represented in high-level programming languages. However, since these basic operations are so prevalent, there are shorthands for \n    some of these simple, common functions. For example, \"and\" is represented by \"&&,\" e.g. \"Input 1 && Input 2.\" Likewise, or is represented by \"||\" \n    and \"!\" means not when preceding an operand. For example, !Input 1 would mean \"not Input 1.\"<br><br>\n\n    There are many other shortcuts as well. Instead of calling the inputs \"Input 1\" and \"Input 2,\" we can call them a variety of other names. P and \n    Q are used in logic. In fact, there are many other symbols that are used in the field of logic to represent many of these ideas in a different way. \n    Generally, though, we will name the inputs based on what their actual function is. If we're simply looking at creating logic gates that describe \n    simple functions, we'll simply call them \"In1,\" \"In2,\" and so forth as needed.<br><br>\n\n    As we get further into examining the interactions of these chips and building more and more complex functionality out of them, having language to \n    describe these functions that is both simpler and clearer helps in ease of communicating the ideas that they are used to build. Moving forward, \n    the terms here will be used interchangably.<br><br>\n    ";
  document.getElementsByClassName("content")[0].innerHTML = content;
}
},{}],"content/blog/decisions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decisions = decisions;

function decisions() {
  var content = "";
  content += "\n    <h3>\n    Decisions and Addition\n    </h3>\n\n    To this point, we have looked at many gates that have two inputs and one output. These form a basis from which we can create more complex \n    operators, but which ones are useful? As we said before, there are 256 different gates that we can create with three inputs. Surely we don't \n    need all of these?<br><br>\n\n    Just as And, Or, and Not are the primary two-input operators, not all three-input operators need to be clearly defined. Most can be easily \n    specified by combining the inputs into various And, Or, and Not gates. The most important is called a multiplexor, which allows for branching. \n    For this gate, we have a Control input, as well as our I1 and I2. When the Control bit is set to true, then the output is equal to I1. If the \n    control bit is false, then the output is equal to I2. Here is the truth table for this function:<br><br>\n\n    <table>\n        <thead>\n            <tr>\n                <th>Control</th>\t\n                <th>I1</th>\t\n                <th>I2</th>\t\n                <th>Out</th>\n            </tr>\n        </thead>\n        <tr>\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\n        </tr>\n    </table><br>\n\n    Can we make this function from our simpler gates alone? We sure can! To do so, let's look at breaking it down into smaller pieces and then try \n    and piece them together. First, we know that if Control is 0 then Out will be equal to I1. We have an operation that returns true only if one \n    input is true - the Only gate. To reduce confusion, we will call it by its other name, And Not. Here is the truth table for that gate applied \n    to Control and I1:<br><br>\n\n    <table>\n        <thead>\n            <tr>\n                <th>Control</th>\t\n                <th>I1</th>\t\n                <th>Out</th>\n            </tr>\n        </thead>\n        <tr>\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\n        </tr>\n    </table><br>\n\n    Likewise, if we want a function that is true only if Control and I2 are both true. That's our And function, shown again here:<br><br>\n\n    <table>\n        <thead>\n            <tr>\n                <th>Control</th>\t\n                <th>I2</th>\t\n                <th>Out</th>\n            </tr>\n        </thead>\n        <tr>\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\n        </tr>\n    </table><br>\n\n    Now, how can we combine these two charts? If we use And, then the result will always be zero as the Control input would need to be 1 and 0 at \n    the same time. If we use Or, though, then it works perfectly! Here is the full truth table with all three inputs, along with both of the interim \n    functions, then finally the combination:<br><br>\n\n    <table>\n        <thead>\n            <tr>\n                <th>Control</th>\t\n                <th>I1</th>\t\n                <th>I2</th>\t\n                <th>I1 And Not Control</th>\t\n                <th>I2 And Control</th>\t\n                <th>(I1 And Not Control) Or (I2 And Control)</th>\n            </tr>\n        </thead>\n        <tr>\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\n        </tr>\n    </table><br>\n\n    We've done it! Although its application may not be apparent at first, this allows us to start making decisions with our circuits. This feature \n    will become incredibly useful at higher levels of computing, as it allows code to branch, which is incredibly useful to create complex programs.\n    <br><br>\n\n    In addition to the multiplexor, we can also use our gates to create chips that can begin to perform mathematical operations. The simplest is \n    called a half adder, and it takes two inputs and provides the input. Although I haven't introduced binary completely yet, consider that there \n    are only three results when adding a combination of 1s and 0s: 0, 1, or 2. Since a single output can only represent a 1 or 0, how do we represent \n    a 2? The answer: add more outputs! If we have another output that's true when the sum is 2, then we can track that information as well. What's \n    more, if both outputs are on, then we have an output that represents 2 plus an output that represents 1, which means we can also indicate an \n    output of 3 of both are on. Here is a table showing this information:<br><br>\n\n    <table>\n        <thead>\n            <tr>\n                <th>2's </th>\t\n                <th>1's Output</th>\t\n                <th>Decimal </th>\n            </tr>\n        </thead>\n        <tr>\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>2</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>3</td>\n        </tr>\n    </table><br>\n\n    If we keep adding more outputs, then we can double the number of possible outputs. This is the basis for binary, which will be explored deeper \n    in a subsequent article.<br><br>\n\n    However, at this point, we're trying to make a gate that takes two numbers and adds them. We'll call our two output gates Sum and Carry. Sum \n    represents the ones place in the table above, and Carry represents whether we need to carry our answer over. Here is a truth table for the gate \n    that we need to create:<br><br>\n\n    <table>\n        <thead>\n            <tr>\n                <th>I1</th>\t\n                <th>I2</th>\t\n                <th>Sum</th>\t\n                <th>Carry</th>\n            </tr>\n        </thead>\n        <tr>\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\n        </tr>\n    </table><br>\n\n    Those operations might look familiar. That's because Sum is just an Xor gate, and Carry is an And gate. We've already built these, and now \n    we've shown how they can be combined into a chip that starts doing math! And since the highest number we can represent is 2, we could even add \n    another input to completely utilize both output bits to their fullest potential. Since the other chip was known as a half adder, this three-input \n    version is called a full adder. Here is a truth table for it:<br><br>\n\n    <table>\n        <thead>\n            <tr>\n                <th>I1</th>\t\n                <th>I2</th>\t\n                <th>I3</th>\t\n                <th>Sum</th>\t\n                <th>Carry</th>\n            </tr>\n        </thead>\n        <tr>\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\n        </tr>\n    </table><br>\n\n    The implementation of this chip is a bit more complex. Sum is true if exactly one input is true, or if all three are. Carry is true if at least \n    two inputs are true. How can we create a function that represents that? Let's see what happens to our truth table when we connect inputs I2 and \n    I3 to a half adder:<br><br>\n\n    <table>\n        <thead>\n            <tr>\n                <th>I1</th>\t\n                <th>I2</th>\t\n                <th>I3</th>\t\n                <th>Sum(I2,I3)</th>\t\n                <th>Carry(I2,I3)</th>\n            </tr>\n        </thead>\n        <tr>\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\n        </tr>\n    </table><br>\n\n    The first half of the table is dead on, but the second half is almost completely wrong. But, if you apply Xor to I1 and the Sum output:<br><br>\n\n    <table>\n        <thead>\n            <tr>\n                <th>I1</th>\t\n                <th>Sum(I2,I3)</th>\t\n                <th>Xor</th>\t\n                <th>Sum(I1,I2,I3)</th>\n            </tr>\n        </thead>\n        <tr>\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\n        </tr>\n    </table><br>\n\n    Now, the output matches the intended result for the full adder's Sum output. We're halfway there! At least, we would be if the Carry gate \n    were as easy to model. However, think about the way the gate was described before: if at least two of the inputs are true, then Carry is true. \n    That's easy to represent - if (I1 and I2) or (I1 and I3) or (I2 and I3) are true, then Carry is true. Let's draw another truth table to show \n    this relationship with its intermediate steps:<br><br>\n\n    <table>\n        <thead>\n            <tr>\n                <th>I1</th>\t\n                <th>I2</th>\t\n                <th>I3</th>\t\n                <th>And(I1, I2)</th>\t\n                <th>And(I1, I3)</th>\t\n                <th>And(I2, I3)</th>\t\n                <th>Or(And(I1, I2), And(I1, I3)</th>\t\n                <th>Or(Or(And(I1, I2), And(I1, I3), And(I2,I3)))</th>\n            </tr>\n        </thead>\n        <tr>\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>0</td>\t\t\n            <td>0</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\t\t\n            <td>1</td>\n        </tr>\n    </table><br>\n\n    There we go! Now if we combine what we've done, we have a full adder chip that can add three binary numbers!<br><br>\n\n    Naturally, though, how often do you need to add a combination of three 1s and 0s? Not very often, admittedly. So, what can we do to start \n    making this more useful? Unfortunately, that answer will have to wait until the next article. First, though, we'll need to take another \n    interlude where we more deeply examine the binary number system. After doing so, the answer might become intuitive, but if not, it too will \n    be explained in time.<br><br>\n    ";
  document.getElementsByClassName("content")[0].innerHTML = content;
}
},{}],"content/contact.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contact = contact;

function contact() {
  var content = "";
  content += "\n    <h3>\n        Reach out!\n    </h3>\n    ";
  document.getElementsByClassName("content")[0].innerHTML = content;
}
},{}],"content/projects/alu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alu = alu;

function alu() {
  var content = "";
  content += "\n    <br><div class=\"alu-grid-container\">\n    <!-- Title - Row 1 -->\n        <div class=\"alu-grid-item-title\">\n            8-Bit Arithmatic + Logic Unit\n        </div>\n\n        <!-- Input - Row 2 -->\n        <div class=\"alu-grid-item-x-register\">\n            X Register\n        </div>\n        <div class=\"alu-grid-item-y-register\">\n            Y Register\n        </div>\n        <div class=\"alu-grid-item\">\n            ZX\n        </div>\n        <div class=\"alu-grid-item\">\n            NX\n        </div>\n        <div class=\"alu-grid-item\">\n            ZY\n        </div>\n        <div class=\"alu-grid-item\">\n            NY\n        </div>\n        <div class=\"alu-grid-item\">\n            F\n        </div>\n        <div class=\"alu-grid-item\">\n            NO\n        </div>\n\n        <!-- Input - Row 2 -->\n        <div class=\"alu-grid-item-x-register\">\n            <input type=\"number\" id=\"alu-x-register-decimal\" placeholder=\"X Register\" max=\"127\" min=\"-128\">\n        </div>\n        <div class=\"alu-grid-item-y-register\">\n            <input type=\"number\" id=\"alu-y-register-decimal\" placeholder=\"Y Register\" max=\"127\" min=\"-128\">\n        </div>\n        <div class=\"alu-grid-item\">\n            <input type=\"checkbox\" id=\"alu-ZX-in\">\n        </div>\n        <div class=\"alu-grid-item\">\n            <input type=\"checkbox\" id=\"alu-NX-in\">\n        </div>\n        <div class=\"alu-grid-item\">\n            <input type=\"checkbox\" id=\"alu-ZY-in\">\n        </div>\n        <div class=\"alu-grid-item\">\n            <input type=\"checkbox\" id=\"alu-NY-in\">\n        </div>\n        <div class=\"alu-grid-item\">\n            <input type=\"checkbox\" id=\"alu-F-in\">\n        </div>\n        <div class=\"alu-grid-item\">\n            <input type=\"checkbox\" id=\"alu-NO-in\">\n        </div>\n\n        <!-- Binary Input - Row 3 -->\n        <div id = \"X8-in\" class=\"alu-grid-item\">\n            X8\n        </div>\n        <div id = \"X7-in\" class=\"alu-grid-item\">\n            X7\n        </div>\n        <div id = \"X6-in\" class=\"alu-grid-item\">\n            X6\n        </div>\n        <div id = \"X5-in\" class=\"alu-grid-item\">\n            X5\n        </div>\n        <div id = \"X4-in\" class=\"alu-grid-item\">\n            X4\n        </div>\n        <div id = \"X3-in\" class=\"alu-grid-item\">\n            X3\n        </div>\n        <div id = \"X2-in\" class=\"alu-grid-item\">\n            X2\n        </div>\n        <div id = \"X1-in\" class=\"alu-grid-item\">\n            X1\n        </div>\n        <div id = \"Y8-in\" class=\"alu-grid-item\">\n            Y8\n        </div>\n        <div id = \"Y7-in\" class=\"alu-grid-item\">\n            Y7\n        </div>\n        <div id = \"Y6-in\" class=\"alu-grid-item\">\n            Y6\n        </div>\n        <div id = \"Y5-in\" class=\"alu-grid-item\">\n            Y5\n        </div>\n        <div id = \"Y4-in\" class=\"alu-grid-item\">\n            Y4\n        </div>\n        <div id = \"Y3-in\" class=\"alu-grid-item\">\n            Y3\n        </div>\n        <div id = \"Y2-in\" class=\"alu-grid-item\">\n            Y2\n        </div>\n        <div id = \"Y1-in\" class=\"alu-grid-item\">\n            Y1\n        </div>\n        <div class=\"alu-grid-item-label\">\n            Inputs as binary\n        </div>\n\n        <!-- Zero Registers - Row 4 -->\n        <div id = \"X8-zero\" class=\"alu-grid-item\">\n            X8\n        </div>\n        <div id = \"X7-zero\" class=\"alu-grid-item\">\n            X7\n        </div>\n        <div id = \"X6-zero\" class=\"alu-grid-item\">\n            X6\n        </div>\n        <div id = \"X5-zero\" class=\"alu-grid-item\">\n            X5\n        </div>\n        <div id = \"X4-zero\" class=\"alu-grid-item\">\n            X4\n        </div>\n        <div id = \"X3-zero\" class=\"alu-grid-item\">\n            X3\n        </div>\n        <div id = \"X2-zero\" class=\"alu-grid-item\">\n            X2\n        </div>\n        <div id = \"X1-zero\" class=\"alu-grid-item\">\n            X1\n        </div>\n        <div id = \"Y8-zero\" class=\"alu-grid-item\">\n            Y8\n        </div>\n        <div id = \"Y7-zero\" class=\"alu-grid-item\">\n            Y7\n        </div>\n        <div id = \"Y6-zero\" class=\"alu-grid-item\">\n            Y6\n        </div>\n        <div id = \"Y5-zero\" class=\"alu-grid-item\">\n            Y5\n        </div>\n        <div id = \"Y4-zero\" class=\"alu-grid-item\">\n            Y4\n        </div>\n        <div id = \"Y3-zero\" class=\"alu-grid-item\">\n            Y3\n        </div>\n        <div id = \"Y2-zero\" class=\"alu-grid-item\">\n            Y2\n        </div>\n        <div id = \"Y1-zero\" class=\"alu-grid-item\">\n            Y1\n        </div>\n        <div class=\"alu-grid-item-label\">\n            Zeroing of inputs\n        </div>\n\n        <!-- Negation Registers - Row 5 -->\n        <div id = \"X8-neg\" class=\"alu-grid-item\">\n            X8\n        </div>\n        <div id = \"X7-neg\" class=\"alu-grid-item\">\n            X7\n        </div>\n        <div id = \"X6-neg\" class=\"alu-grid-item\">\n            X6\n        </div>\n        <div id = \"X5-neg\" class=\"alu-grid-item\">\n            X5\n        </div>\n        <div id = \"X4-neg\" class=\"alu-grid-item\">\n            X4\n        </div>\n        <div id = \"X3-neg\" class=\"alu-grid-item\">\n            X3\n        </div>\n        <div id = \"X2-neg\" class=\"alu-grid-item\">\n            X2\n        </div>\n        <div id = \"X1-neg\" class=\"alu-grid-item\">\n            X1\n        </div>\n        <div id = \"Y8-neg\" class=\"alu-grid-item\">\n            Y8\n        </div>\n        <div id = \"Y7-neg\" class=\"alu-grid-item\">\n            Y7\n        </div>\n        <div id = \"Y6-neg\" class=\"alu-grid-item\">\n            Y6\n        </div>\n        <div id = \"Y5-neg\" class=\"alu-grid-item\">\n            Y5\n        </div>\n        <div id = \"Y4-neg\" class=\"alu-grid-item\">\n            Y4\n        </div>\n        <div id = \"Y3-neg\" class=\"alu-grid-item\">\n            Y3\n        </div>\n        <div id = \"Y2-neg\" class=\"alu-grid-item\">\n            Y2\n        </div>\n        <div id = \"Y1-neg\" class=\"alu-grid-item\">\n            Y1\n        </div>\n        <div class=\"alu-grid-item-label\">\n            Negation of inputs\n        </div>\n        \n        <!-- Function - Row 6-->\n\n        <div id = \"F8\" class=\"alu-grid-item\">\n            F8\n        </div>\n        <div id = \"F7\" class=\"alu-grid-item\">\n            F7\n        </div>\n        <div id = \"F6\" class=\"alu-grid-item\">\n            F6\n        </div>\n        <div id = \"F5\" class=\"alu-grid-item\">\n            F5\n        </div>\n        <div id = \"F4\" class=\"alu-grid-item\">\n            F4\n        </div>\n        <div id = \"F3\" class=\"alu-grid-item\">\n            F3\n        </div>\n        <div id = \"F2\" class=\"alu-grid-item\">\n            F2\n        </div>\n        <div id = \"F1\" class=\"alu-grid-item\">\n            F1\n        </div>\n        <div id = \"function\" class=\"alu-grid-item-y-register\">\n            Add or and?\n        </div>\n        <div class=\"alu-grid-item-label\">\n            Function\n        </div>\n        \n        <!-- Negate output - Row 6-->\n\n        <div id = \"N8\" class=\"alu-grid-item\">\n            N8\n        </div>\n        <div id = \"N7\" class=\"alu-grid-item\">\n            N7\n        </div>\n        <div id = \"N6\" class=\"alu-grid-item\">\n            N6\n        </div>\n        <div id = \"N5\" class=\"alu-grid-item\">\n            N5\n        </div>\n        <div id = \"N4\" class=\"alu-grid-item\">\n            N4\n        </div>\n        <div id = \"N3\" class=\"alu-grid-item\">\n            N3\n        </div>\n        <div id = \"N2\" class=\"alu-grid-item\">\n            N2\n        </div>\n        <div id = \"N1\" class=\"alu-grid-item\">\n            N1\n        </div>\n        <div class=\"alu-grid-item-y-register\">\n                Negate or not?\n        </div>\n        <div class=\"alu-grid-item-label\" id=\"alu-output\">\n                Negate output\n        </div>\n    </div>\n    <br><br>\n\n    <p>\n    I decided to challenge myself with a simulated aritmatic and logic unit with a few restrictions to make its construction similar to what a \n    hardware engineer would go through when creating an ALU out of logic gates. To that end, I challenged myself to the following constraints:\n    </p>\n    <ol>\n        <li> 1. With the exception of the initial conversion from decimal to binary, all operations would be completed as purely Boolean functions.</li>\n        <li> 2. Although I would use operations such as AND, OR, XOR, and NOT, I needed to fine each of those using only NAND first. </li>\n    </ol>\n    <p>\n        With these restraints, I created the ALU above. This ALU was described in the book \"The Elements of Computer Science\" by Nisan and Schocken. \n        In addition to the two input registers that take binary numbers, I also implemented six control bits that performed a different function. \n        A description of each follows:\n    </p>\n    <ul>\n        <li><b>ZX</b> zeroes the X input.</li>\n        <li><b>NX</b> negates the X input after applying ZX.</li>\n        <li><b>ZY</b> zeroes the Y input.</li>\n        <li><b>NY</b> negates the Y input after applying ZY.</li>\n        <li><b>F</b> determines the function to be used. 0 represents bitwise AND, and 1 represents addition. </li>\n        <li><b>NO</b> negates the output.</li>\n    </ul>\n    <p>\n        Using these six registers and two inputs, there are a number of functions that are possible. Here are some of the more useful examples:\n    <p>\n\n    <table>\n        <thead>\n            <tr>\n                <th>Function</th>\n                <th>ZX</th>\n                <th>NX</th>\n                <th>ZY</th>\n                <th>NY</th>\n                <th>F</th>\n                <th>NO</th>\n            </tr>\n        </thead>\n        <tr>\n            <td>0</td>\n            <td>1</td>\n            <td>0</td>\n            <td>1</td>\n            <td>0</td>\n            <td>1</td>\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>1</td>\n            <td>1</td>\n            <td>1</td>\n            <td>1</td>\n            <td>1</td>\n            <td>1</td>\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>-1</td>\n            <td>1</td>\n            <td>1</td>\n            <td>1</td>\n            <td>0</td>\n            <td>1</td>\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>x</td>\n            <td>0</td>\n            <td>0</td>\n            <td>1</td>\n            <td>1</td>\n            <td>0</td>\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>y</td>\n            <td>1</td>\n            <td>1</td>\n            <td>0</td>\n            <td>0</td>\n            <td>0</td>\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>!x</td>\n            <td>0</td>\n            <td>0</td>\n            <td>1</td>\n            <td>1</td>\n            <td>0</td>\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>!y</td>\n            <td>1</td>\n            <td>1</td>\n            <td>0</td>\n            <td>0</td>\n            <td>0</td>\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>-x</td>\n            <td>0</td>\n            <td>0</td>\n            <td>1</td>\n            <td>1</td>\n            <td>1</td>\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>-y</td>\n            <td>1</td>\n            <td>1</td>\n            <td>0</td>\n            <td>0</td>\n            <td>1</td>\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>x+1</td>\n            <td>0</td>\n            <td>1</td>\n            <td>1</td>\n            <td>1</td>\n            <td>1</td>\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>y+1</td>\n            <td>1</td>\n            <td>1</td>\n            <td>0</td>\n            <td>1</td>\n            <td>1</td>\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>x-1</td>\n            <td>0</td>\n            <td>0</td>\n            <td>1</td>\n            <td>1</td>\n            <td>1</td>\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>y-1</td>\n            <td>1</td>\n            <td>1</td>\n            <td>0</td>\n            <td>0</td>\n            <td>1</td>\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>x+y</td>\n            <td>0</td>\n            <td>0</td>\n            <td>0</td>\n            <td>0</td>\n            <td>1</td>\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>x-y</td>\n            <td>0</td>\n            <td>1</td>\n            <td>0</td>\n            <td>0</td>\n            <td>1</td>\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>y-x</td>\n            <td>0</td>\n            <td>0</td>\n            <td>0</td>\n            <td>1</td>\n            <td>1</td>\n            <td>1</td>\n        </tr>\n        <tr>\n            <td>x&y</td>\n            <td>0</td>\n            <td>0</td>\n            <td>0</td>\n            <td>0</td>\n            <td>0</td>\n            <td>0</td>\n        </tr>\n        <tr>\n            <td>x|y</td>\n            <td>0</td>\n            <td>1</td>\n            <td>0</td>\n            <td>1</td>\n            <td>0</td>\n            <td>1</td>\n        </tr>\n    </table>\n\n    <br><br>\n    ";
  document.getElementsByClassName("content")[0].innerHTML = content;
  var bits = 7;
  var reg_x = new Array(bits);
  var reg_y = new Array(bits);
  var zero_x = new Array(bits);
  var zero_y = new Array(bits);
  var neg_x = new Array(bits);
  var neg_y = new Array(bits);
  var carry = new Array(bits);
  var f = new Array(bits);
  var out = new Array(bits);
  var elem_reg_x = document.getElementById("alu-x-register-decimal");
  var elem_reg_y = document.getElementById("alu-y-register-decimal");
  var elem_zero_x = document.getElementById("alu-ZX-in");
  var elem_neg_x = document.getElementById("alu-NX-in");
  var elem_zero_y = document.getElementById("alu-ZY-in");
  var elem_neg_y = document.getElementById("alu-NY-in");
  var elem_f = document.getElementById("alu-F-in");
  var elem_out = document.getElementById("alu-NO-in");
  elem_reg_x.addEventListener("input", calculate);
  elem_reg_y.addEventListener("input", calculate);
  elem_zero_x.addEventListener("input", calculate);
  elem_zero_y.addEventListener("input", calculate);
  elem_neg_x.addEventListener("input", calculate);
  elem_neg_y.addEventListener("input", calculate);
  elem_f.addEventListener("input", calculate);
  elem_out.addEventListener("input", calculate);

  function calculate() {
    // convert decimal inputs to boolean
    if (elem_reg_x.value < 0) {
      reg_x[bits] = 1;
    } else {
      reg_x[bits] = 0;
    }

    reg_x[0] = Math.abs(elem_reg_x.value) % 2;
    reg_x[1] = Math.floor(elem_reg_x.value / 2 + 128) % 2;
    reg_x[2] = Math.floor(elem_reg_x.value / 4 + 128) % 2;
    reg_x[3] = Math.floor(elem_reg_x.value / 8 + 128) % 2;
    reg_x[4] = Math.floor(elem_reg_x.value / 16 + 128) % 2;
    reg_x[5] = Math.floor(elem_reg_x.value / 32 + 128) % 2;
    reg_x[6] = Math.floor(elem_reg_x.value / 64 + 128) % 2;
    document.getElementById("X8-in").innerHTML = reg_x[7];
    document.getElementById("X7-in").innerHTML = reg_x[6];
    document.getElementById("X6-in").innerHTML = reg_x[5];
    document.getElementById("X5-in").innerHTML = reg_x[4];
    document.getElementById("X4-in").innerHTML = reg_x[3];
    document.getElementById("X3-in").innerHTML = reg_x[2];
    document.getElementById("X2-in").innerHTML = reg_x[1];
    document.getElementById("X1-in").innerHTML = reg_x[0];

    if (elem_reg_y.value < 0) {
      reg_y[bits] = 1;
    } else {
      reg_y[bits] = 0;
    }

    reg_y[0] = Math.abs(elem_reg_y.value) % 2;
    reg_y[1] = Math.floor(elem_reg_y.value / 2 + 128) % 2;
    reg_y[2] = Math.floor(elem_reg_y.value / 4 + 128) % 2;
    reg_y[3] = Math.floor(elem_reg_y.value / 8 + 128) % 2;
    reg_y[4] = Math.floor(elem_reg_y.value / 16 + 128) % 2;
    reg_y[5] = Math.floor(elem_reg_y.value / 32 + 128) % 2;
    reg_y[6] = Math.floor(elem_reg_y.value / 64 + 128) % 2;
    document.getElementById("Y8-in").innerHTML = reg_y[7];
    document.getElementById("Y7-in").innerHTML = reg_y[6];
    document.getElementById("Y6-in").innerHTML = reg_y[5];
    document.getElementById("Y5-in").innerHTML = reg_y[4];
    document.getElementById("Y4-in").innerHTML = reg_y[3];
    document.getElementById("Y3-in").innerHTML = reg_y[2];
    document.getElementById("Y2-in").innerHTML = reg_y[1];
    document.getElementById("Y1-in").innerHTML = reg_y[0];
    zero_x[0] = AND(NOT(elem_zero_x.checked), reg_x[0]);
    zero_x[1] = AND(NOT(elem_zero_x.checked), reg_x[1]);
    zero_x[2] = AND(NOT(elem_zero_x.checked), reg_x[2]);
    zero_x[3] = AND(NOT(elem_zero_x.checked), reg_x[3]);
    zero_x[4] = AND(NOT(elem_zero_x.checked), reg_x[4]);
    zero_x[5] = AND(NOT(elem_zero_x.checked), reg_x[5]);
    zero_x[6] = AND(NOT(elem_zero_x.checked), reg_x[6]);
    zero_x[7] = AND(NOT(elem_zero_x.checked), reg_x[7]);
    document.getElementById("X8-zero").innerHTML = zero_x[7];
    document.getElementById("X7-zero").innerHTML = zero_x[6];
    document.getElementById("X6-zero").innerHTML = zero_x[5];
    document.getElementById("X5-zero").innerHTML = zero_x[4];
    document.getElementById("X4-zero").innerHTML = zero_x[3];
    document.getElementById("X3-zero").innerHTML = zero_x[2];
    document.getElementById("X2-zero").innerHTML = zero_x[1];
    document.getElementById("X1-zero").innerHTML = zero_x[0];
    zero_y[0] = AND(NOT(elem_zero_y.checked), reg_y[0]);
    zero_y[1] = AND(NOT(elem_zero_y.checked), reg_y[1]);
    zero_y[2] = AND(NOT(elem_zero_y.checked), reg_y[2]);
    zero_y[3] = AND(NOT(elem_zero_y.checked), reg_y[3]);
    zero_y[4] = AND(NOT(elem_zero_y.checked), reg_y[4]);
    zero_y[5] = AND(NOT(elem_zero_y.checked), reg_y[5]);
    zero_y[6] = AND(NOT(elem_zero_y.checked), reg_y[6]);
    zero_y[7] = AND(NOT(elem_zero_y.checked), reg_y[7]);
    document.getElementById("Y8-zero").innerHTML = zero_y[7];
    document.getElementById("Y7-zero").innerHTML = zero_y[6];
    document.getElementById("Y6-zero").innerHTML = zero_y[5];
    document.getElementById("Y5-zero").innerHTML = zero_y[4];
    document.getElementById("Y4-zero").innerHTML = zero_y[3];
    document.getElementById("Y3-zero").innerHTML = zero_y[2];
    document.getElementById("Y2-zero").innerHTML = zero_y[1];
    document.getElementById("Y1-zero").innerHTML = zero_y[0];
    neg_x[0] = OR(AND(zero_x[0], NOT(elem_neg_x.checked)), AND(elem_neg_x.checked, NOT(zero_x[0])));
    neg_x[1] = OR(AND(zero_x[1], NOT(elem_neg_x.checked)), AND(elem_neg_x.checked, NOT(zero_x[1])));
    neg_x[2] = OR(AND(zero_x[2], NOT(elem_neg_x.checked)), AND(elem_neg_x.checked, NOT(zero_x[2])));
    neg_x[3] = OR(AND(zero_x[3], NOT(elem_neg_x.checked)), AND(elem_neg_x.checked, NOT(zero_x[3])));
    neg_x[4] = OR(AND(zero_x[4], NOT(elem_neg_x.checked)), AND(elem_neg_x.checked, NOT(zero_x[4])));
    neg_x[5] = OR(AND(zero_x[5], NOT(elem_neg_x.checked)), AND(elem_neg_x.checked, NOT(zero_x[5])));
    neg_x[6] = OR(AND(zero_x[6], NOT(elem_neg_x.checked)), AND(elem_neg_x.checked, NOT(zero_x[6])));
    neg_x[7] = OR(AND(zero_x[7], NOT(elem_neg_x.checked)), AND(elem_neg_x.checked, NOT(zero_x[7])));
    document.getElementById("X8-neg").innerHTML = neg_x[7];
    document.getElementById("X7-neg").innerHTML = neg_x[6];
    document.getElementById("X6-neg").innerHTML = neg_x[5];
    document.getElementById("X5-neg").innerHTML = neg_x[4];
    document.getElementById("X4-neg").innerHTML = neg_x[3];
    document.getElementById("X3-neg").innerHTML = neg_x[2];
    document.getElementById("X2-neg").innerHTML = neg_x[1];
    document.getElementById("X1-neg").innerHTML = neg_x[0];
    neg_y[0] = OR(AND(zero_y[0], NOT(elem_neg_y.checked)), AND(elem_neg_y.checked, NOT(zero_y[0])));
    neg_y[1] = OR(AND(zero_y[1], NOT(elem_neg_y.checked)), AND(elem_neg_y.checked, NOT(zero_y[1])));
    neg_y[2] = OR(AND(zero_y[2], NOT(elem_neg_y.checked)), AND(elem_neg_y.checked, NOT(zero_y[2])));
    neg_y[3] = OR(AND(zero_y[3], NOT(elem_neg_y.checked)), AND(elem_neg_y.checked, NOT(zero_y[3])));
    neg_y[4] = OR(AND(zero_y[4], NOT(elem_neg_y.checked)), AND(elem_neg_y.checked, NOT(zero_y[4])));
    neg_y[5] = OR(AND(zero_y[5], NOT(elem_neg_y.checked)), AND(elem_neg_y.checked, NOT(zero_y[5])));
    neg_y[6] = OR(AND(zero_y[6], NOT(elem_neg_y.checked)), AND(elem_neg_y.checked, NOT(zero_y[6])));
    neg_y[7] = OR(AND(zero_y[7], NOT(elem_neg_y.checked)), AND(elem_neg_y.checked, NOT(zero_y[7])));
    document.getElementById("Y8-neg").innerHTML = neg_y[7];
    document.getElementById("Y7-neg").innerHTML = neg_y[6];
    document.getElementById("Y6-neg").innerHTML = neg_y[5];
    document.getElementById("Y5-neg").innerHTML = neg_y[4];
    document.getElementById("Y4-neg").innerHTML = neg_y[3];
    document.getElementById("Y3-neg").innerHTML = neg_y[2];
    document.getElementById("Y2-neg").innerHTML = neg_y[1];
    document.getElementById("Y1-neg").innerHTML = neg_y[0];
    carry[0] = AND(neg_x[0], neg_y[0]);
    carry[1] = ADDCARRY(neg_x[1], neg_y[1], carry[0]);
    carry[2] = ADDCARRY(neg_x[2], neg_y[2], carry[1]);
    carry[3] = ADDCARRY(neg_x[3], neg_y[3], carry[2]);
    carry[4] = ADDCARRY(neg_x[4], neg_y[4], carry[3]);
    carry[5] = ADDCARRY(neg_x[5], neg_y[5], carry[4]);
    carry[6] = ADDCARRY(neg_x[6], neg_y[6], carry[5]);
    carry[7] = ADDCARRY(neg_x[7], neg_y[7], carry[6]);
    f[0] = OR(AND(NOT(elem_f.checked), AND(neg_x[0], neg_y[0])), AND(elem_f.checked, XOR(neg_x[0], neg_y[0])), 0);
    f[1] = OR(AND(NOT(elem_f.checked), AND(neg_x[1], neg_y[1])), AND(elem_f.checked, ADDSUM(neg_x[1], neg_y[1], carry[0])), 0);
    f[2] = OR(AND(NOT(elem_f.checked), AND(neg_x[2], neg_y[2])), AND(elem_f.checked, ADDSUM(neg_x[2], neg_y[2], carry[1])), 0);
    f[3] = OR(AND(NOT(elem_f.checked), AND(neg_x[3], neg_y[3])), AND(elem_f.checked, ADDSUM(neg_x[3], neg_y[3], carry[2])), 0);
    f[4] = OR(AND(NOT(elem_f.checked), AND(neg_x[4], neg_y[4])), AND(elem_f.checked, ADDSUM(neg_x[4], neg_y[4], carry[3])), 0);
    f[5] = OR(AND(NOT(elem_f.checked), AND(neg_x[5], neg_y[5])), AND(elem_f.checked, ADDSUM(neg_x[5], neg_y[5], carry[4])), 0);
    f[6] = OR(AND(NOT(elem_f.checked), AND(neg_x[6], neg_y[6])), AND(elem_f.checked, ADDSUM(neg_x[6], neg_y[6], carry[5])), 0);
    f[7] = OR(AND(NOT(elem_f.checked), AND(neg_x[7], neg_y[7])), AND(elem_f.checked, ADDSUM(neg_x[7], neg_y[7], carry[6])), 0);
    document.getElementById("F8").innerHTML = f[7];
    document.getElementById("F7").innerHTML = f[6];
    document.getElementById("F6").innerHTML = f[5];
    document.getElementById("F5").innerHTML = f[4];
    document.getElementById("F4").innerHTML = f[3];
    document.getElementById("F3").innerHTML = f[2];
    document.getElementById("F2").innerHTML = f[1];
    document.getElementById("F1").innerHTML = f[0];
    if (elem_f.checked) document.getElementById("function").innerHTML = "Add registers";else document.getElementById("function").innerHTML = "Logical And registers";
    out[0] = OR(AND(NOT(elem_out.checked), f[0]), AND(elem_out.checked, NOT(f[0])));
    out[1] = OR(AND(NOT(elem_out.checked), f[1]), AND(elem_out.checked, NOT(f[1])));
    out[2] = OR(AND(NOT(elem_out.checked), f[2]), AND(elem_out.checked, NOT(f[2])));
    out[3] = OR(AND(NOT(elem_out.checked), f[3]), AND(elem_out.checked, NOT(f[3])));
    out[4] = OR(AND(NOT(elem_out.checked), f[4]), AND(elem_out.checked, NOT(f[4])));
    out[5] = OR(AND(NOT(elem_out.checked), f[5]), AND(elem_out.checked, NOT(f[5])));
    out[6] = OR(AND(NOT(elem_out.checked), f[6]), AND(elem_out.checked, NOT(f[6])));
    out[7] = OR(AND(NOT(elem_out.checked), f[7]), AND(elem_out.checked, NOT(f[7])));
    document.getElementById("N8").innerHTML = out[7];
    document.getElementById("N7").innerHTML = out[6];
    document.getElementById("N6").innerHTML = out[5];
    document.getElementById("N5").innerHTML = out[4];
    document.getElementById("N4").innerHTML = out[3];
    document.getElementById("N3").innerHTML = out[2];
    document.getElementById("N2").innerHTML = out[1];
    document.getElementById("N1").innerHTML = out[0];
    var decOutput = 0;
    decOutput += out[7] * -128;
    decOutput += out[0];
    decOutput += out[1] * 2;
    decOutput += out[2] * 4;
    decOutput += out[3] * 8;
    decOutput += out[4] * 16;
    decOutput += out[5] * 32;
    decOutput += out[6] * 64;
    document.getElementById("alu-output").innerHTML = decOutput;
  } // returns 1 if either input is 0


  function NAND(i1, i2) {
    if (i1 == false) return 1;
    if (i2 == false) return 1;
    return 0;
  } // returns 0 if input is 1, OR vice-versa


  function NOT(i1) {
    return NAND(i1, i1);
  } // returns 1 if both inputs are 0


  function AND(i1, i2) {
    return NOT(NAND(i1, i2));
  } // returns 0 if both inputs are 1


  function OR(i1, i2) {
    return NAND(NOT(i1), NOT(i2));
  } // returns 1 if exactly one input is 1


  function XOR(i1, i2) {
    return NOT(OR(AND(i1, i2), AND(NOT(i1), NOT(i2))));
  } // returns 0


  function FALSE(i1) {
    return AND(i1, NOT(i1));
  } // returns 1


  function TRUE(i1) {
    return OR(i1, NOT(i1));
  } // returns 1 if only i1 is 1


  function ANDNOT(i1, i2) {
    return AND(i1, NOT(i2));
  } // if key is 0, returns i1, otherwise returns i2


  function mplex(key, i1, i2) {
    return OR(AND(NOT(key), i1), AND(key, i2));
  }

  function ADDCARRY(i1, i2, i3) {
    return OR(OR(AND(i1, i2), AND(i1, i3)), AND(i2, i3));
  }

  function ADDSUM(i1, i2, i3) {
    return OR(AND(AND(i1, i2), i3), XOR(XOR(i1, i2), i3));
  }

  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {
      for (var k = 0; k < 2; k++) {
        console.log(i + " + " + j + " + " + k + " = " + ADDCARRY(i, j, k) + " " + ADDSUM(i, j, k));
      }
    }
  }
}
},{}],"content/projects/tetris.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tetris = tetris;

function tetris() {
  var content = "";
  content += "\n    <br><br>\n    <div id=\"board\">\n        <canvas width=\"350\" height=\"440\"></canvas>\n    </div>\n\n    <br>\n\n    <p>\n        This game is named after its creator, Alexey Pajitnov, instead of giving it its more well-known, trademarked name. I've been playing \n        this game for as long as I can remember, so implementing it in JavaScript was almost a necessity for me.\n    </p>\n    \n    <p>\n        In true gamer fashion, the controls use the letter keys rather than the arrow keys. A description of each key follows:\n    </p>\n\n    <table>\n        <tr>\n            <td>A</td>\n            <td>Move Left</td>\n        </tr>\n        <tr>\n            <td>D</td>\n            <td>Move Right</td>\n        </tr>\n        <tr>\n            <td>S</td>\n            <td>Soft Down</td>\n        </tr>\n        <tr>\n            <td>Space</td>\n            <td>Hard Down</td>\n        </tr>\n        <tr>\n            <td>K</td>\n            <td>Counter-clockwise</td>\n        </tr>\n        <tr>\n            <td>L</td>\n            <td>Clockwise</td>\n        </tr>\n    </table>\n    ";
  document.getElementsByClassName("content")[0].innerHTML = content;
  var canvas = document.querySelector("#board canvas");
  var ctx = canvas.getContext("2d");
  var w = canvas.width,
      h = canvas.height; // start positions in pixels for drawing squares

  var tileStartX = 22;
  var tileStartY = 22; // distance between start and end of tile

  var tileWidth = 18; // distance between starts of tiles

  var tileSpan = 20; // total columns and rows

  var tileColumns = 10;
  var tileRows = 20; // pieces already on the board

  var gameBoard = new Array(tileColumns);

  for (var i = 0; i < tileColumns; i++) {
    gameBoard[i] = new Array(tileRows);
  } // array for current piece


  var pieceMask = new Array(4); // string identifier of current piece

  var pieceType;
  var nextPieceType = "I"; // current piece's position on board

  var pieceX = 3;
  var pieceY = -2; // listens for keypress events

  document.addEventListener("keydown", keyDownHandler, false); // variables for input

  var leftPressed = false;
  var rightPressed = false;
  var downPressed = false;
  var upPressed = false;
  var clockwisePressed = false;
  var counterclockwisePressed = false;
  var spacePressed = false; // variables for when next piece will move

  var dropInterval = 120;
  var currentInterval = 0; // variables for scoring

  var linesCleared = 0;
  var score = 0;
  var level = 1;
  var gameOver = false;
  var globalHueModifier = Math.floor(Math.random() * 360);
  var globalSaturation = Math.floor(Math.random() * 75) + 25;
  var globalLightness = Math.floor(Math.random() * 30) + 40;
  var iHue = 0;
  var jHue = 50;
  var lHue = 100;
  var oHue = 150;
  var sHue = 200;
  var tHue = 250;
  var zHue = 300; // initialize pieceMask as 4x4 grid

  for (var _i = 0; _i < 4; _i++) {
    pieceMask[_i] = new Array(4);

    for (var j = 0; j < 4; j++) {
      pieceMask[_i][j] = {
        color: "#FFFFFF",
        filled: false
      };
    }
  }

  function createHSL(pieceType) {
    var output = "hsl(";
    var myHue = globalHueModifier;

    switch (pieceType) {
      case "I":
        myHue += iHue;
        break;

      case "J":
        myHue += jHue;
        break;

      case "L":
        myHue += lHue;
        break;

      case "O":
        myHue += oHue;
        break;

      case "S":
        myHue += sHue;
        break;

      case "T":
        myHue += tHue;
        break;

      case "Z":
        myHue += zHue;
        break;

      default:
        myHue = Math.floor(Math.random() * 360);
        break;
    }

    myHue %= 360;
    output += myHue;
    output += "," + globalSaturation + "%," + globalLightness + "%)";
    return output;
  } // returns a string in hex given RGB


  function createRGB(red, green, blue) {
    red = red.toString(16);
    if (red == 0) red = "00";
    green = green.toString(16);
    if (green == 0) green = "00";
    blue = blue.toString(16);
    if (blue == 0) blue = "00";
    return "#".concat(red).concat(green).concat(blue);
  } // colors a piece a given color


  function colorPiece(newColor) {
    for (var _i2 = 0; _i2 < 4; _i2++) {
      for (var _j = 0; _j < 4; _j++) {
        pieceMask[_i2][_j].color = newColor;
      }
    }
  } // initialize gameBoard as tileRows x tileColumns grid


  function initializeBoard() {
    for (var _i3 = 0; _i3 < tileColumns; _i3++) {
      for (var _j2 = 0; _j2 < tileRows; _j2++) {
        var myColor = createHSL("A");
        gameBoard[_i3][_j2] = {
          color: myColor,
          filled: false
        };
      }
    }
  }

  function newPiece() {
    pieceX = 3;
    pieceY = -2;
    randomPiece();
  } // turns pieceMask to O shape


  function pieceO() {
    pieceMask[0][0].filled = false;
    pieceMask[0][1].filled = false;
    pieceMask[0][2].filled = false;
    pieceMask[0][3].filled = false;
    pieceMask[1][0].filled = false;
    pieceMask[1][1].filled = false;
    pieceMask[1][2].filled = false;
    pieceMask[1][3].filled = false;
    pieceMask[2][0].filled = false;
    pieceMask[2][1].filled = false;
    pieceMask[2][2].filled = true;
    pieceMask[2][3].filled = true;
    pieceMask[3][0].filled = false;
    pieceMask[3][1].filled = false;
    pieceMask[3][2].filled = true;
    pieceMask[3][3].filled = true;
    colorPiece(createHSL("O"));
  } // turns pieceMask to J shape


  function pieceJ() {
    pieceMask[0][0].filled = false;
    pieceMask[0][1].filled = false;
    pieceMask[0][2].filled = false;
    pieceMask[0][3].filled = false;
    pieceMask[1][0].filled = false;
    pieceMask[1][1].filled = false;
    pieceMask[1][2].filled = true;
    pieceMask[1][3].filled = false;
    pieceMask[2][0].filled = false;
    pieceMask[2][1].filled = false;
    pieceMask[2][2].filled = true;
    pieceMask[2][3].filled = false;
    pieceMask[3][0].filled = false;
    pieceMask[3][1].filled = false;
    pieceMask[3][2].filled = true;
    pieceMask[3][3].filled = true;
    colorPiece(createHSL("J"));
  } // turns pieceMask to L shape


  function pieceL() {
    pieceMask[0][0].filled = false;
    pieceMask[0][1].filled = false;
    pieceMask[0][2].filled = false;
    pieceMask[0][3].filled = false;
    pieceMask[1][0].filled = false;
    pieceMask[1][1].filled = false;
    pieceMask[1][2].filled = true;
    pieceMask[1][3].filled = true;
    pieceMask[2][0].filled = false;
    pieceMask[2][1].filled = false;
    pieceMask[2][2].filled = true;
    pieceMask[2][3].filled = false;
    pieceMask[3][0].filled = false;
    pieceMask[3][1].filled = false;
    pieceMask[3][2].filled = true;
    pieceMask[3][3].filled = false;
    colorPiece(createHSL("L"));
  } // turns pieceMask to I shape


  function pieceI() {
    pieceMask[0][0].filled = false;
    pieceMask[0][1].filled = false;
    pieceMask[0][2].filled = true;
    pieceMask[0][3].filled = false;
    pieceMask[1][0].filled = false;
    pieceMask[1][1].filled = false;
    pieceMask[1][2].filled = true;
    pieceMask[1][3].filled = false;
    pieceMask[2][0].filled = false;
    pieceMask[2][1].filled = false;
    pieceMask[2][2].filled = true;
    pieceMask[2][3].filled = false;
    pieceMask[3][0].filled = false;
    pieceMask[3][1].filled = false;
    pieceMask[3][2].filled = true;
    pieceMask[3][3].filled = false;
    colorPiece(createHSL("I"));
  } // turns pieceMask to S shape


  function pieceS() {
    pieceMask[0][0].filled = false;
    pieceMask[0][1].filled = false;
    pieceMask[0][2].filled = false;
    pieceMask[0][3].filled = false;
    pieceMask[1][0].filled = false;
    pieceMask[1][1].filled = false;
    pieceMask[1][2].filled = false;
    pieceMask[1][3].filled = true;
    pieceMask[2][0].filled = false;
    pieceMask[2][1].filled = false;
    pieceMask[2][2].filled = true;
    pieceMask[2][3].filled = true;
    pieceMask[3][0].filled = false;
    pieceMask[3][1].filled = false;
    pieceMask[3][2].filled = true;
    pieceMask[3][3].filled = false;
    colorPiece(createHSL("S"));
  } // turns pieceMask to Z shape


  function pieceZ() {
    pieceMask[0][0].filled = false;
    pieceMask[0][1].filled = false;
    pieceMask[0][2].filled = false;
    pieceMask[0][3].filled = false;
    pieceMask[1][0].filled = false;
    pieceMask[1][1].filled = false;
    pieceMask[1][2].filled = true;
    pieceMask[1][3].filled = false;
    pieceMask[2][0].filled = false;
    pieceMask[2][1].filled = false;
    pieceMask[2][2].filled = true;
    pieceMask[2][3].filled = true;
    pieceMask[3][0].filled = false;
    pieceMask[3][1].filled = false;
    pieceMask[3][2].filled = false;
    pieceMask[3][3].filled = true;
    colorPiece(createHSL("Z"));
  } // turns pieceMask to T shape


  function pieceT() {
    pieceMask[0][0].filled = false;
    pieceMask[0][1].filled = false;
    pieceMask[0][2].filled = false;
    pieceMask[0][3].filled = false;
    pieceMask[1][0].filled = false;
    pieceMask[1][1].filled = false;
    pieceMask[1][2].filled = true;
    pieceMask[1][3].filled = false;
    pieceMask[2][0].filled = false;
    pieceMask[2][1].filled = false;
    pieceMask[2][2].filled = true;
    pieceMask[2][3].filled = true;
    pieceMask[3][0].filled = false;
    pieceMask[3][1].filled = false;
    pieceMask[3][2].filled = true;
    pieceMask[3][3].filled = false;
    colorPiece(createHSL("T"));
  } // chooses a new piece and calls appropriate piece()


  function randomPiece() {
    var pieceSelection = Math.floor(Math.random() * 7);

    switch (nextPieceType) {
      case "I":
        pieceI();
        pieceType = "I";
        break;

      case "J":
        pieceJ();
        pieceType = "J";
        break;

      case "L":
        pieceL();
        pieceType = "L";
        break;

      case "O":
        pieceO();
        pieceType = "O";
        break;

      case "S":
        pieceS();
        pieceType = "S";
        break;

      case "T":
        pieceT();
        pieceType = "T";
        break;

      case "Z":
        pieceZ();
        pieceType = "Z";
        break;
    }

    var pieceX = 3;
    var pieceY = -2;

    switch (pieceSelection) {
      case 0:
        nextPieceType = "I";
        break;

      case 1:
        nextPieceType = "J";
        break;

      case 2:
        nextPieceType = "L";
        break;

      case 3:
        nextPieceType = "O";
        break;

      case 4:
        nextPieceType = "S";
        break;

      case 5:
        nextPieceType = "T";
        break;

      case 6:
        nextPieceType = "Z";
        break;
    }
  } // rotates piece counterclockwise


  function rotatePieceCounterclockwise() {
    switch (pieceType) {
      case "O":
        return;

      case "I":
        if (pieceMask[2][0].filled === true) {
          pieceMask[2][0].filled = false;
          pieceMask[2][1].filled = false;
          pieceMask[2][3].filled = false;
          pieceMask[0][2].filled = true;
          pieceMask[1][2].filled = true;
          pieceMask[3][2].filled = true;
        } else {
          pieceMask[2][0].filled = true;
          pieceMask[2][1].filled = true;
          pieceMask[2][3].filled = true;
          pieceMask[0][2].filled = false;
          pieceMask[1][2].filled = false;
          pieceMask[3][2].filled = false;
        }

        if (moveOpen(0, 0) == false) {
          rotatePieceCounterclockwise();
        }

        return;

      default:
        break;
    }

    var tempMask = new Array(4);

    for (var _i4 = 0; _i4 < 4; _i4++) {
      tempMask[_i4] = new Array(4);

      for (var _j3 = 0; _j3 < 4; _j3++) {
        tempMask[_i4][_j3] = {
          color: "#FFFFFF",
          filled: false
        };
      }
    }

    tempMask[1][1] = pieceMask[3][1];
    tempMask[1][2] = pieceMask[2][1];
    tempMask[1][3] = pieceMask[1][1];
    tempMask[2][1] = pieceMask[3][2];
    tempMask[2][2] = pieceMask[2][2];
    tempMask[2][3] = pieceMask[1][2];
    tempMask[3][1] = pieceMask[3][3];
    tempMask[3][2] = pieceMask[2][3];
    tempMask[3][3] = pieceMask[1][3];
    pieceMask = tempMask;

    if (moveOpen(0, 0) == false) {
      rotatePieceClockwise();
    }
  } // rotates piece clockwise


  function rotatePieceClockwise() {
    switch (pieceType) {
      case "O":
        return;

      case "I":
        rotatePieceCounterclockwise();
        return;

      default:
        break;
    }

    var tempMask = new Array(4);

    for (var _i5 = 0; _i5 < 4; _i5++) {
      tempMask[_i5] = new Array(4);

      for (var _j4 = 0; _j4 < 4; _j4++) {
        tempMask[_i5][_j4] = {
          color: "#FFFFFF",
          filled: false
        };
      }
    }

    tempMask[1][1] = pieceMask[1][3];
    tempMask[1][2] = pieceMask[2][3];
    tempMask[1][3] = pieceMask[3][3];
    tempMask[2][1] = pieceMask[1][2];
    tempMask[2][2] = pieceMask[2][2];
    tempMask[2][3] = pieceMask[3][2];
    tempMask[3][1] = pieceMask[1][1];
    tempMask[3][2] = pieceMask[2][1];
    tempMask[3][3] = pieceMask[3][1];
    pieceMask = tempMask;

    if (moveOpen(0, 0) == false) {
      rotatePieceCounterclockwise();
    }
  } // sets input variable to true on press


  function keyDownHandler(e) {
    switch (e.key) {
      case "d":
        rightPressed = true;
        break;

      case "a":
        leftPressed = true;
        break;

      case "w":
        upPressed = true;
        break;

      case "s":
        downPressed = true;
        break;

      case "l":
        clockwisePressed = true;
        break;

      case "k":
        counterclockwisePressed = true;
        break;

      case " ":
        spacePressed = true;
        break;

      default:
        break;
    }
  } // returns input variables to false


  function resetKeys() {
    leftPressed = false;
    rightPressed = false;
    upPressed = false;
    downPressed = false;
    spacePressed = false;
    clockwisePressed = false;
    counterclockwisePressed = false;
  } // detects whether (x,y) is an open square


  function squareOpen(x, y) {
    if (x < 0) return false;
    if (x > tileRows) return false;
    if (y > tileColumns) return false;
    return !gameBoard[x][y].filled;
  } // detects whether current piece can move by (x,y)


  function moveOpen(x, y) {
    for (var _i6 = 0; _i6 < 4; _i6++) {
      for (var _j5 = 0; _j5 < 4; _j5++) {
        if (pieceMask[_i6][_j5].filled == true) {
          if (pieceX + _i6 + x < 0 || pieceX + _i6 + x >= tileColumns) {
            return false;
          }

          if (pieceY + _j5 + y >= tileRows) {
            return false;
          }

          if (pieceY + _j5 + y >= 0 && gameBoard[pieceX + _i6 + x][pieceY + _j5 + y].filled == true) {
            return false;
          }
        }
      }
    }

    return true;
  } // tries to move piece left


  function movePieceLeft() {
    if (moveOpen(-1, 0)) {
      pieceX--;
    }
  } // tries to move piece right


  function movePieceRight() {
    if (moveOpen(1, 0)) {
      pieceX++;
    }
  } // tries to move piece down


  function movePieceDown() {
    if (moveOpen(0, 1)) {
      pieceY++;
    } else {
      for (var _i7 = 0; _i7 < 4; _i7++) {
        for (var _j6 = 0; _j6 < 4; _j6++) {
          if (pieceMask[_i7][_j6].filled) {
            gameBoard[pieceX + _i7][pieceY + _j6].filled = true;
            gameBoard[pieceX + _i7][pieceY + _j6].color = pieceMask[_i7][_j6].color;
          }
        }
      }

      checkRows();
      newPiece();

      if (moveOpen(0, 0) == false) {
        gameOver = true;
      }
    }
  } // checks if any lines were cleared


  function checkRows() {
    var lines = 0;

    for (var y = 0; y < tileRows; y++) {
      var rowClear = true;

      for (var x = 0; x < tileColumns; x++) {
        if (gameBoard[x][y].filled == false) {
          rowClear = false;
        }
      }

      if (rowClear == true) {
        lines++;
        score += lines * 100;

        for (var _x = 0; _x < tileColumns; _x++) {
          gameBoard[_x][y].filled = false;
        }

        for (var _i8 = y; _i8 > 0; _i8--) {
          for (var _x2 = 0; _x2 < tileColumns; _x2++) {
            gameBoard[_x2][_i8].filled = gameBoard[_x2][_i8 - 1].filled;
            gameBoard[_x2][_i8].color = gameBoard[_x2][_i8 - 1].color;
          }
        }

        for (var _x3 = 0; _x3 < tileColumns; _x3++) {
          gameBoard[_x3][0].filled = false;
        }
      }
    }

    linesCleared += lines;

    if (linesCleared / 10 >= level) {
      level++;
      dropInterval = dropInterval * 3 / 4;
      globalHueModifier = Math.floor(Math.random() * 360);
      globalSaturation = Math.floor(Math.random() * 75) + 25;
      globalLightness = Math.floor(Math.random() * 30) + 40;
    }
  } // draws current board


  function drawBoard() {
    ctx.fillStyle = "#444444";
    ctx.fillRect(0, 0, w, h);
    var xStart;
    var yStart;

    for (var x = 0; x < tileColumns; x++) {
      for (var y = 0; y < tileRows; y++) {
        xStart = x * tileSpan + tileStartX;
        yStart = y * tileSpan + tileStartY;

        if (gameBoard[x][y].filled === true) {
          ctx.fillStyle = gameBoard[x][y].color;
        } else {
          ctx.fillStyle = "#000000";
        }

        ctx.fillRect(xStart, yStart, tileWidth, tileWidth);
      }
    }
  } // draws current piece


  function drawPiece() {
    for (var _i9 = 0; _i9 < 4; _i9++) {
      for (var _j7 = 0; _j7 < 4; _j7++) {
        var xStart = (pieceX + _i9) * tileSpan + tileStartX;
        var yStart = (pieceY + _j7) * tileSpan + tileStartY;

        if (pieceMask[_i9][_j7].filled === true) {
          ctx.fillStyle = pieceMask[_i9][_j7].color;
          ctx.fillRect(xStart, yStart, tileWidth, tileWidth);
        }
      }
    }

    ctx.fillStyle = "#444444";
    ctx.fillRect(0, 0, w, tileStartY);
  }

  function drawNextPiece() {
    switch (nextPieceType) {
      case "I":
        ctx.fillStyle = createHSL("I");
        ctx.fillRect(245, 75, tileWidth, tileWidth);
        ctx.fillRect(265, 75, tileWidth, tileWidth);
        ctx.fillRect(285, 75, tileWidth, tileWidth);
        ctx.fillRect(305, 75, tileWidth, tileWidth);
        break;

      case "J":
        ctx.fillStyle = createHSL("J");
        ctx.fillRect(255, 65, tileWidth, tileWidth);
        ctx.fillRect(275, 65, tileWidth, tileWidth);
        ctx.fillRect(295, 65, tileWidth, tileWidth);
        ctx.fillRect(295, 85, tileWidth, tileWidth);
        break;

      case "L":
        ctx.fillStyle = createHSL("L");
        ctx.fillRect(255, 65, tileWidth, tileWidth);
        ctx.fillRect(275, 65, tileWidth, tileWidth);
        ctx.fillRect(295, 65, tileWidth, tileWidth);
        ctx.fillRect(255, 85, tileWidth, tileWidth);
        break;

      case "O":
        ctx.fillStyle = createHSL("O");
        ctx.fillRect(265, 65, tileWidth, tileWidth);
        ctx.fillRect(265, 85, tileWidth, tileWidth);
        ctx.fillRect(285, 65, tileWidth, tileWidth);
        ctx.fillRect(285, 85, tileWidth, tileWidth);
        break;

      case "S":
        ctx.fillStyle = createHSL("S");
        ctx.fillRect(255, 85, tileWidth, tileWidth);
        ctx.fillRect(275, 85, tileWidth, tileWidth);
        ctx.fillRect(275, 65, tileWidth, tileWidth);
        ctx.fillRect(295, 65, tileWidth, tileWidth);
        break;

      case "T":
        ctx.fillStyle = createHSL("T");
        ctx.fillRect(255, 65, tileWidth, tileWidth);
        ctx.fillRect(275, 65, tileWidth, tileWidth);
        ctx.fillRect(295, 65, tileWidth, tileWidth);
        ctx.fillRect(275, 85, tileWidth, tileWidth);
        break;

      case "Z":
        ctx.fillStyle = createHSL("Z");
        ctx.fillRect(255, 65, tileWidth, tileWidth);
        ctx.fillRect(275, 65, tileWidth, tileWidth);
        ctx.fillRect(275, 85, tileWidth, tileWidth);
        ctx.fillRect(295, 85, tileWidth, tileWidth);
        break;
    }
  }

  function drawHUD() {
    ctx.strokeStyle = "black";
    ctx.font = "20px Courier";
    ctx.textAlign = "center";
    ctx.strokeText("NEXT", 285, 40);
    ctx.strokeText("SCORE", 285, 140);
    ctx.strokeText(score, 285, 160);
    ctx.strokeText("LEVEL", 285, 200);
    ctx.strokeText(level, 285, 220);
    ctx.strokeText("LINES", 285, 260);
    ctx.strokeText(linesCleared, 285, 280);
    ctx.fillStyle = "black";
    ctx.fillRect(240, 50, 90, 70);
    drawNextPiece();
  }

  function drawGameOver() {
    ctx.fillStyle = "black";
    ctx.strokeStyle = "#444444";
    ctx.fillRect(81, 91, 188, 80);
    ctx.strokeRect(81, 91, 188, 80);
    ctx.strokeStyle = "#444444";
    ctx.font = "20px Courier";
    ctx.textAlign = "center";
    ctx.strokeText("GAME OVER", 175, 116);
    ctx.strokeText("Space to retry", 175, 156);
  } // main game loop


  function loop(t) {
    requestAnimationFrame(loop);

    if (gameOver == false) {
      drawBoard();
      drawPiece();
      drawHUD();
      if (clockwisePressed) rotatePieceClockwise();
      if (counterclockwisePressed) rotatePieceCounterclockwise();

      if (spacePressed) {
        while (moveOpen(0, 1)) {
          movePieceDown();
        }

        movePieceDown();
      }

      if (leftPressed) movePieceLeft();
      if (rightPressed) movePieceRight();

      if (currentInterval >= dropInterval || downPressed) {
        movePieceDown();
        currentInterval = 0;
      }

      currentInterval++;
    } else {
      drawBoard();
      drawPiece();
      drawHUD();
      drawGameOver();

      if (spacePressed) {
        gameOver = false;
        initializeBoard();
        newPiece();
        level = 1;
        linesCleared = 0;
        score = 0;
        dropInterval = 120;
        currentInterval = 0;
      }
    }

    resetKeys();
  }

  randomPiece();
  randomPiece();
  initializeBoard();
  requestAnimationFrame(loop);
}
},{}],"content/projects/conway.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.conway = conway;

function conway() {
  var content = "";
  content += "\n    <br>\n    <div id=\"board\">\n        <canvas width=\"500\" height=\"500\"></canvas>\n    </div>\n\n    <p>\n        Conway's Game of Life was a project that I wanted to create early for a few reasons. First, I had discovered the canvas element \n        and wanted to build something with it. Since the Game of Life has simple rules, it seemed like an ideal candidate.\n    </p>\n\n    <p>\n        For the uninitiated, the Game of life is a simulation that's run on a grid. Each element in the grid can either be populated or \n        unpopulated. In the above, the populated squares are yellow, with the unpopulated being gray.\n    </p>\n\n    <p>\n        Each iteration, every square in the grid is checked. Depending on how many orthogonically adjacent squares are also populated, the \n        square can change state. Any live cell with exactly two or three living neighbors will live to the next generation. Those with more \n        or less do not. Likewise, any non-living cell with exactly three living neighbors will be \"born\" and become populated.\n    </p>\n\n    <p>\n        Although these rules are simple, they can create a variety of shapes. Some end up static, some form repetitive patterns, and some \n        explode and retract as if they're organic.\n    </p>\n\n    <p>\n        The original plan was to take mouse input to turn cells either on or off, but that wasn't implemented. However, a random configuration \n        of cells is set as alive each time the function is loaded, which allows a variety of initial states.\n    </p>\n\n    <br><br>\n    ";
  document.getElementsByClassName("content")[0].innerHTML = content;
  var canvas = document.querySelector("#board canvas");
  var ctx = canvas.getContext("2d");
  var w = canvas.width,
      h = canvas.height; // board width in tiles

  var tileSpan = 100;
  var tileMargin = 5;
  var gameBoard = new Array(tileSpan);
  var computeBoard = new Array(tileSpan);
  var running = true;
  var cyclesBeforeUpdate = 6;
  var currentCycles = 0;
  var mousePressed = false;

  for (var x = 0; x < tileSpan; x++) {
    gameBoard[x] = new Array(tileSpan);
    computeBoard[x] = new Array(tileSpan);

    for (var y = 0; y < tileSpan; y++) {
      gameBoard[x][y] = false;
      computeBoard[x][y] = false;
      if (Math.random() < .05) gameBoard[x][y] = true;
    }
  }

  function drawBoard() {
    ctx.strokeStyle = "black";

    for (var _x = 0; _x < tileSpan; _x++) {
      for (var _y = 0; _y < tileSpan; _y++) {
        if (gameBoard[_x][_y] == false) {
          ctx.fillStyle = "#444";
        } else {
          ctx.fillStyle = "#FD0";
        }

        var xStart = _x * tileMargin;
        var yStart = _y * tileMargin;
        ctx.fillRect(xStart, yStart, tileMargin, tileMargin);
      }
    }
  }

  function updateBoard() {
    for (var _x2 = 0; _x2 < tileSpan; _x2++) {
      for (var _y2 = 0; _y2 < tileSpan; _y2++) {
        var touching = 0;

        if (_x2 > 0) {
          if (_y2 > 0) {
            if (gameBoard[_x2 - 1][_y2 - 1] == true) touching++;
          }

          if (gameBoard[_x2 - 1][_y2] == true) touching++;

          if (_y2 < tileSpan - 1) {
            if (gameBoard[_x2 - 1][_y2 + 1] == true) touching++;
          }
        }

        if (_y2 > 0) {
          if (gameBoard[_x2][_y2 - 1] == true) touching++;
        }

        if (_y2 < tileSpan - 1) {
          if (gameBoard[_x2][_y2 + 1] == true) touching++;
        }

        if (_x2 < tileSpan - 1) {
          if (_y2 > 0) {
            if (gameBoard[_x2 + 1][_y2 - 1] == true) touching++;
          }

          if (gameBoard[_x2 + 1][_y2] == true) touching++;

          if (_y2 < tileSpan - 1) {
            if (gameBoard[_x2 + 1][_y2 + 1] == true) touching++;
          }
        }

        computeBoard[_x2][_y2] = false;

        if (gameBoard[_x2][_y2] == true) {
          if (touching == 2 || touching == 3) {
            computeBoard[_x2][_y2] = true;
          }
        }

        if (gameBoard[_x2][_y2] == false && touching == 3) {
          computeBoard[_x2][_y2] = true;
        }
      }
    }

    for (var _x3 = 0; _x3 < tileSpan; _x3++) {
      for (var _y3 = 0; _y3 < tileSpan; _y3++) {
        gameBoard[_x3][_y3] = computeBoard[_x3][_y3];
      }
    }
  }

  function loop(evt) {
    requestAnimationFrame(loop);
    drawBoard();

    if (running) {
      if (currentCycles >= cyclesBeforeUpdate) {
        updateBoard();
        currentCycles = 0;
      }

      currentCycles++;
    } else {
      if (mousePressed == true) {}
    }
  }

  loop();
}
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _template = require("./components/template.js");

var _navigation = require("./components/navigation.js");

var _home = require("./content/home.js");

var _bio = require("./content/bio.js");

var _projects = require("./content/projects.js");

var _blog = require("./content/blog.js");

var _abstraction = require("./content/blog/abstraction.js");

var _elementary = require("./content/blog/elementary.js");

var _boolean = require("./content/blog/boolean.js");

var _representing = require("./content/blog/representing.js");

var _decisions = require("./content/blog/decisions.js");

var _contact = require("./content/contact.js");

var _alu = require("./content/projects/alu.js");

var _tetris = require("./content/projects/tetris.js");

var _conway = require("./content/projects/conway.js");

console.log("dependency");
var state = {
  page: "home",
  subpage: "none"
};

function render(state) {
  (0, _template.addTemplate)();
  (0, _navigation.addNavigation)(state);

  switch (state.page) {
    case "home":
      (0, _home.home)();
      break;

    case "bio":
      (0, _bio.bio)();
      break;

    case "projects":
      switch (state.subpage) {
        case "alu":
          (0, _alu.alu)();
          break;

        case "tetris":
          (0, _tetris.tetris)();
          break;

        case "conway":
          (0, _conway.conway)();
          break;

        default:
          (0, _projects.projects)();
          break;
      }

      break;

    case "blog":
      switch (state.subpage) {
        case "abstraction":
          (0, _abstraction.abstraction)();
          break;

        case "elementary":
          (0, _elementary.elementary)();
          break;

        case "boolean":
          (0, _boolean.boolean)();
          break;

        case "representing":
          (0, _representing.representing)();
          break;

        case "decisions":
          (0, _decisions.decisions)();
          break;

        default:
          (0, _blog.blog)();
          break;
      }

      break;

    case "contact":
      (0, _contact.contact)();
      break;
  }

  document.getElementById("link-home").addEventListener("click", function () {
    window.event.preventDefault();
    state.page = "home";
    state.subpage = "none";
    render(state);
  });
  document.getElementById("link-bio").addEventListener("click", function () {
    window.event.preventDefault();
    state.page = "bio";
    state.subpage = "none";
    render(state);
  });
  document.getElementById("link-projects").addEventListener("click", function () {
    window.event.preventDefault();
    state.page = "projects";
    state.subpage = "none";
    render(state);
  });

  if (state.page == "projects" && state.subpage == "none") {
    document.getElementById("alu").addEventListener("click", function () {
      window.event.preventDefault();
      state.page = "projects";
      state.subpage = "alu";
      render(state);
    });
    document.getElementById("tetris").addEventListener("click", function () {
      window.event.preventDefault();
      state.page = "projects";
      state.subpage = "tetris";
      render(state);
    });
    document.getElementById("conway").addEventListener("click", function () {
      window.event.preventDefault();
      state.page = "projects";
      state.subpage = "conway";
      render(state);
    });
  }

  document.getElementById("link-blog").addEventListener("click", function () {
    window.event.preventDefault();
    state.page = "blog";
    state.subpage = "none";
    render(state);
  });

  if (state.page == "blog" && state.subpage == "none") {
    document.getElementById("abstraction").addEventListener("click", function () {
      window.event.preventDefault();
      state.page = "blog";
      state.subpage = "abstraction";
      render(state);
    });
    document.getElementById("elementary").addEventListener("click", function () {
      window.event.preventDefault();
      state.page = "blog";
      state.subpage = "elementary";
      render(state);
    });
    document.getElementById("boolean").addEventListener("click", function () {
      window.event.preventDefault();
      state.page = "blog";
      state.subpage = "boolean";
      render(state);
    });
    document.getElementById("representing").addEventListener("click", function () {
      window.event.preventDefault();
      state.page = "blog";
      state.subpage = "representing";
      render(state);
    });
    document.getElementById("decisions").addEventListener("click", function () {
      window.event.preventDefault();
      state.page = "blog";
      state.subpage = "decisions";
      render(state);
    });
  }

  document.getElementById("link-contact").addEventListener("click", function () {
    window.event.preventDefault();
    state.page = "contact";
    state.subpage = "none";
    render(state);
  });
  (0, _template.putFooter)();
}

;
render(state);
},{"./components/template.js":"components/template.js","./components/navigation.js":"components/navigation.js","./content/home.js":"content/home.js","./content/bio.js":"content/bio.js","./content/projects.js":"content/projects.js","./content/blog.js":"content/blog.js","./content/blog/abstraction.js":"content/blog/abstraction.js","./content/blog/elementary.js":"content/blog/elementary.js","./content/blog/boolean.js":"content/blog/boolean.js","./content/blog/representing.js":"content/blog/representing.js","./content/blog/decisions.js":"content/blog/decisions.js","./content/contact.js":"content/contact.js","./content/projects/alu.js":"content/projects/alu.js","./content/projects/tetris.js":"content/projects/tetris.js","./content/projects/conway.js":"content/projects/conway.js"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "43399" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map