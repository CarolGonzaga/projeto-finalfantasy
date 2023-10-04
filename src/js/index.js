// Recuperando cada personagem
const personagens = document.querySelectorAll('.personagem');

// Loop para percorrer todos os personagens e adicionar uma função de escuta
personagens.forEach(personagem => {
    personagem.addEventListener('click', () => {
        // Personagem que está com a classe 'selecionado'
        const personagemSelecionado = document.querySelector('.selecionado');
        
        // Removendo a classe 'selecionado'
        personagemSelecionado.classList.remove('selecionado');
        
        // Adicionando a classe 'selecionado'
        personagem.classList.add('selecionado');

        // Recuperando a imagem grande
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        // Recuperando o id do personagem selecionado
        const idPersonagem = personagem.attributes.id.value;

        // Alterando a imagem grande conforme personagem selecionado
        imagemPersonagemGrande.src = `./src/imagens/player-${idPersonagem}.png`;

        // Recuperando o nome do personagem
        const nomePersonagem = document.getElementById('nome-personagem');
        
        // Alterando o nome conforme personagem selecionado
        nomePersonagem.innerText = 
        personagem.getAttribute('data-name');

        // Recuperando a descrição do personagem
        const descricaoPersonagem = document.getElementById('descricao');

        // Alterando a descrição conforme personagem selecionado
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');


    })
})