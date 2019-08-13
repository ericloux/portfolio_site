function fitness() {
    let content = "";

    content += `   
    <h3>
        The Problem to Solve
    </h3>

    Now that I've given an overview of what a genetic algorithm is, the next question is what problem should we solve?<br><br>

    Finding an equation that describes a curve that passes through a set of points can be a problem that is either trivial to solve or nearly 
    impossible unless you're an experienced mathematician. Choosing those points based on a method that was not determined mathematically can 
    make it difficult if not impossible to find an equation that fits the points. However, with a genetic algorithm, finding such an equation 
    would be (arguably) much easier.<br><br>

    So, what data am I choosing for this example? I'm picking the following sets of (x,y) points:<br><br>

    <table>
        <thead>
            <tr>
                <th>x</th>
                <th>y</th>
            </tr>
        </thead>
        <tr>
            <td>1</td>
            <td>8</tr>
        <tr>
            <td>2</td>
            <td>5</tr>
        <tr>
            <td>3</td>
            <td>12</tr>
        <tr>
            <td>4</td>
            <td>12</tr>
        <tr>
            <td>5</td>
            <td>15</tr>
        <tr>
            <td>6</td>
            <td>23</tr>
        <tr>
            <td>7</td>
            <td>15</tr>
        <tr>
            <td>8</td>
            <td>18</tr>
        <tr>
            <td>9</td>
            <td>12</tr>
        <tr>
            <td>10</td>
            <td>4</td>
        </tr>
    </table><br>

    This may seem like a random set of numbers, but if you substitute each number for its associated letter in the alphabet, then you get one 
    of the most famous phrases in computer science: "HELLOWORLD."<br><br>

    To start implementing the algorithm, we need to determine the genotype and phenotype. This will involve a mathematical function, so we'll need 
    a way to represent a function in a way that lends itself to mutation. From there, we'll apply the formula to the numbers 1 through 10 and see 
    how well they match the given set of points. We'll also need a way to quantify that fitness.<br><br>

    First, I've chosen a list of 32 mathematical operations. I chose this number because it's a power of 2, which means that they can be 
    represented in binary easily. Any mutation will affect just one of the bits, switching it to its opposite state. Each formula will be a chain 
    of fifty of these operations. There are three groups of operators: <br>

    <br>
        <li><b>Numerals</b> form a <em>term</em> when chained together. When they are followed by another numeral, they concatenate to form a larger term. These include the digits 0 through 9 as well as the decimal. </li>
        <li><b>Operators</b> connect two terms. These include addition, subtraction, multiplication, division, expoentiation, modulo, bitwise or, bitwise and, and bitwise xor.</li>
        <li><b>Functions</b> operate on the previous term. These include increment, decrement, bitwise left, bitwise right, absolute value, negate, round, ceiling, floor, and zero.</li>
        <li><b>Terms</b> are numbers that are terms in and of themselves. These include x and pi.</li>
    <br><br>

    Here is a list of all the operators and their associated numbers:<br><br>

    <table>
        <thead>
            <tr>
                <th>-</th>
                <th>0</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
            </tr>
        </thead>
        <tr>
            <th>+0</th>
            <td>0</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>increment</td>
            <td>bitwise left</td>
            <td>negate</tr>
        <tr>
            <th>+8</th>
            <td>round</td>
            <td>ceiling</td>
            <td>input</td>
            <td>absolute value</td>
            <td>bitwise or</td>
            <td>add</td>
            <td>multiply</td>
            <td>exponent</tr>
        <tr>
            <th>+16</th>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>decrement</td>
            <td>bitwise right</td>
            <td>zero</tr>
        <tr>
            <th>+24</th>
            <td>decimal point</td>
            <td>floor</td>
            <td>pi</td>
            <td>bitwise and</td>
            <td>bitwise xor</td>
            <td>subtract</td>
            <td>divide</td>
            <td>remainder</td>
        </tr>
    </table><br>

    To implement these, we'll use the letters A-Z and the numbers 0-5 to represent each position in the chart. Now we can represent each formula 
    as a string of letters/numbers, and a string of binary numbers.<br><br>

    Now, to turn each genotype into a phenotype, we need to determine which genomes create a valid phenotype. In the event that a genotype is 
    invalid, then we'll discard it and create a replacement in its place for the next generation. So, which genotypes are valid?<br><br>

    There are several ways that the numerals, operators, functions, and terms can combine in a few ways. Here is an example grammar of how these 
    terms can combine:<br><br>

    numeral string = [numeral] | [numeral][numeral string]<br>
    decimal string = [numeral string][decimal] | [decimal][numeral string] | [numeral string][decimal][numeral string]<br>
    term = [numeral string] | [term][function] |  [term][operator][term]<br><br>

    Implementing this grammar, there are a few ways that a genome can create a malformed phenotype. The first character must be a numeral or a 
    term, and the last character cannot be an operator. If two terms are adjacent and cannot be combined into a numeral string, then that formula 
    cannot be evaluated (e.g. 123 is valid, but 1pi3 is not because multiplication isn't defined in this way). If there are more than two decimal 
    points in a number, then that number is invalid. Only a term can follow an operator.<br><br>

    Lastly, in order to test the fitness, the formula will be applied to the numbers 1 through 10. Then, the differences between each term will be 
    taken. Each of these will be divided by 26 and only the remainder kept. From there, the absolute value of the difference between the formula's 
    result and the difference between the related terms in the target will be taken. That number will then be squared, resulting in a number 
    between 0 and 169. These differences are calculated for each of the 10 input terms, and then the totals are added together. Here's how the 
    formula looks:<br><br>

    |(x[n] - x[n+1]) - (f(y[n]) - f(y[n+1])| + 52 % 26<br><br>

    The lower this score, the better the formula describes the function. The reason that this is implemented based on the difference between terms 
    is because a formula that is perfectly parallel to the input would show as being less fit than a formula that matches all of the points exept 
    missing by one, even though the first formula would be an exact match if two was subtracted from it.<br><br>

    Now that we have a genotype, phenotype, and fitness functions, we have all the groundwork for our genetic algorithm. From here, we just have to 
    program the components and then run the algorithm until we get a match!<br><br><br><br>
    `;

    document.getElementsByClassName("content")[0].innerHTML = content;
}

export {fitness};