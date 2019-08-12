function geneticAlgorithm() {
    let content = "";

    content += `   
    <h3>
        Genetic Algorithm
    </h3>
        Replace me with your content!
    `;

    document.getElementsByClassName("content")[0].innerHTML = content;

    class NumeralString {
        constructor(character) {
            this.myString = "";
            this.myString += character;
            this.geneClass = "numeral";
        }

        addCharacter(character) {
            this.myString += character;
        }

        getValue() {
            return this.myString;
        }

        getGeneClass() {
            return this.geneClass;
        }
    }

    class DecimalString {
        constructor(numeral) {
            this.myString = "";
            this.myString += numeral;
            this.geneClass = "decimal";
        }

        addCharacter(character) {
            this.myString += character;
        }

        getValue() {
            return this.myString;
        }

        getGeneClass() {
            return this.geneClass;
        }
    }

    class Operator {
        constructor(type) {
            this.myOperator = type;
            this.geneClass = "operator";
        }

        applyToTerm(term) {
            switch (this.myOperator) {
            case "E":
                return term + 1;

            case "F":
                return term * 2;

            case "G":
                return term * -1;

            case "H":
                return Math.round(term);

            case "I":
                return Math.ceiling(term);

            case "K":
                return Math.abs(term);

            case "U":
                return term - 1;

            case "V":
                return (term % 2) / 2;

            case "W":
                return 0;

            case "Y":
                return Math.floor(term);

            default:
                console.log(`Error with term key ${term}`);
                return;
            }
        }

        getGeneClass() {
            return this.geneClass;
        }
    }

    class Term {
        constructor(value) {
            if (value == "Z") {
                this.myValue = Math.PI;
            } else {
                this.myValue = value;
            }
            this.geneClass = "term";
        }

        getValue() {
            return myValue;
        }

        getGeneClass() {
            return this.geneClass;
        }
    }

    class Function {
        constructor(type) {
            this.myOperator = type;
            this.geneClass = "function";
        }

        applyToTerms(firstTerm, secondTerm) {
            switch (this.myOperator) {
            case "L":
                return (firstTerm | secondTerm);

            case "M":
                return (firstTerm + secondTerm);

            case "N":
                return (firstTerm * secondTerm);

            case "O":
                return Math.pow(firstTerm, secondTerm);

            case "[":
                return (firstTerm & secondTerm);

            case "\\":
                return (firstTerm ^ secondTerm);

            case "]":
                return (firstTerm - secondTerm);

            case "^":
                return (firstTerm / secondTerm);

            case "_":
                return (firstTerm % secondTerm);
            }
        }

        getGeneClass() {
            return this.geneClass;
        }
    }

    class Genome {
        constructor(mother, father) {
            this.genes = "";
                
            if (father == undefined) {
                for (let i = 0; i < 50; i++) {
                    let newChar = Math.floor(Math.random()*32);
                    this.genes += String.fromCharCode(64+newChar);
                }
            } else {

                // determine which parent the first genome will come from
                if (Math.random() < .5) {
                    let temp = mother;
                    mother = father;
                    father = temp;
                }
                let switchPoint = Math.floor(Math.random()*50);

                for (let i =0; i < switchPoint; i++) {
                    this.genes += mother.getGeneAt(i);
                }
                for (let i = switchPoint; i < 50; i++) {
                    this.genes += father.getGeneAt(i);
                }
            }
        }

        evaluateGenome(inputValue) {
            this.formula = new Array();
            switch (this.getGeneClass(this.genes[0])) {
            case "numeral":
                this.formula.push(new NumeralString(this.genes[0]));
                break; 

            case "operator":
            case "function":
                return false;

            case "decimal":
                this.formula.push(new DecimalString(this.genes[0]));
                break;

            case "term":
                if (this.genes[0] == "Z") this.formula.push(new Term("Z"));
                else this.formula.push(new Term(inputValue));
            }

            for (let i = 1; i < 50; i) {
                switch (this.getGeneClass(this.genes[i])) {
                case "numeral":
                    switch (this.formula[this.formula.length - 1].getGeneClass) {
                    case "numeral":
                    case "decimal":
                        this.formula[this.formula.length - 1].addCharacter(this.genes[i]);
                        break;

                    case "function":
                        this.formula.push(new NumeralString(this.genes[i]));
                        break;

                    case "operator":
                    case "term":
                        return false;
                    }
                    break;

                case "operator":
                    switch (this.formula[this.formula.length - 1].getGeneClass) {
                    case "numeral":
                    case "term":
                    case "decimal":
                        return false;

                    case "operator":
                        this.formula.push(new Operator(this.genes[i]));
                        break;

                    case "function":
                        this.formula.push(new Function(this.genes[i]));
                    }

                case "function":
                    switch (this.formula[this.formula.length - 1].getGeneClass) {
                    case "numeral":
                    case "term":
                    case "decimal":
                        this.formula.push(new Function(this.genes[i]));
                        break;

                    case "operator":
                    case "function":
                        return false;
                    }

                case "term":
                    switch (this.formula[this.formula.length - 1].getGeneClass) {
                    case "numeral":
                    case "term":
                    case "decimal":
                        return false;

                    case "operator":
                        this.formula.push(new Term(this.genes[i]));
                        break; 

                    case "function":
                        this.formula.push(new Function(this.genes[i]));
                    }

                case "decimal":
                    switch (this.formula[this.formula.length - 1].getGeneClass) {
                    case "operator":
                    case "function":
                        this.formula.push(new DecimalString(this.genes[i]));
                        break;

                    case "numeral":
                    case "term":
                    case "decimal":
                        return false;
                    }
                }
            }

            console.log(this.formula);
        }

        getNickname() {
            return this.genes;
        }

        getFullname() {
            let output = "";
            for (let i = 0; i < 50; i++) {
                output += this.geneToBinary(this.genes[i]);
            }
            return output;
        }

        getFormula() {
            let output = "";
            for (let i = 0; i < 50; i++) {
                switch (this.genes[i]) {
                case "@":
                    output += "0";
                    break;

                case "A":
                    output += "1";
                    break;
                
                case "B":
                    output += "2";
                    break;
                
                case "C":
                    output += "3";
                    break;

                case "D":
                    output += "4";
                    break;

                case "E":
                    output += "++";
                    break;

                case "F":
                    output += "<<";
                    break;

                case "G":
                    output += " * -1 ";
                    break;

                case "H":
                    output = "round(" + output + ")";
                    break;

                case "I":
                    output = "ceiling(" + output + ")";
                    break;

                case "J":
                    output += "x";
                    break;

                case "K":
                    output = "abs(" + output + ")";
                    break;

                case "L":
                    output += " OR ";
                    break;
                        
                case "M":
                    output += " + ";
                    break;

                case "N":
                    output += " * ";
                    break;

                case "O":
                    output += " ^ ";
                    break;

                case "P":
                    output += "5";
                    break;

                case "Q":
                    output += "6";
                    break;

                case "R":
                    output += "7";
                    break;

                case "S":
                    output += "8";
                    break;

                case "T":
                    output += "9";
                    break;

                case "U":
                    output += "--";
                    break;

                case "V":
                    output += ">>";
                    break;

                case "W":
                    output += " * 0";
                    break;

                case "X":
                    output += ".";
                    break;

                case "Y":
                    output = "floor(" + output + ")";
                    break;

                case "Z":
                    output += " pi ";
                    break;

                case "[":
                    output += " AND ";
                    break;

                case "\\":
                    output += " XOR ";
                    break;

                case "]":
                    output += " - ";
                    break;

                case "^":
                    output += " / ";
                    break;

                case "_":
                    output += " mod ";
                    break;
                }
            }
            return output;
        }

        getGeneAt(position) {
            return this.genes[position];
        }

        getGeneClass(character) {
            switch(character) {
            case "@":
            case "A":
            case "B":
            case "C":
            case "D":
            case "P":
            case "Q":
            case "R":
            case "S":
            case "T":
                return "numeral";
            
            case "E":
            case "F":
            case "G":
            case "H":
            case "I":
            case "K":
            case "U":
            case "V":
            case "W":                
            case "Y":
                return "operator";

            case "J":
            case "Z":
                return "term";

            case "L":
            case "M":
            case "N":
            case "O":
            case "[":
            case "\\":
            case "]":
            case "^":
            case "_":
                return "function";
                    
            case "X":
                return "decimal";
            }
        }

        geneToBinary(character) {
            let output = "";
            let numeral = character.charCodeAt(0) - 64;

            if (Math.floor(numeral/16) == 0) {
                output += "0";
            } else {
                output += "1";
            }

            numeral = numeral % 16;

            if (Math.floor(numeral/8) == 0) {
                output += "0";
            } else {
                output += "1";
            }

            numeral = numeral % 8;

            if (Math.floor(numeral/4) == 0) {
                output += "0";
            } else {
                output += "1";
            }

            numeral = numeral % 4;

            if (Math.floor(numeral/2) == 0) {
                output += "0";
            } else {
                output += "1";
            }

            numeral = numeral % 2;

            if (Math.floor(numeral) == 0) {
                output += "0";
            } else {
                output += "1";
            }

            return output;
        }
    }

    let myGenome = new Genome;

    for (let myGenome = new Genome; myGenome.evaluateGenome() != false; myGenome = new Genome);
    
}

export {geneticAlgorithm};