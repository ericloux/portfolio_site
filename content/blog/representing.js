function representing() {
    let content = "";

    content += `
    <h3>
    Representing Binary Logic
    </h3>

    As we have been looking directly at the electrical circuits that make up these logic gates. However, as we deeper into how these logic gates 
    combine, it's useful to refer to them from more of a logical standpoint rather than practical.<br><br>

    Up to this point, we've been referring to the operations of these logic gates in specific ways that represent what is happening at the 
    electrical level. If a wire leading into or out of a gate, then we've said it's "on," or if not, then it's "off." While "on" and "off" show 
    what is going on with the wires, typically other symbols are used in computer science. The main alternative used in higher level programming 
    is "true/false" rather than "on/off," although they mean the same thing. Another choice is to use numbers. A one represents on or true, and 
    a zero represents off or false. Using numbers also allows us to be able to perform math on the inputs. Similarly, an input is also called an 
    "operand."<br><br>

    We also have different names for logic gates. Since we are representing these systems mathematically and logically, we can also call them an 
    operation or a function. This also means we can use function notation to describe their relationships as well in order to more accurately show 
    their relationship. For example, instead of saying "Input 1 and Input 2" we can instead say and(Input 1, Input 2). These are again how similar 
    functions are represented in high-level programming languages. However, since these basic operations are so prevalent, there are shorthands for 
    some of these simple, common functions. For example, "and" is represented by "&&," e.g. "Input 1 && Input 2." Likewise, or is represented by "||" 
    and "!" means not when preceding an operand. For example, !Input 1 would mean "not Input 1."<br><br>

    There are many other shortcuts as well. Instead of calling the inputs "Input 1" and "Input 2," we can call them a variety of other names. P and 
    Q are used in logic. In fact, there are many other symbols that are used in the field of logic to represent many of these ideas in a different way. 
    Generally, though, we will name the inputs based on what their actual function is. If we're simply looking at creating logic gates that describe 
    simple functions, we'll simply call them "In1," "In2," and so forth as needed.<br><br>

    As we get further into examining the interactions of these chips and building more and more complex functionality out of them, having language to 
    describe these functions that is both simpler and clearer helps in ease of communicating the ideas that they are used to build. Moving forward, 
    the terms here will be used interchangably.<br><br>
    `;

    document.getElementsByClassName("content")[0].innerHTML = content;
}

export {representing};