//conectar com a API utilizndo FECH

fetch('dados.json').then(resposta => resposta.json()).then(corpo =>{
    console.log(corpo)

document.getElementById('imagem').innerHTML = corpo.imagem;
document.getElementById('nome').innerHTML = corpo.nome;
document.getElementById('preco').innerHTML = corpo.preco;
document.getElementById('idade').innerHTML = corpo.idade;

})