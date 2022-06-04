function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30,
};
const pessoa2 = {
    nome: 'Carla',
    idade: 26,
};
const animal = {
    nome: 'Hulk',
    idade: 5,
    raca: 'Boxer',
};

//console.log(calculaIdade.call(pessoa1, 30));      //Formato de declaração de objeto usando 'call'

console.log(calculaIdade.apply(pessoa2, [30]));     //Formato de declaração de objeto usando 'apply'