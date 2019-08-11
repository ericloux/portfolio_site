function genetic() {
    let content = "";

    content += `   
    <h3>
        Genetic Algorithms
    </h3>

    In my opinion, one of the most exciting and intriguing developments is that of genetic algorithms. A genetic algorithm creates a program, but 
    instead of having a human type out every line of code, the computer writes the program itself.You might be asking yourself how the heck that 
    works and wondering if it's going to end up with the Terminator coming back for you, but that's not the case at all! Instead, the programmer 
    takes inspiration from something that is all around us - genetics.<br><br>

    Now, some people are immediately put off by the term genetics, even though evolution has been accepted by the Catholic Church since 1950. The 
    "genes" in genetic algorithms are not exactly the same concept as those found in DNA. However, the concept can be applied to computer code 
    through clever adaptation.<br><br>

    Here's an incredibly simplified overview of how genes work organisms. A strand of DNA serves as a blueprint, attracting amino acids to its end. 
    From there, the amino acids move along the strand of DNA, combining with other amino acids and eventually creating a molecule. This molecule 
    then separates and interacts with the other molecules to form just about every possible type of organic matter. The DNA splits in half during 
    this process, and then each half can regenerate the other half and you're left with two identical strands of DNA. (Somewhere, a geneticist is 
    weeping after reading this.)<br><br>

    When two organisims reproduce, the genetic material can combine as well. Portions of each of the parents' genes are mixed with portions of the 
    others. Likewise, sometimes a perfect copy isn't created when a strand splits. This is known as a mutation, and can happen from something as 
    common as solar radiation hitting the point the genes split. Of course, that can completely change what the genes create!<br><br>

    Reproducing this in computers is easy. First, you need to come up with a way to represent the commands you want your computer to be able to use. 
    From there, you write a program that can create those genes (the genotype), as well as test them out (the phenotype). The quintessential example 
    is, of course, creating a simulated organism. Instead of having the genes create physical material, they might instead represent traits, such as 
    ability to sense other organisms. In this example, the genotype is the actual genes to create the creature, while the phenotype is how those 
    creatures interact with each other in whatever environment they're put into.<br><br>

    From there, a way to determine which organism is best is determined. This quantity is known as its fitness. In our organism example, it may be 
    the organism that gets the most food, or lives the longest. Orgamisms with higher fitness are more likely to be selected to have their genes 
    passed on to the next generation. This is done by mixing and mutating genes as described above. From that, we end up with a completely new 
    generation, which is then put through the test again and the process repeats.<br><br>

    Genetic algorithms can solve a variety of problems that humans just aren't good at. Instead of plodding through case after case of trial by 
    error, a programmer can have a program that tests a hundred cases at once, chooses the best solutions, and then continues refining bit by bit 
    until the problem is solved. <br><br>

    I had previously created a genetic algorithm, but the implementation was lacking a bit. Since then, I've been wanting to give it another shot. 
    To that end, I'm writing this series of blog entries to document and share the process. Next time, I'll be outlining some of what I'm planning 
    to aim for.<br><br>
    `;

    document.getElementsByClassName("content")[0].innerHTML = content;
}

export {genetic};