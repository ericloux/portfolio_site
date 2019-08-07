function abstraction() {
    let content = "";

    content += `
    <h3>
        Abstraction and Computer Science
    </h3>

    If you ask, "How does a computer work?" then the majority of the population will likely tell you they don't know. And surely, just looking at 
     computer, it seems like a box that works on magic alone. Sure, most can tell you that it does something with electricity, but what is that 
     something, and how does it turn that electricity into every webpage and program that you've ever seen?<br><br>
    
    The answer, of course, is complex. Rather than thinking of the process as one concrete whole, it's through abstraction of each level that was 
    can examine how we go from "this electron jiggles" to sending a text message to your friends. There are plenty of levels, which is one of the 
    reasons that understanding of what happens in a computer is lost, even to many people who program them on a daily basis. Each layer is vast 
    enough to be an entire field of study. Although I hardly consider myself an expert, the scope of this article is to give a brief examination 
    into each of those levels, as well as how they work together to form the modern computer.<br><br>
    
    Given that there are each of these many levels, what exactly are they? I will give a brief overview before going into more detail, starting 
    from the bottom up. First, we have electricity, which can or cannot be flowing through a conductor at any moment. A switch allows this flow 
    to be interrupted or resumed. Using electricity to control switches, we can begin to create basic logical operations based on the flow of 
    electricity. By smartly wiring these logical operations together, we can build more and more complex operations, eventually being able to 
    simulate math and decision making.<br><br>
    
    By adding a clock that controls one of the aforementioned switches, we can add a timing element to the system we are constructing. This 
    allows us to create a memory cell, which can remain on or off until told to change. Chaining these memory cells together, we get a construct 
    known as a register, which can likewise be combined into a block of memory. The clock also allows us to perform our math and logic operations 
    in steps. It's at this point that we are finally able to create a rudimentary computer program!<br><br>
    
    Input and output are also possible at this point. Think about a digital clock that has seven lines, each of which can be on or off. When all 
    seven are on, an 8 appears. When you remove the right top line, you have a six. So on and so forth, you end up being able to draw any number. 
    If instead of having seven lines you have a grid of six by eight boxes, then in addition to numbers, you can draw letters and even rudimentary 
    pictures as well. Behind these boxes are registers - those groups of memory cells - that will tell which of the boxes (known as pixels) should 
    be on, and which should be off. When new information is put into the registers then the pixels change state and a new image is drawn.<br><br>
    
    Managing input is similar to output. When you press a key, it closes a circuit, and a register with information about which keys are being 
    pressed updated to show that the key was pressed. The computer then takes this input and uses it as input into its calculations.For example, 
    if you have a block of registers, then the results of the input may be stored in a sequence of registers. A counter tells the computer which 
    register is the next to write to. When you type 8, then the first register gets set to the binary representation of eight, and the counter 
    increments so that the second register will store the next input value. In addition to numbers, the input register could have mathmatical 
    operands and other keys, such as keys to compute what was entered, clear all the data that was inputted, clear the last key or whole number 
    entered, add parenthesies, or a number of other functions. I've just described the modern calculator!<br><br>
    
    Now that we can program our computer, we can write a program that makes it easier for humans to interpret a program. The lowest level of 
    these programs is called assembly language, which simply takes commands and turns it into the on and off signals that can be put through 
    the binary logic gates. Now, we can write a program that tells which operations to perform on which blocks of memory without setting the 
    state of each individual memory cell. Using assembly language, we can likewise write another language on top that allows the programmer to 
    write code that makes even more sense to a human. This program is known as a compiler.<br><br>
    
    From here, the path is wide open. You can write a language that makes it even easier for a human to interact with (such as JavaScript or 
    Python). You can update your output decvice so that instead of each pixel only showing on or off, you can add colors as well. Your input 
    device can have keys added to write other characters, or to directly open programs. You can chain more blocks of memory together, allowing 
    your math unit to process larger numbers or fractions. <br><br>
    
    One major program that is a necessity is an operating system. Using this, a number of functions that multiple functions might use can be 
    bundled together. Instead of telling the computer to manipulate individual pixels, you could tell it to draw shapes. Instead of telling it 
    to store items in specific spots in memory, the operating system can find an open spot and remember which locations are associated with what 
    program was saved. <br><br>
    
    Although the process is simplified, this is an outline of how a computer "does its magic" with electricity. There is so much going on at 
    each different level that one could write a book describing what happens - and indeed books have been written on the subject. Although I 
    intend to continue writing more on many of these levels and implementing several of the items described here, I would be remiss if I didn't 
    recommend reading "The Elements of Computer Science" by Noam Nisan and Shimon Schocken. Their book has done wonders for my understanding in 
    the internal workings of a computer, and I highly suggest that anyone who wants a more technical understanding of these workings read their 
    writings. Said book also invites readers to create their own computer system by modelling low-level hardware, then using those models to 
    create bigger and better tools, eventually ending with a functioning computer.<br><br>
    `;

    document.getElementsByClassName("content")[0].innerHTML = content;
}

export {abstraction};