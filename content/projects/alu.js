function alu() {
    let content = "";

    content += `
    <br><div class="alu-grid-container">
    <!-- Title - Row 1 -->
        <div class="alu-grid-item-title">
            8-Bit Arithmatic + Logic Unit
        </div>

        <!-- Input - Row 2 -->
        <div class="alu-grid-item-x-register">
            X Register
        </div>
        <div class="alu-grid-item-y-register">
            Y Register
        </div>
        <div class="alu-grid-item">
            ZX
        </div>
        <div class="alu-grid-item">
            NX
        </div>
        <div class="alu-grid-item">
            ZY
        </div>
        <div class="alu-grid-item">
            NY
        </div>
        <div class="alu-grid-item">
            F
        </div>
        <div class="alu-grid-item">
            NO
        </div>

        <!-- Input - Row 2 -->
        <div class="alu-grid-item-x-register">
            <input type="number" id="alu-x-register-decimal" placeholder="Input" max="127" min="-128">
        </div>
        <div class="alu-grid-item-y-register">
            <input type="number" id="alu-y-register-decimal" placeholder="Input" max="127" min="-128">
        </div>
        <div class="alu-grid-item">
            <input type="checkbox" id="alu-ZX-in">
        </div>
        <div class="alu-grid-item">
            <input type="checkbox" id="alu-NX-in">
        </div>
        <div class="alu-grid-item">
            <input type="checkbox" id="alu-ZY-in">
        </div>
        <div class="alu-grid-item">
            <input type="checkbox" id="alu-NY-in">
        </div>
        <div class="alu-grid-item">
            <input type="checkbox" id="alu-F-in">
        </div>
        <div class="alu-grid-item">
            <input type="checkbox" id="alu-NO-in">
        </div>

        <!-- Binary Input - Row 3 -->
        <div id = "X8-in" class="alu-grid-item">
            X8
        </div>
        <div id = "X7-in" class="alu-grid-item">
            X7
        </div>
        <div id = "X6-in" class="alu-grid-item">
            X6
        </div>
        <div id = "X5-in" class="alu-grid-item">
            X5
        </div>
        <div id = "X4-in" class="alu-grid-item">
            X4
        </div>
        <div id = "X3-in" class="alu-grid-item">
            X3
        </div>
        <div id = "X2-in" class="alu-grid-item">
            X2
        </div>
        <div id = "X1-in" class="alu-grid-item">
            X1
        </div>
        <div id = "Y8-in" class="alu-grid-item">
            Y8
        </div>
        <div id = "Y7-in" class="alu-grid-item">
            Y7
        </div>
        <div id = "Y6-in" class="alu-grid-item">
            Y6
        </div>
        <div id = "Y5-in" class="alu-grid-item">
            Y5
        </div>
        <div id = "Y4-in" class="alu-grid-item">
            Y4
        </div>
        <div id = "Y3-in" class="alu-grid-item">
            Y3
        </div>
        <div id = "Y2-in" class="alu-grid-item">
            Y2
        </div>
        <div id = "Y1-in" class="alu-grid-item">
            Y1
        </div>
        <div class="alu-grid-item-label">
            Inputs as binary
        </div>

        <!-- Zero Registers - Row 4 -->
        <div id = "X8-zero" class="alu-grid-item">
            X8
        </div>
        <div id = "X7-zero" class="alu-grid-item">
            X7
        </div>
        <div id = "X6-zero" class="alu-grid-item">
            X6
        </div>
        <div id = "X5-zero" class="alu-grid-item">
            X5
        </div>
        <div id = "X4-zero" class="alu-grid-item">
            X4
        </div>
        <div id = "X3-zero" class="alu-grid-item">
            X3
        </div>
        <div id = "X2-zero" class="alu-grid-item">
            X2
        </div>
        <div id = "X1-zero" class="alu-grid-item">
            X1
        </div>
        <div id = "Y8-zero" class="alu-grid-item">
            Y8
        </div>
        <div id = "Y7-zero" class="alu-grid-item">
            Y7
        </div>
        <div id = "Y6-zero" class="alu-grid-item">
            Y6
        </div>
        <div id = "Y5-zero" class="alu-grid-item">
            Y5
        </div>
        <div id = "Y4-zero" class="alu-grid-item">
            Y4
        </div>
        <div id = "Y3-zero" class="alu-grid-item">
            Y3
        </div>
        <div id = "Y2-zero" class="alu-grid-item">
            Y2
        </div>
        <div id = "Y1-zero" class="alu-grid-item">
            Y1
        </div>
        <div class="alu-grid-item-label">
            Zeroing of inputs
        </div>

        <!-- Negation Registers - Row 5 -->
        <div id = "X8-neg" class="alu-grid-item">
            X8
        </div>
        <div id = "X7-neg" class="alu-grid-item">
            X7
        </div>
        <div id = "X6-neg" class="alu-grid-item">
            X6
        </div>
        <div id = "X5-neg" class="alu-grid-item">
            X5
        </div>
        <div id = "X4-neg" class="alu-grid-item">
            X4
        </div>
        <div id = "X3-neg" class="alu-grid-item">
            X3
        </div>
        <div id = "X2-neg" class="alu-grid-item">
            X2
        </div>
        <div id = "X1-neg" class="alu-grid-item">
            X1
        </div>
        <div id = "Y8-neg" class="alu-grid-item">
            Y8
        </div>
        <div id = "Y7-neg" class="alu-grid-item">
            Y7
        </div>
        <div id = "Y6-neg" class="alu-grid-item">
            Y6
        </div>
        <div id = "Y5-neg" class="alu-grid-item">
            Y5
        </div>
        <div id = "Y4-neg" class="alu-grid-item">
            Y4
        </div>
        <div id = "Y3-neg" class="alu-grid-item">
            Y3
        </div>
        <div id = "Y2-neg" class="alu-grid-item">
            Y2
        </div>
        <div id = "Y1-neg" class="alu-grid-item">
            Y1
        </div>
        <div class="alu-grid-item-label">
            Negation of inputs
        </div>
        
        <!-- Function - Row 6-->

        <div id = "F8" class="alu-grid-item">
            F8
        </div>
        <div id = "F7" class="alu-grid-item">
            F7
        </div>
        <div id = "F6" class="alu-grid-item">
            F6
        </div>
        <div id = "F5" class="alu-grid-item">
            F5
        </div>
        <div id = "F4" class="alu-grid-item">
            F4
        </div>
        <div id = "F3" class="alu-grid-item">
            F3
        </div>
        <div id = "F2" class="alu-grid-item">
            F2
        </div>
        <div id = "F1" class="alu-grid-item">
            F1
        </div>
        <div id = "function" class="alu-grid-item-y-register">
            Add or and?
        </div>
        <div class="alu-grid-item-label">
            Function
        </div>
        
        <!-- Negate output - Row 6-->

        <div id = "N8" class="alu-grid-item">
            N8
        </div>
        <div id = "N7" class="alu-grid-item">
            N7
        </div>
        <div id = "N6" class="alu-grid-item">
            N6
        </div>
        <div id = "N5" class="alu-grid-item">
            N5
        </div>
        <div id = "N4" class="alu-grid-item">
            N4
        </div>
        <div id = "N3" class="alu-grid-item">
            N3
        </div>
        <div id = "N2" class="alu-grid-item">
            N2
        </div>
        <div id = "N1" class="alu-grid-item">
            N1
        </div>
        <div class="alu-grid-item-y-register">
                Negate or not?
        </div>
        <div class="alu-grid-item-label" id="alu-output">
                Negate output
        </div>
    </div>
    <br><br>

    <p>
    I decided to challenge myself with a simulated aritmatic and logic unit with a few restrictions to make its construction similar to what a 
    hardware engineer would go through when creating an ALU out of logic gates. To that end, I challenged myself to the following constraints:
    </p>
    <ol>
        <li> With the exception of the initial conversion from decimal to binary, all operations would be completed as purely Boolean functions.</li>
        <li> Although I would use operations such as AND, OR, XOR, and NOT, I needed to define each of those using only NAND first. </li>
    </ol>
    <p>
        Within these restraints, I created the ALU above. This ALU was described in the book "The Elements of Computing Science" by Nisan and Schocken. 
        In addition to the two input registers that take binary numbers, they also implemented six control bits that performed a different function. 
        A description of each follows:
    </p>
    <ul>
        <li><b>ZX</b> zeroes the X input.</li>
        <li><b>NX</b> negates the output of ZX.</li>
        <li><b>ZY</b> zeroes the Y input.</li>
        <li><b>NY</b> negates the output of ZY.</li>
        <li><b>F</b> determines the function to be used. 0 represents bitwise AND, and 1 represents addition. </li>
        <li><b>NO</b> negates the output.</li>
    </ul>
    <p>
        Using these six registers and two inputs, there are a number of functions that are possible. Here are some of the more useful examples:
    <p>

    <table>
        <thead>
            <tr>
                <th>Function</th>
                <th>ZX</th>
                <th>NX</th>
                <th>ZY</th>
                <th>NY</th>
                <th>F</th>
                <th>NO</th>
            </tr>
        </thead>
        <tr>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
        </tr>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>-1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
        </tr>
        <tr>
            <td>x</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>y</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>!x</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
        </tr>
        <tr>
            <td>!y</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
        </tr>
        <tr>
            <td>-x</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>-y</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>x+1</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>y+1</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>x-1</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
        </tr>
        <tr>
            <td>y-1</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
        </tr>
        <tr>
            <td>x+y</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
        </tr>
        <tr>
            <td>x-y</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>y-x</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>x&y</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>x|y</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
        </tr>
    </table>

    <br><br><br><br>
    `;

    document.getElementsByClassName("content")[0].innerHTML = content;

    const bits = 7;

    let reg_x = new Array(bits);
    let reg_y = new Array(bits);
    let zero_x = new Array(bits);
    let zero_y = new Array(bits);
    let neg_x = new Array(bits);
    let neg_y = new Array(bits);
    let carry = new Array(bits);
    let f = new Array(bits);
    let out = new Array(bits);

    let elem_reg_x = document.getElementById("alu-x-register-decimal");
    let elem_reg_y = document.getElementById("alu-y-register-decimal");
    let elem_zero_x = document.getElementById("alu-ZX-in");
    let elem_neg_x = document.getElementById("alu-NX-in");
    let elem_zero_y = document.getElementById("alu-ZY-in");
    let elem_neg_y = document.getElementById("alu-NY-in");
    let elem_f = document.getElementById("alu-F-in");
    let elem_out = document.getElementById("alu-NO-in");

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
    
        reg_x[0] = Math.abs(elem_reg_x.value)%2;
        reg_x[1] = Math.floor(elem_reg_x.value/2+128)%2;
        reg_x[2] = Math.floor(elem_reg_x.value/4+128)%2;
        reg_x[3] = Math.floor(elem_reg_x.value/8+128)%2;
        reg_x[4] = Math.floor(elem_reg_x.value/16+128)%2;
        reg_x[5] = Math.floor(elem_reg_x.value/32+128)%2;
        reg_x[6] = Math.floor(elem_reg_x.value/64+128)%2;
    
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
    
        reg_y[0] = Math.abs(elem_reg_y.value)%2;
        reg_y[1] = Math.floor(elem_reg_y.value/2+128)%2;
        reg_y[2] = Math.floor(elem_reg_y.value/4+128)%2;
        reg_y[3] = Math.floor(elem_reg_y.value/8+128)%2;
        reg_y[4] = Math.floor(elem_reg_y.value/16+128)%2;
        reg_y[5] = Math.floor(elem_reg_y.value/32+128)%2;
        reg_y[6] = Math.floor(elem_reg_y.value/64+128)%2;
    
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
        f[1] = OR(AND(NOT(elem_f.checked), AND(neg_x[1], neg_y[1])), AND(elem_f.checked, ADDSUM(neg_x[1], neg_y[1],carry[0])), 0);
        f[2] = OR(AND(NOT(elem_f.checked), AND(neg_x[2], neg_y[2])), AND(elem_f.checked, ADDSUM(neg_x[2], neg_y[2],carry[1])), 0);
        f[3] = OR(AND(NOT(elem_f.checked), AND(neg_x[3], neg_y[3])), AND(elem_f.checked, ADDSUM(neg_x[3], neg_y[3],carry[2])), 0);
        f[4] = OR(AND(NOT(elem_f.checked), AND(neg_x[4], neg_y[4])), AND(elem_f.checked, ADDSUM(neg_x[4], neg_y[4],carry[3])), 0);
        f[5] = OR(AND(NOT(elem_f.checked), AND(neg_x[5], neg_y[5])), AND(elem_f.checked, ADDSUM(neg_x[5], neg_y[5],carry[4])), 0);
        f[6] = OR(AND(NOT(elem_f.checked), AND(neg_x[6], neg_y[6])), AND(elem_f.checked, ADDSUM(neg_x[6], neg_y[6],carry[5])), 0);
        f[7] = OR(AND(NOT(elem_f.checked), AND(neg_x[7], neg_y[7])), AND(elem_f.checked, ADDSUM(neg_x[7], neg_y[7],carry[6])), 0);
        
        document.getElementById("F8").innerHTML = f[7];
        document.getElementById("F7").innerHTML = f[6];
        document.getElementById("F6").innerHTML = f[5];
        document.getElementById("F5").innerHTML = f[4];
        document.getElementById("F4").innerHTML = f[3];
        document.getElementById("F3").innerHTML = f[2];
        document.getElementById("F2").innerHTML = f[1];
        document.getElementById("F1").innerHTML = f[0];
    
        if (elem_f.checked) document.getElementById("function").innerHTML = "Add registers";
        else document.getElementById("function").innerHTML = "Logical And registers";

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

        let decOutput = 0;

        decOutput += out[7]*-128;
        decOutput += out[0];
        decOutput += out[1]*2;
        decOutput += out[2]*4;
        decOutput += out[3]*8;
        decOutput += out[4]*16;
        decOutput += out[5]*32;
        decOutput += out[6]*64;

        document.getElementById("alu-output").innerHTML = decOutput;
    }
    
        // returns 1 if either input is 0
    function NAND(i1, i2) {
        if (i1 == false) return 1;
        if (i2 == false) return 1; 
        return 0;
    }
    
        // returns 0 if input is 1, OR vice-versa
    function NOT(i1) {
        return NAND(i1, i1);
    }
    
        // returns 1 if both inputs are 0
    function AND(i1, i2) {
        return NOT(NAND(i1, i2))
    }
    
        // returns 0 if both inputs are 1
    function OR(i1, i2) {
        return NAND(NOT(i1), NOT(i2));
    }
    
        // returns 1 if exactly one input is 1
    function XOR(i1, i2) {
        return NOT(OR(AND(i1, i2), AND(NOT(i1), NOT(i2))));
    }
    
        // returns 0
    function FALSE(i1) {
        return AND(i1, NOT(i1));
    }
    
        // returns 1
    function TRUE(i1) {
        return OR(i1, NOT(i1));
    }
    
        // returns 1 if only i1 is 1
    function ANDNOT(i1, i2) {
        return AND(i1, NOT(i2));
    }
    
        // if key is 0, returns i1, otherwise returns i2
    function mplex(key, i1, i2) {
        return OR(AND(NOT(key), i1), AND(key, i2));
    }
    
    function ADDCARRY(i1, i2, i3) {
        return OR(OR(AND(i1, i2), AND(i1, i3)), AND(i2, i3));
    }
    
    function ADDSUM(i1, i2, i3) {
        return OR(AND(AND(i1, i2), i3), XOR(XOR(i1, i2), i3))
    }

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            for (let k = 0; k < 2; k++) {
                console.log(i + " + " + j + " + " + k + " = " + ADDCARRY(i,j,k) + " " + ADDSUM(i,j,k));
            }
        }
    }
}

export {alu};