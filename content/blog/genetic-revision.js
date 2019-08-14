function geneticRevision() {
    let content = "";

    content += `      
    <h3>Implementing Genomes</h3>

    Now that we have described the scope of the genetic algorithm that we're planning on implementing, we can go ahead and start creating it.<br><br>

    It makes sense to create a "Genome" class in Javascript. That way we can ensure our code is encapsulated in a sensible way. The only data we will need 
    to store is a string of our 50 genes. We'll provide a number of constructors for this data. The default constructor will create a random number of 
    genes and store them in the class information. The constructor can replicate reproduction by taking two other Genomes, picking a spot within them, 
    and copying a portion from one Genome's genes and a portion from the other if two other objects of class Genome are passed to it.<br><br>

    Next, we need to write some accessor functions. getNickname() returns the genes as a string of characters. getFullname() returns the genes as a 
    binary string. Likewise, the gene at a specific position is accessible through the getGeneAt() function. A similar function getFormula() draws the 
    genes as a series of mathematical symbols. A geneToBinary() and binaryToGene() convert between characters and binary numbers.<br><br>

    Lastly, we need to write a way to actually apply the formulas. I've done this by creating a class for most of the larger syntactical elements 
    described in the previous entry. The NumeralString, DecimalString, Operator, Function, and Term classes each have a constructor and a getGeneClass() 
    function. The NumeralString and DecimalString classes have functions to easily add more digits to them, and the Operator and Function classes can 
    each take values and apply return the results of the functions. The Term class can also take a NumeralString and DecimalString and keep their 
    values.<br><br>

    Now, all we have to do is add a method to the Genome class that parses the input and evaluates the formula. It does this by creating a list of the 
    classes mentioned in the last paragraph. It evaluates the next gene, then determines whether the combination is valid. If it runs into an invalid 
    combination, then it returns false. Otherwise, it will return the value.<br><br>

    After implementing all of this and running it, I realize my first problem. For every gene, there's just under a 50% chance that the combination 
    will invalidate itself. This means, after 50 genes, there's about a one in 2^50 chance that the gene creates a valid combination. Expressed as a 
    percentage, that means there is a less than 
    10^-13 percent that the gene will be valid. Needless to say, in order for this to work, I need to determine a new 
    method of either encoding genes, or a new way of turning them into a valid phenotype.<br><br>

    So, in order to minimize the number of invalid phenotypes, what alternatives do we have? We need a way to make the genes dynamic. Certain genes 
    be more likely to follow other genes in valid combinations, rather than just hoping that the chain works out. So, instead of 32 gene 
    characters, we'll reduce the set to 16. I've chosen the letters A through P to represent those genes. We'll also create two modes - a numeral string 
    mode and an operator mode. <br><br>

    In the numeral mode, the first ten characters (A-J) will add the numerals 0 through 9 to the numeral string. The remaining characters are split 
    into three groups: a decimal group (K and L), a input group (M and N), and a mode group (O and P). The decimal group will add a decimal to the 
    equation the first time it is found in a portion of a gene that describes a numeral. Each time the input group is called, the number of times 
    that the numeral will be multiplied by the input term increases. (This will happen once the entire numeral string is described.) Finally, the mode 
    group will terminate the numeral and switch to the operator mode.<br><br>

    In the operator mode, the first eight genes (A-H) will code for operations that operate on the previous term, while the second eight (I-P) will 
    code for operations that operate on two terms while also switching back to the numeral mode. These codes are described in the following 
    table:<br><br>

    <table>
        <thead>
            <tr>
                <th>Gene</th>
                <th>Operator</th>
                <th>Gene</th>
                <th>Operator</th>
            </tr>
        </thead>
        <tr>
            <td>A</td>
            <td>Negate</td>
            <td>I</td>
            <td>Exponent</tr>
        <tr>
            <td>B</td>
            <td>Ceiling</td>
            <td>J</td>
            <td>Subtraction</tr>
        <tr>
            <td>C</td>
            <td>Negate</td>
            <td>K</td>
            <td>Remainder</tr>
        <tr>
            <td>D</td>
            <td>Increment</td>
            <td>L</td>
            <td>Subtraction</tr>
        <tr>
            <td>E</td>
            <td>Zero</td>
            <td>M</td>
            <td>Multiplication</tr>
        <tr>
            <td>F</td>
            <td>Floor</td>
            <td>N</td>
            <td>Addition</tr>
        <tr>
            <td>G</td>
            <td>Zero</td>
            <td>O</td>
            <td>Division</tr>
        <tr>
            <td>H</td>
            <td>Decrement</td>
            <td>P</td>
            <td>Addition</td>
        </tr>
    </table>

    Note that there are a couple of operations that are duplicated. These are common operations, so it makes sense to make them more 
    likely to happen.<br><br>

    With these revised phenotype decoding rules, we've drastically decreased the number of invalid codes. Now, the only way that a genome can be 
    malformed is if it ends in a two-term operator.<br><br>

    With these modifications, we've gone from nearly no chance of a valid phenotype to a fifteen out of sixteen chance that the genotype will create 
    a mathematical function. From here, all that needs to happen is to reevaluate how to implement this new version of the genome, and then run the 
    simulation.<br><br><br><br>
    `;

    document.getElementsByClassName("content")[0].innerHTML = content;
}

export {geneticRevision};