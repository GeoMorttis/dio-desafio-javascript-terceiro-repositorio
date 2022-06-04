// Solução 1
function verificaPalindromo(string) {
    if (!string) return "String Inexistente";

    return string.split("").reverse().join("") === string;
}

// console.log(verificaPalindromo("ovo"));      //Script para testar no Console.

// Solução 2
function verificaPalindromo2(string) {
    if (!string) return "String Inexistente";

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]) {
        return false;
        }
    }
    return true;
}

// console.log(verificaPalindromo2("acaiaca"));      //Script para testar no Console.

// Solução 3
function verificaPalindromo3(string) {
    if (!string) return "String Inexistente";

    var re = /[\W_]/g;
    var lowRegString = string.toLowerCase().replace(re, '');
    var reverseString = lowRegString.split('').reverse().join('');
    return reverseString === lowRegString;
}

// console.log(verificaPalindromo3("A man, a plan, a canal. Panama"));      //Script para testar no Console.

// Solução 4
function verificaPalindromo4(string) {
    if (!string) return "String Inexistente";

    var re = /[^A-Za-z0-9]/g;
    string = string.toLowerCase().replace(re, '');
    var len = string.length;
    for (var i = 0; i < len/2; i++) {
        if (string[i] !== string[len -1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(verificaPalindromo4("A man, a plan, a canal. Panama"));      //Script para testar no Console.