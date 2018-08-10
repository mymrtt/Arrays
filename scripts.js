window.addEventListener("load", aprendendoArrays);

function aprendendoArrays(){

    // var frutas = ["laranja", "maçã", "pera", "uva", "melancia" ]
    var  frutas = [];
    frutas.push("jambo");
    frutas.push("melão");
    frutas.unshift("tangerina");
    console.log(frutas);

    frutas.shift(); 
    frutas[1] = "mamão";
    console.log(frutas);
    frutas.splice(1, 0, "limão"); // adicionar //
    frutas.splice(0, 2, "manga", "tomate") // adicionar excluindo //
    frutas.splice(0, 0, "kaki, kiwi")   // adicionar sem excluir //
    console.log(frutas);


    var frutas1 = ["laranja", "maçã", "pera"];
    var frutas2 = ["uva", "melancia"];
    var frutas3 = ["limão", "tomate"]

    frutas4 = frutas1.concat(frutas2, frutas3);

    console.log (frutas4);
    frutas4.sort();
    console.log(frutas4);

    //criei em js uma <ul>
    var listaDefrutas = document.createElement('ul');
    //selecionei o <body>
    var body = document.querySelector('body');
    //anexei a <ul> na <body> do documento
    body.appendChild(listaDefrutas);
    var itemDeLista;

    frutas4.forEach(function(elemento){
        //criei um <li>
        itemDeFrutas = document.createElement('li');
        //coloquei o nome da fruta como conteudo da <li>
        itemDeFrutas.innerHTML = elemento; //<li>nome da fruta</li>
        //anexei o <li> criado na <ul>
        listaDefrutas.appendChild(itemDeFrutas);
    });

    // var numeros = [23, 50, 0, -2];
    // console.log(numeros[2]);

}