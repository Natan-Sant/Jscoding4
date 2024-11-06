let casa = {
    cor: 'white',
     sala: 15,
     cozinha: 10,
    quarto: 8,
    banheiro: 10,
};

function celulartamanhototalcasaemm2(
    tamanhosala,
    tamanhocozinha,
    tamanhobanheiro,
    tamanhoquarto,
) {
    const tamanhototal =
    tamanhosala + tamanhoquarto + tamanhocozinha + tamanhobanheiro;
    console.log(`o tamanho da casa é ${tamanhototal}`)
}
calcularTamanhoTotalCasaemM2(
    casa.sala,
    casa.cozinha,
    casa.quarto,
    casa.banheiro,
)


celulartamanhototalcasaemm2: function  (){
    const tamanhototal = this.sala + this.cozinha + this.banheiro +this.quarto;
    console.log(`o tamanho da casa é ${tamanhototal}m²`);
    return tamanhototal;
}

casa.celulartamanhototalcasaemm2();

let a = 2.00000001;

console.log(a);
console.log(a;tofixed(3));

let b = `texto da aula de metodos`;

console.log(b.concat('que eu já dominei totalmente'))

let c = '10110';
console.log(number.parseint(c));
console.log(number.parseint())

const lista = [
    {nome: 'pessoa'}
    
]

const alunosquetiraramzero = listanotas.find(function(aluno)) {
    return aluno.nota === 0 ;
});

console.log(alunosquetiraramzero)

const listanomesalunosaprovados = alunosaprovados.map(function (aluno)){
    return aluno.nome;
});


let a = 2.00000001;

console.log(a);