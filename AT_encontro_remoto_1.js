let listadepecas = ["coxim", "pistao", "filtro de oleo"]

if (listadepecas.length <= 10) {
    console.log("é possivel o cadastro de peças!")
} else {
    console.log("Nao a espaço na lista, impossivel cadastrar!")
}

let peso = 60;

if (peso < 50) {
    console.log("A peça deve possuir um minimo de 50g")
} else {
    console.log("A peça possui peso adequado!")
}

let nomepeca = "pistao";

if (nomepeca.length > 3) {
    console.log("nome da peca atende a condição!")
} else if (nomepeca.length == 0) {
    console.log("o nome nao pode esta vazio.")
} else {
    console.log("O nome deve ter masi de 3 caracteres!!")
}

switch (nomepeca.length) {
    case 0:
        console.log("o nome nao pode esta vazio.")        
        break;
    case 1:
    case 2:
    case 3:
        console.log("O nome deve ter masi de 3 caracteres!!")
        break;
    default:
        console.log("nome da peca atende a condição!")
        break;
}