function validaArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError('Insira os parâmetros');

        if (typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo object');

        if (typeof num !== 'number') throw new TypeError('Num precisa ser do tipo number');

        if (arr.length !== num) throw new RangeError('Tamanho inválido!');

        return arr;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!")
            console.log(e.message)
        } else if(e instanceof TypeError) {
            console.log("Este erro é um TypeError!")
            console.log(e.message)
        } else if(e instanceof RangeError) {
            console.log("Este erro é um RangeError!")
            console.log(e.message)
        } else {
            console.log("Tipo de erro não esperado:" + e)
        }
    }
}

// console.log(validaArray());      //Chamada para ReferenceError!

// console.log(validaArray(5, 5));      //Chamada para TypeError!

// console.log(validaArray([], 5));        //Chamada para RangeError!

console.log(validaArray([1, 2, 3, 4, 5], 5));  //Chamada para Array sem erros.