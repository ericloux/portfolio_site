function geneticAlgorithm() { 
    class Genome {
        constructor(motherGenes, fatherGenes) {
            this.genome = "";
            if (fatherGenes == undefined) {
                for (let i = 0; i < 50; i++) {
                    this.genome += String.fromCharCode(Math.floor(Math.random()*16)+64);
                }
            } else {

            }
        }

        getGenome() {
            return this.genome;
        }

        getFormula() {
            let formula = "0";
            let numMode = true;
            let operatorReady = true;
            for (let i = 0; i < 50; i++) {
                if (numMode) {
                    switch (this.genome[i]) {
                    case "@":
                        operatorReady = true;
                        formula += "0";
                        break;

                    case "A":
                        operatorReady = true;
                        formula += "1";
                        break;

                    case "B":
                        operatorReady = true;
                        formula += "2";
                        break;

                    case "C":
                        operatorReady = true;
                        formula += "3";
                        break;

                    case "D":
                        operatorReady = true;
                        formula += "4";
                        break;

                    case "E":
                        operatorReady = true;
                        formula += "5";
                        break;

                    case "F":
                        operatorReady = true;
                        formula += "6";
                        break;

                    case "G":
                        operatorReady = true;
                        formula += "7";
                        break;

                    case "H":
                        operatorReady = true;
                        formula += "8";
                        break;

                    case "I":
                        operatorReady = true;
                        formula += "9";
                        break;

                    case "J":
                        operatorReady = true;
                        formula += ".";
                        break;

                    case "K":
                        operatorReady = true;
                        formula += ".";
                        break;

                    case "L":
                        operatorReady = true;
                        formula += "X";
                        break;

                    case "M":
                        operatorReady = true;
                        formula += "X";
                        break;

                    case "N":
                        if (operatorReady == true) numMode = false;
                        break;

                    case "O":
                        if (operatorReady == true) numMode = false;
                        break;
                    }
                } else {
                    switch (this.genome[i]) {
                    case "@":
                        formula += "*-1";
                        break;

                    case "A":
                        formula += ".ceil()";
                        break;

                    case "B":
                        formula += "*-1";
                        break;

                    case "C":
                        formula += "++";
                        break;

                    case "D":
                        formula += "*0";
                        break;

                    case "E":
                        formula += ".floor()";
                        break;

                    case "F":
                        formula += "*X";
                        break;

                    case "G":
                        formula += "--";
                        break;

                    case "H":
                        operatorReady = false;
                        formula += " / ";
                        numMode = true;
                        break;

                    case "I":
                        operatorReady = false;
                        formula += " - ";
                        numMode = true;
                        break;

                    case "J":
                        operatorReady = false;
                        formula += " / ";
                        numMode = true;
                        break;

                    case "K":
                        operatorReady = false;
                        formula += " - ";
                        numMode = true;
                        break;

                    case "L":
                        operatorReady = false;
                        formula += " * ";
                        numMode = true;
                        break;

                    case "M":
                        operatorReady = false;
                        formula += " + ";
                        numMode = true;
                        break;

                    case "N":
                        operatorReady = false;
                        formula += " * ";
                        numMode = true;
                        break;

                    case "O":
                        operatorReady = false;
                        formula += " + ";
                        numMode = true;
                        break;
                    }
                }
            }
            return formula;
        }

        result(input) {
            let runningTotal = 0;
            let thisTerm = "0";
            let decimalPlaced = false;
            let inputExponent = 0;
            let lastOpCode = null;

            let numMode = true;
            let operatorReady = true;
            for (let i = 0; i < 50; i++) {
                if (numMode) {
                    switch (this.genome[i]) {
                    case "@":
                        operatorReady = true;
                        thisTerm += "0";
                        break;

                    case "A":
                        operatorReady = true;
                        thisTerm += "1";
                        break;

                    case "B":
                        operatorReady = true;
                        thisTerm += "2";
                        break;

                    case "C":
                        operatorReady = true;
                        thisTerm += "3";
                        break;

                    case "D":
                        operatorReady = true;
                        thisTerm += "4";
                        break;

                    case "E":
                        operatorReady = true;
                        thisTerm += "5";
                        break;

                    case "F":
                        operatorReady = true;
                        thisTerm += "6";
                        break;

                    case "G":
                        operatorReady = true;
                        thisTerm += "7";
                        break;

                    case "H":
                        operatorReady = true;
                        thisTerm += "8";
                        break;

                    case "I":
                        operatorReady = true;
                        thisTerm += "9";
                        break;

                    case "J":
                    case "K":
                        if (operatorReady == false) {
                            operatorReady = true;
                            thisTerm += "0";
                        }
                        if (decimalPlaced == false) {
                            thisTerm += ".";
                            decimalPlaced = true;
                        }
                        break;

                    case "L":
                    case "M":
                        operatorReady = true;
                        inputExponent++;
                        break;

                    case "N":
                    case "O":
                        if (operatorReady == true) {
                            thisTerm = thisTerm * 1;
                            thisTerm = thisTerm * Math.pow(input, inputExponent);
                            numMode = false;
                        }
                        break;
                    }
                } else {
                    switch (this.genome[i]) {
                    case "@":
                        thisTerm *= -1;
                        break;

                    case "A":
                        thisTerm = Math.ceil(thisTerm);
                        break;

                    case "B":
                        thisTerm *= -1;
                        break;

                    case "C":
                        thisTerm++;
                        break;

                    case "D":
                        thisTerm *= 0;
                        break;

                    case "E":
                        thisTerm = Math.floor(thisTerm);
                        break;

                    case "F":
                        thisTerm *= input;
                        break;

                    case "G":
                        thisTerm--;
                        break;

                    case "H":
                    case "I":
                    case "J":
                    case "K":
                    case "L":
                    case "M":
                    case "N":
                    case "O":
                        runningTotal = this.applyOpCode(runningTotal*1, thisTerm*1, lastOpCode);
                        lastOpCode = this.genome[i];
                        operatorReady = false;
                        numMode = true;
                        thisTerm = "0";
                        decimalPlaced = false;
                        inputExponent = 0;
                        break;
                    }
                }
                // console.log(`${i}: Gene: ${this.genome[i]} thisTerm: ${thisTerm} runningTotal: ${runningTotal} exponent: ${inputExponent}`);
                // console.log(`Term w/ input: ${thisTerm * Math.pow(input, inputExponent)} lastOpCode: ${lastOpCode}`);
            }

            thisTerm = thisTerm * 1;
            thisTerm = thisTerm * Math.pow(input, inputExponent);
            if (operatorReady) runningTotal = this.applyOpCode(runningTotal, thisTerm, lastOpCode);

            return runningTotal*1;
        }

        applyOpCode(firstTerm, secondTerm, opCode) {
            switch (opCode) {
            case "H":
            case "J":
                if (secondTerm == 0) return 0;
                return (firstTerm / secondTerm);
            
            case "I":
            case "K":
                return (firstTerm - secondTerm);

            case "L":
            case "N":
                return (firstTerm * secondTerm);

            case "M":
            case "O":
                return (firstTerm + secondTerm);

            default:
                return secondTerm;
            }
        }
    }

    const goalArray = [8, 5, 12, 12, 15, 23, 15, 18, 12, 4];

    function getFitness (argArray) {
        let fitness = 0
        for (let i = 0; i < 9; i++) {
            fitness += Math.pow(((goalArray[i] - goalArray[i+1] - argArray[i] + argArray[i+1] + 52) %26 + 26) % 26, 2);
        }
        return fitness;
    }

    let myGenome = new Genome;
    console.log(myGenome.getGenome());
    console.log(myGenome.getFormula());

    let resultsArray = new Array(10);

    for (let i = 0; i < 10; i++)
    {
        resultsArray[i] = myGenome.result(i+1);
    }

    for (let i =0; i < 9; i++) {
        console.log(`${i}\t${goalArray[i]-goalArray[i+1]}\t${resultsArray[i]-resultsArray[i+1]}\t
            ${Math.pow(((goalArray[i] - goalArray[i+1] - resultsArray[i] + resultsArray[i+1] + 52) %26 + 26) % 26, 2)}`);
    }

    console.log(getFitness(resultsArray));

    let content = "";

    content += `
    <p>    
        This page is under construction as I build my genetic algorithm. In the meantime, check the console!
        A random Genome is created and evaluated for the numbers 1 through 10. Each step of the calculation is 
        then logged.
    </p>
    `;

    document.getElementsByClassName("content")[0].innerHTML = content;
}

export {geneticAlgorithm};