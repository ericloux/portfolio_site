function decisions() {
    let content = "";

    content += `
    <h3>
    Decisions and Addition
    </h3>

    To this point, we have looked at many gates that have two inputs and one output. These form a basis from which we can create more complex 
    operators, but which ones are useful? As we said before, there are 256 different gates that we can create with three inputs. Surely we don't 
    need all of these?<br><br>

    Just as And, Or, and Not are the primary two-input operators, not all three-input operators need to be clearly defined. Most can be easily 
    specified by combining the inputs into various And, Or, and Not gates. The most important is called a multiplexor, which allows for branching. 
    For this gate, we have a Control input, as well as our I1 and I2. When the Control bit is set to true, then the output is equal to I1. If the 
    control bit is false, then the output is equal to I2. Here is the truth table for this function:<br><br>

    <table>
        <thead>
            <tr>
                <th>Control</th>	
                <th>I1</th>	
                <th>I2</th>	
                <th>Out</th>
            </tr>
        </thead>
        <tr>
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>0</td>		
            <td>0</td>		
            <td>1</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>0</td>		
            <td>1</td>		
            <td>0</td>		
            <td>1</td>
        </tr>
        <tr>
            <td>0</td>		
            <td>1</td>		
            <td>1</td>		
            <td>1</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>0</td>		
            <td>1</td>		
            <td>1</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>1</td>		
            <td>0</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>1</td>		
            <td>1</td>		
            <td>1</td>
        </tr>
    </table><br>

    Can we make this function from our simpler gates alone? We sure can! To do so, let's look at breaking it down into smaller pieces and then try 
    and piece them together. First, we know that if Control is 0 then Out will be equal to I1. We have an operation that returns true only if one 
    input is true - the Only gate. To reduce confusion, we will call it by its other name, And Not. Here is the truth table for that gate applied 
    to Control and I1:<br><br>

    <table>
        <thead>
            <tr>
                <th>Control</th>	
                <th>I1</th>	
                <th>Out</th>
            </tr>
        </thead>
        <tr>
            <td>0</td>		
            <td>0</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>0</td>		
            <td>1</td>		
            <td>1</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>0</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>1</td>		
            <td>0</td>
        </tr>
    </table><br>

    Likewise, if we want a function that is true only if Control and I2 are both true. That's our And function, shown again here:<br><br>

    <table>
        <thead>
            <tr>
                <th>Control</th>	
                <th>I2</th>	
                <th>Out</th>
            </tr>
        </thead>
        <tr>
            <td>0</td>		
            <td>0</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>0</td>		
            <td>1</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>0</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>1</td>		
            <td>1</td>
        </tr>
    </table><br>

    Now, how can we combine these two charts? If we use And, then the result will always be zero as the Control input would need to be 1 and 0 at 
    the same time. If we use Or, though, then it works perfectly! Here is the full truth table with all three inputs, along with both of the interim 
    functions, then finally the combination:<br><br>

    <table>
        <thead>
            <tr>
                <th>Control</th>	
                <th>I1</th>	
                <th>I2</th>	
                <th>I1 And Not Control</th>	
                <th>I2 And Control</th>	
                <th>(I1 And Not Control) Or (I2 And Control)</th>
            </tr>
        </thead>
        <tr>
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>0</td>		
            <td>0</td>		
            <td>1</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>0</td>		
            <td>1</td>		
            <td>0</td>		
            <td>1</td>		
            <td>0</td>		
            <td>1</td>
        </tr>
        <tr>
            <td>0</td>		
            <td>1</td>		
            <td>1</td>		
            <td>1</td>		
            <td>0</td>		
            <td>1</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>0</td>		
            <td>1</td>		
            <td>0</td>		
            <td>1</td>		
            <td>1</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>1</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>1</td>		
            <td>1</td>		
            <td>0</td>		
            <td>1</td>		
            <td>1</td>
        </tr>
    </table><br>

    We've done it! Although its application may not be apparent at first, this allows us to start making decisions with our circuits. This feature 
    will become incredibly useful at higher levels of computing, as it allows code to branch, which is incredibly useful to create complex programs.
    <br><br>

    In addition to the multiplexor, we can also use our gates to create chips that can begin to perform mathematical operations. The simplest is 
    called a half adder, and it takes two inputs and provides the input. Although I haven't introduced binary completely yet, consider that there 
    are only three results when adding a combination of 1s and 0s: 0, 1, or 2. Since a single output can only represent a 1 or 0, how do we represent 
    a 2? The answer: add more outputs! If we have another output that's true when the sum is 2, then we can track that information as well. What's 
    more, if both outputs are on, then we have an output that represents 2 plus an output that represents 1, which means we can also indicate an 
    output of 3 of both are on. Here is a table showing this information:<br><br>

    <table>
        <thead>
            <tr>
                <th>2's </th>	
                <th>1's Output</th>	
                <th>Decimal </th>
            </tr>
        </thead>
        <tr>
            <td>0</td>		
            <td>0</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>0</td>		
            <td>1</td>		
            <td>1</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>0</td>		
            <td>2</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>1</td>		
            <td>3</td>
        </tr>
    </table><br>

    If we keep adding more outputs, then we can double the number of possible outputs. This is the basis for binary, which will be explored deeper 
    in a subsequent article.<br><br>

    However, at this point, we're trying to make a gate that takes two numbers and adds them. We'll call our two output gates Sum and Carry. Sum 
    represents the ones place in the table above, and Carry represents whether we need to carry our answer over. Here is a truth table for the gate 
    that we need to create:<br><br>

    <table>
        <thead>
            <tr>
                <th>I1</th>	
                <th>I2</th>	
                <th>Sum</th>	
                <th>Carry</th>
            </tr>
        </thead>
        <tr>
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>0</td>		
            <td>1</td>		
            <td>1</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>0</td>		
            <td>1</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>1</td>		
            <td>0</td>		
            <td>1</td>
        </tr>
    </table><br>

    Those operations might look familiar. That's because Sum is just an Xor gate, and Carry is an And gate. We've already built these, and now 
    we've shown how they can be combined into a chip that starts doing math! And since the highest number we can represent is 2, we could even add 
    another input to completely utilize both output bits to their fullest potential. Since the other chip was known as a half adder, this three-input 
    version is called a full adder. Here is a truth table for it:<br><br>

    <table>
        <thead>
            <tr>
                <th>I1</th>	
                <th>I2</th>	
                <th>I3</th>	
                <th>Sum</th>	
                <th>Carry</th>
            </tr>
        </thead>
        <tr>
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>0</td>		
            <td>0</td>		
            <td>1</td>		
            <td>1</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>0</td>		
            <td>1</td>		
            <td>0</td>		
            <td>1</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>0</td>		
            <td>1</td>		
            <td>1</td>		
            <td>0</td>		
            <td>1</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>0</td>		
            <td>0</td>		
            <td>1</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>0</td>		
            <td>1</td>		
            <td>0</td>		
            <td>1</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>1</td>		
            <td>0</td>		
            <td>0</td>		
            <td>1</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>1</td>		
            <td>1</td>		
            <td>1</td>		
            <td>1</td>
        </tr>
    </table><br>

    The implementation of this chip is a bit more complex. Sum is true if exactly one input is true, or if all three are. Carry is true if at least 
    two inputs are true. How can we create a function that represents that? Let's see what happens to our truth table when we connect inputs I2 and 
    I3 to a half adder:<br><br>

    <table>
        <thead>
            <tr>
                <th>I1</th>	
                <th>I2</th>	
                <th>I3</th>	
                <th>Sum(I2,I3)</th>	
                <th>Carry(I2,I3)</th>
            </tr>
        </thead>
        <tr>
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>0</td>		
            <td>0</td>		
            <td>1</td>		
            <td>1</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>0</td>		
            <td>1</td>		
            <td>0</td>		
            <td>1</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>0</td>		
            <td>1</td>		
            <td>1</td>		
            <td>0</td>		
            <td>1</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>0</td>		
            <td>1</td>		
            <td>1</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>1</td>		
            <td>0</td>		
            <td>1</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>1</td>		
            <td>1</td>		
            <td>0</td>		
            <td>1</td>
        </tr>
    </table><br>

    The first half of the table is dead on, but the second half is almost completely wrong. But, if you apply Xor to I1 and the Sum output:<br><br>

    <table>
        <thead>
            <tr>
                <th>I1</th>	
                <th>Sum(I2,I3)</th>	
                <th>Xor</th>	
                <th>Sum(I1,I2,I3)</th>
            </tr>
        </thead>
        <tr>
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>0</td>		
            <td>1</td>		
            <td>1</td>		
            <td>1</td>
        </tr>
        <tr>
            <td>0</td>		
            <td>1</td>		
            <td>1</td>		
            <td>1</td>
        </tr>
        <tr>
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>0</td>		
            <td>1</td>		
            <td>1</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>1</td>		
            <td>0</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>1</td>		
            <td>0</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>0</td>		
            <td>1</td>		
            <td>1</td>
        </tr>
    </table><br>

    Now, the output matches the intended result for the full adder's Sum output. We're halfway there! At least, we would be if the Carry gate 
    were as easy to model. However, think about the way the gate was described before: if at least two of the inputs are true, then Carry is true. 
    That's easy to represent - if (I1 and I2) or (I1 and I3) or (I2 and I3) are true, then Carry is true. Let's draw another truth table to show 
    this relationship with its intermediate steps:<br><br>

    <table>
        <thead>
            <tr>
                <th>I1</th>	
                <th>I2</th>	
                <th>I3</th>	
                <th>And(I1, I2)</th>	
                <th>And(I1, I3)</th>	
                <th>And(I2, I3)</th>	
                <th>Or(And(I1, I2), And(I1, I3)</th>	
                <th>Or(Or(And(I1, I2), And(I1, I3), And(I2,I3)))</th>
            </tr>
        </thead>
        <tr>
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>0</td>		
            <td>0</td>		
            <td>1</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>0</td>		
            <td>1</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>0</td>		
            <td>1</td>		
            <td>1</td>		
            <td>0</td>		
            <td>0</td>		
            <td>1</td>		
            <td>0</td>		
            <td>1</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>		
            <td>0</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>0</td>		
            <td>1</td>		
            <td>0</td>		
            <td>1</td>		
            <td>0</td>		
            <td>1</td>		
            <td>1</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>1</td>		
            <td>0</td>		
            <td>1</td>		
            <td>0</td>		
            <td>0</td>		
            <td>1</td>		
            <td>1</td>
        </tr>
        <tr>
            <td>1</td>		
            <td>1</td>		
            <td>1</td>		
            <td>1</td>		
            <td>1</td>		
            <td>1</td>		
            <td>1</td>		
            <td>1</td>
        </tr>
    </table><br>

    There we go! Now if we combine what we've done, we have a full adder chip that can add three binary numbers!<br><br>

    Naturally, though, how often do you need to add a combination of three 1s and 0s? Not very often, admittedly. So, what can we do to start 
    making this more useful? Unfortunately, that answer will have to wait until the next article. First, though, we'll need to take another 
    interlude where we more deeply examine the binary number system. After doing so, the answer might become intuitive, but if not, it too will 
    be explained in time.<br><br>
    `;

    document.getElementsByClassName("content")[0].innerHTML = content;
}

export {decisions};