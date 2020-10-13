const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
console.log(typeof MORSE_TABLE);
function decode(expr) {
    // write your solution here
    let goo = "";
    for (let i = 10 ; i <= expr.length; i = i + 10) {
        let j = i-10;
        let str = expr.substring(j,i);
        let word = "";
        // console.log(str);
        if (str === "**********"){
            goo += " ";
            continue ;
        }
        for (let d = 2; d <= 10; d=d + 2){
            let c = d - 2;
            let letter = str.substring(c,d);
            // console.log(letter);
            if (letter === "10") {
                word += ".";
            } if (letter === "11"){
                word += "-";                
            }
            if (d > 9){
                goo += MORSE_TABLE[word];
                // console.log('word' + word);
                // console.log(MORSE_TABLE[word]);
            }
        }
        
    }
    // console.log(goo);
    return goo;
}

module.exports = {
    decode
}