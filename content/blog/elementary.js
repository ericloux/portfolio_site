function elementary() {
    console.log("test");
    let content = "";

    content += `
    <h3>
    Elementary Logic Gates
    </h3>


    When a circuit is complete, electricity flows through it. When a circuit is broken, electricity does not. While this principle seems elementary, 
    the capacity for complexity increases dramatically when the circuit is allowed to connect and beeak itself. The vacuum tube and transistor allowed 
    such circuits to become commercially viable, leading to our current Age of Information. It's at the lowest level that electrity is manipulated into 
    logical abstractions, and the scope of this article is to examine what happens at those lowest of levels.<br><br>

    A switch is the devide that can make or break the flow of a material. In computers, this usually refers to electrons moving through a conductor, 
    but there are other examples, such as a valve closing and not allowing water to flow. The quintessential electrical example, though, is light 
    switches. When the switch is open, the circuit is broken, and electricity cannot flow. When the switch is closed, the electricity is allowed to 
    flow through the circuit. Part of that circuit is a light bulb, where the flowing electrons are converted into visible light.<br><br>

    Of course, there are more exciting ways to combine switches and lights than just one circuit. However, another electrical component must be 
    introduced - the resistor. A resistor makes it harder for electrons to travel on a circuit. It's a bit like a wall that the electrons have to 
    climb over to continue on the circuit. On our light switch circuit, adding a resistor would have a negligable effect. The light may be a bit 
    dimmer, but it wouldn't hamper the flow of electricity. The electrons would pile up at the wall and eventually flow over it, like the zombies 
    in World War Z.<br><br>

    However, what if the path branches? Imagine the electrons have two choices. On one path, they have a clear shot forward with no obstructions.
     On the other, they have to push through a resistor. In this case, the electrons will ignore the more difficult path and push on through the 
     other. If there are light bulbs on each side of the branch, only the bulb on the path with no resistor will light up, since all the electrons 
     are moving down that path.<br><br>

    Continuing our thought experiment, what happens if all of a sudden the path without the resistor has a switch? When the switch is closed and 
    the circuit is complete, the easiest path is through the switch and away from the resistor. When the switch is opened, however, and the path 
    without a resistor is a complete dead-end, then the electrons instead go through the resistor and down the other path. If that switch is 
    controlled by electricity, then we have a logic gate.<br><br>

    Consider that we have two paths leading into our logic gate, and two leading out. One of the paths in is the power supply. We'll call this 
    Power. In our circuit, electrons are always coming through Power. Thus, we say that it is always "on," as opposed to one with no flow that is 
    "off." The other path leading in leads to power our switch, so we will call it Switch. When it's on, the switch closes, and the electrons pass 
    through the easier open road. When Switch is off, then the switch opens, and the electrons move out the other, harder route with the resistor. 
    We will call these output paths Easy and Hard. Whether they are on or off depends on whether Switch is on or off. Here is a table showing the 
    various sates of Power, Switch, Easy and Hard:<br><br>

    <table>
        <thead>
            <tr>
                <th>Power</th>	
                <th>Switch</th>	
                <th>Easy</th>	
                <th>Hard</th>
            </tr>
        </thead>
        <tr>
            <td>On</td>		
            <td>On</td>		
            <td>On</td>		
            <td>Off</td>
        </tr>
        <tr>
            <td>On</td>		
            <td>Off</td>		
            <td>Off</td>		
            <td>On</td>
        </tr>
    </table><br>

    As you can see, the value of Power is always on, and the value of Easy is always the same as Switch. However, Switch and Hard always have the 
    opposite state. We can say that Output "Hard" is not input "Switch." This is known as an inverter or "not gate," and is one of the simplest 
    logic gates.<br><br>

    Let's add another switch to our circuit. This time, the switch will be after the first switch, Switch. Since there are multiple switches, 
    calling the input "Switch" is confusing, so we will refer to it as "Input 1" and the second switch we are adding this time will be "Input 2." 
    For consistency, we'll also rename our outputs from "Easy" and "Hard" to "Output 1" and "Output 2." Our whole circuit consists of the following. 
    At the fork, the electrons can either move down one path through Input 1's switch, through Input 2's switch, and out Output 1. Alternatively, 
    they can move through the resistor and out Output 2. Naturally, they want to move out Output 1 unless one of the switches is off (open) which 
    means that they can't make it and will take the harder road though Output 2. So, if both of the switches are on, the electrons will flow through 
    Output 1. If either is closed, they will go the other direction. Here is another table showing this relationship:<br><br>

    <table>
        <thead>
            <tr>
                <th>Input 1</th>	
                <th>Input 2</th>	
                <th>Output 1</th>	
                <th>Output 2</th>	
            </tr>
        </thead>
        <tr>
            <td>On</td>		
            <td>On</td>		
            <td>On</td>		
            <td>Off</td>		
        </tr>
        <tr>
            <td>On</td>		
            <td>Off</td>		
            <td>Off</td>		
            <td>On</td>			
        </tr>
        <tr>
            <td>Off</td>		
            <td>On</td>		
            <td>Off</td>		
            <td>On</td>	
        </tr>
        <tr>
            <td>Off</td>		
            <td>Off</td>		
            <td>Off</td>		
            <td>On</td>
        </tr>
    <table><br>

    To describe this relationship in English, Output 1 is on if Input 1 and Input 2 are on. This creates an "and gate." Likewise, Output 2 is on 
    if Input 1 and Input 2 are not on. Thus it is a "not and" gate, which is usually shortened to "nand."<br><br>

    If you're the inquisitive sort, then you may wonder, "What happens if we connect the output from one gate to the input from another?" The answer 
    is that you can create gates that have any relationship with the inputs. I've presented three here: not, and, and nand. With these three logic 
    gates, we can make a host of other logic gates. We can combine them so that there are more than two inputs and create chips that can make choices, 
    or start doing math. These operations found the basis for the whole field of computer science. Looking at the interactions between these more 
    complex gates is beyond the scope of this article, but will be examined in subsequent entries.<br><br>
    `;

    document.getElementsByClassName("content")[0].innerHTML = content;
    console.log(document.getElementsByClassName("content")[0]);
}

export {elementary};