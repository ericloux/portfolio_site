function boolean() {
    let content = "";

    content += `
    <h3>
    Boolean Functions
    </h3>

    Previously, we had examined how switches and resistors could turn a basic circuit into a logic gate. We also built logic gates that represented 
    logical not, and, and nand. Naturally, at this level, there is not much practical application. However, by continuing to build on the previous 
    concepts, we can continue to add functionality, eventually building chips that can solve more complex problems.<br><br>
    
    At this point, we have built a few gates. The not gate took one input and output the opposite: if the input was on, the output was off, and 
    vice-versa. The and gate outputs on only if both of the input gates are true. Likewise, the nand gate is the opposite, outputting off only if 
    both of the inputs are true. In addition to these gates, how many more exist, and can we build them?<br><br>
    
    The number of unique gates that can be created is dependent on the number of inputs. For example, a one-input gate has two states that can feed 
    into it, on or off. For those two states, there are four sets out outputs that can result: (on, on), (on, off), (off, on), and (off, off). If we 
    think of the possible input states as (on, off), then we can chart out each of the possible relationships that can result from this input 
    state:<br><br>
    
    <table>
        <thead>
            <tr>
                <th>Input</th>	
                <th>Output 1</th>	
                <th>Output 2</th>	
                <th>Output 3</th>	
                <th>Output 4</th>
            </tr>
        </thead>
        <tr>
            <td>on</td>		
            <td>on</td>		
            <td>on</td>		
            <td>off</td>		
            <td>off</td>
        </tr>
        <tr>
            <td>off</td>		
            <td>on</td>		
            <td>off</td>		
            <td>on</td>		
            <td>off</td>
        </tr>
    </table><br>
    
    If you compare the input to Output 3, then you see it's the same as the not gate we previously built. Looking at the other gates built here are 
    also not particularly exciting. Output 1 is always on, independent of the input. Similarly, Output 4 is always off. The implementation of them 
    is simple - the former simply represents any closed circuit, and the other, any open circuit. Lastly, Output 2 is exactly the same as the input. 
    Most of the gates, excluding not, are not particularly userful.<br><br>
    
    Now, what happens if we have two inputs? This is where things get interesting, but also more complex. Instead of having the input only be on or 
    off as with a one-input gate, they can now be any of the sets (on, on), (on, off), (off, on), or (off, off). Each of these pairs of inputs can 
    have two choices for output. This means that there are 2^4 different potential output sets. Compare this to the single-input gate, where there 
    are 2^2 choices. With no inputs, the output can either be on or off, showing 2^1. Therefore, with x input gates, there are 2^(2^x-1) possible 
    unique gates that can be created. That means with three inputs, there are 256 different functions. Examining each of those is unnecessary, but 
    there are a few important three-input logic gates that we will consider at a future point.<br><br>
    
    We can create tables showing the potential outputs given the inputs. Such a table is called a truth table. We have done this above for all single 
    input gate combinations, but we can do this for two-input gates as well. Creating a table with all sixteen is a bit extreme, so here are the gates 
    we have already explored (including the two input versions of the single-input gates). Note that we are calling each output column by a name that 
    describes its function, rather than an arbitrary number:<br><br>
    
    <table>
        <thead>
            <tr>
                <th>Input 1</th>	
                <th>Input 2</th>	
                <th>Always</th>	
                <th>Never</th>	
                <th>Not 1</th>	
                <th>Not 2</th>	
                <th>And</th>	
                <th>Nand</th>
            </tr>
        </thead>
        <tr>
            <td>on</td>		
            <td>on</td>		
            <td>on</td>		
            <td>off</td>		
            <td>off</td>		
            <td>off</td>		
            <td>on</td>		
            <td>off</td>
        </tr>
        <tr>
            <td>on</td>		
            <td>off</td>		
            <td>on</td>		
            <td>off</td>		
            <td>off</td>		
            <td>on</td>		
            <td>off</td>		
            <td>on</td>
        </tr>
        <tr>
            <td>off</td>		
            <td>on</td>		
            <td>on</td>		
            <td>off</td>		
            <td>on</td>		
            <td>off</td>		
            <td>off</td>		
            <td>on</td>
        </tr>
        <tr>
            <td>off</td>		
            <td>off</td>		
            <td>on</td>		
            <td>off</td>		
            <td>on</td>		
            <td>on</td>		
            <td>off</td>		
            <td>on</td>
        </tr>
    </table
    
    Note that there are two functions for not - one that returns the opposite of input 1 and the other with input 2. Of course, we also have the 
    gates that always return true and false (which are named Always and Never respectively), and the And and Nand gates we had previously examined. 
    Given that there are sixteen in total, what are the others? Two are outputs that match each of the inputs - that is, if Input 1 is on, then the 
    output will be on regardless of Input 2. A similar gate can exist that matches Input 2 and ignores Input 1. This brings the total to 8, but what 
    about the others?<br><br>
    
    Here is a truth table showing the remaining eight gates. Here is a truth table showing their values and names:<br><br>
    
    <table>
        <thead>
            <tr>
                <th>Input 1</th>	
                <th>Input 2</th>	
                <th>Only 1</th>	
                <th>Only 2</th>	
                <th>Xor</th>	
                <th>Or</th>	
                <th>Nor</th>	
                <th>Xnor</th>
                <th>1 or not 2</th>
                <th>2 or not 1</th>
            </tr>
        </thead>	
        <tr>	
            <td>on</td>	
            <td>on</td>	
            <td>off</td>	
            <td>off</td>	
            <td>off</td>	
            <td>on</td>	
            <td>off</td>	
            <td>on</td>	
            <td>on</td>	
            <td>on</td>
        </tr>
        <tr>
            <td>on</td>	
            <td>off</td>	
            <td>on</td>	
            <td>off</td>	
            <td>on</td>	
            <td>on</td>	
            <td>off</td>	
            <td>off</td>	
            <td>on</td>	
            <td>off</td>
        </tr>
        <tr>	
            <td>off</td>	
            <td>on</td>	
            <td>off</td>	
            <td>on</td>	
            <td>on</td>	
            <td>on</td>	
            <td>off</td>	
            <td>off</td>	
            <td>off</td>	
            <td>on</td>
        </tr>
        <tr>
            <td>off</td>	
            <td>off</td>	
            <td>off</td>	
            <td>off</td>	
            <td>off</td>	
            <td>off</td>	
            <td>on</td>	
            <td>on</td>	
            <td>on</td>	
            <td>on</td>
        <tr>
    </table>	
    
    Now that we have the full set, we can begin examining how to build them. Since we have already shown how to use the gates in the first set, we 
    can chain those together to create even more gates. We will see examples as we construct this second set, but there are a couple of ideas that 
    may not be intuitive that allow for construction of these more complex gates.<br><br>
    
    First, the output of one gate can be fed into the input of another. For example, if you put two inputs through an And gate, and then put the 
    output of the And gate through a Not gate, then you end up with a Nand gate. Of course, the way we described to build a Nand gate previously 
    is more straightforward, but it illustrates the concept. Second, the input for one gate can split and simultaneously fed into another gate. 
    If we take one input and feed it into both inputs for a Nand gate, for example, then we end up with a Not gate. Again, the earlier method is 
    easier. Note also that both inputs don't necessarily need to feed into the same gate.<br><br>
    
    With that, let's examine each of the gates and see how we can construct them.<br><br>
    
    If we feed one of the inputs into a Not gate, then feed the result of that input into an And gate with the other input, then the result is an 
    Only gate. To demonstrate that, here is another truth table that shows the values at each step of the way:<br><br>
    
    <table>
        <thead>
            <tr>
                <th>Input 1</th>	
                <th>Input 2</th>	
                <th>Not 1</th>	
                <th>2 And Not 1</th>	
            </tr>
        </thead>
        <tr>
            <td>on</td>			
            <td>on</td>		
            <td>off</td>		
            <td>off</td>
        </tr>
        <tr>
            <td>on</td>		
            <td>off</td>		
            <td>off</td>		
            <td>off</td>
        </tr>
        <tr>
            <td>off</td>		
            <td>on</td>		
            <td>on</td>		
            <td>on</td>
        </tr>
        <tr>
            <td>off</td>		
            <td>off</td>		
            <td>on</td>		
            <td>off</td>
        </tr>
    </table><br>
    
    Note that this is identical to the Only 2 gate described above. In fact, another name for this gate is the And Not gate. Also, even though 
    there are two inputs and one output, we have four columns in our truth table. This is so we can see the effect of our operations at an 
    intermediate point - in this case, after Not has been applied to Input 1. Truth tables are a great debugging tool. If you write out the inputs 
    and the expected outputs, then perform intermediate calculations, then you can start to narrow down the operations needed to end at a specific 
    output. This works for numbers as well, although in that setting, it is called a function table rather than a truth table.<br><br>
    
    Of course, if we take our Only logic gate and flip the inputs, running Input 2 through the Not gate before combining it with Input 1 in an And 
    gate, then we get the other version of the Only gate, which is on only if Input 1 is on. On top of that, if we run the output of one of the Only 
    gates through a Not gate, then we get the 1 Or Not 2 and 2 Or Not 1 gates, depending on which version of the Only gate we started with. As you 
    can see, adding these gates together can quickly provide a variety of new functions quickly.<br><br>
    
    Having implemented half the gates, the only four remaining all appear very similar: Or, Nor, Xor, and Xnor. "Or" means exactly what you think 
    it does - if Input 1 or Input 2 is on, then the output is on as well. If both are on, then it is true as well. Each of the other three gates 
    have some combination of N and X in front of the or. The N stands Not, much as it did with Nand. Of course, "nor" is also a word in English 
    that means exactly that - it is only on if neither input is on. The X means exclusive. In the case of Xor, it will be on only if exactly one 
    of the inputs is on. With Xnor, it will be true only if the inputs are equal - that is, they are both on, or both off. With this understanding, 
    we can move forward with seeing how they might be implemented.<br><br>
    
    To make the Only gates, we flipped one of the inputs with a Not gate, then ran both through an And gate. So what happens if we invert them both 
    before running them through the And gate? We can make a truth table to easily see the result:<br><br>
    
    <table>
        <thead>
            <tr>
                <th>Input 1</th>	
                <th>Input 2</th>	
                <th>Not 1</th>	
                <th>Not 2</th>	
                <th>Not 1 And Not 2</th>
            </tr>
        </thead>
        <tr>
            <td>on</td>		
            <td>on</td>		
            <td>off</td>		
            <td>off</td>		
            <td>off</td>
        </tr>
        <tr>
            <td>on</td>		
            <td>off</td>		
            <td>off</td>		
            <td>on</td>		
            <td>off</td>
        </tr>
        <tr>
            <td>off</td>		
            <td>on</td>		
            <td>on</td>		
            <td>off</td>		
            <td>off</td>
        </tr>
        <tr>
            <td>off</td>		
            <td>off</td>		
            <td>on</td>		
            <td>on</td>		
            <td>on</td>
        </tr>
    </table><br>
    
    Looking at the table above, we've just made our Nor gate! It's the same as taking Not 1 And Not 2. Of course, 1 Nor 2 is a much simpler way of 
    expressing that relationship. From here, if we put the output of our Nor gate through another Not gate, then the relationship we get is the Or 
    gate. (Remember, the N stands for "not," so taking Not Nor is the same as taking Not Not Or, which is another way to say just Or.<br><br>
    
    Now, the only two gates that we have to represent are Xor and Xnor. These gates are also opposites, as Xor is on only if the inputs do not match, 
    and Xnor only if they do match. So, if we can create one, we can run it through a Not gate and get the other missing gate. (And, technically, 
    we can make each of these gates in other ways with the gates that we have already created. If we look at the language we use to describe 
    the Xnor gate in English, we can get a hint as to how we might create it from our gates. Remember, a Xnor gate is on if the inputs are both 
    on. That is, if Input 1 and Input 2 are on, or if Input 1 is off and Input 2 is off. Let's create a truth table that shows each of these 
    relationships:<br><br>
    
    <table>
        <thead>
            <tr>
                <th>Input 1</th>	
                <th>Input 2</th>	
                <th>And</th>	
                <th>Not 1</th>	
                <th>Not 2</th>	
                <th>Not 1 And Not 2</th>	
                <th>(1 And 2) Or (Not 1 And Not 2)</th>
            </tr>
        </thead>
        <tr>
            <td>on</td>		
            <td>on</td>		
            <td>on</td>		
            <td>off</td>		
            <td>off</td>		
            <td>off</td>		
            <td>on</td>
        </tr>
        <tr>
            <td>on</td>		
            <td>off</td>		
            <td>off</td>		
            <td>off</td>		
            <td>on</td>		
            <td>off</td>		
            <td>off</td>
        </tr>
        <tr>
            <td>off</td>		
            <td>on</td>		
            <td>off</td>		
            <td>on</td>		
            <td>off</td>		
            <td>off</td>		
            <td>off</td>
        </tr>
        <tr>
            <td>off</td>		
            <td>off</td>		
            <td>off</td>		
            <td>on</td>		
            <td>on</td>		
            <td>on</td>		
            <td>on</td>
        </tr>
    </table><br>
    
    Voila, the Xnor gate! As said before, putting this through a Not gate will give us the Xor gate, which means that now we can represent each of 
    these 16 two-input gates with real hardware. While not particularly useful on their own, if we continue to build on these gates, we'll be able 
    to create some chips that we can put to work for us!<br><br>
    `;

    document.getElementsByClassName("content")[0].innerHTML = content;
}

export {boolean};