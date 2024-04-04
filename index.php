<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>APExPredator</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <header>
        <h1>🍃 APExPredator 🍃</h1>
        <nav>
            <a href="./" id="current-page">Início</a>
            <a href="./pages/game/">Jogar</a>
            <a href="./pages/contact/">Contato</a>
        </nav>
    </header>
    <main>
        <article>
            <h1>APExPredator</h1>
            <section>
                <p>O jogo APExPredator é baseado em cartas associadas a diferentes animais onde cada animal tem um status de força que é utilizado para determinar um vencedor.</p>
                <p>Durante o jogo, o jogador recebe um deck de 3 cartas, onde ele pode escolher uma das três para o turno que irá iniciar após a escolha, em seguida ele pode escolher entre uma das cartas que o adversário possui.</p>
                <p>Caso a carta do jogador seja mais forte que a carta do adversário, o jogador ganha um ponto, caso contrário o adversário ganha um ponto, em caso de empate ambos ganham um ponto.</p>
                <p>Ganha a rodada quem conseguir atingir dois pontos primeiro, no caso dos dois entrarem em empate com dois mais um turno será jogado, caso haja empate no terceiro turno a rodada termina em empate.</p>
            </section>
            <h1>Animais</h1>
            <section >
                <p>O jogo APExPredator é baseado em cartas associadas aos seguintes animais:</p>
                <div class="flip-card hidden">
                    <div class="flip-card-inner">
                        <article class="card card-front">
                            <div>
                                <h1 id="animal-icon"></h1>
                                <h2 id="animal-name"></h2>
                            </div>
                            <section>
                                <img src="./assets/sword_icon.png" alt="Sword Icon" height="40" width="40">
                                <h2 id="animal-attack"></h2>
                            </section>
                        </article>
                        <article class="card card-back">
                            <img src="./assets/sword_icon.png" alt="Sword Icon" height="50" width="50">
                        </article>
                    </div>
                </div>
                <div id="cards-expositor"></div>
            </section>
            <h1>Intuito do Jogo</h1>
            <section >
                <p>O jogo APExPredator foi criado como um trabalho final para a disciplina de Programação para Internet I na turma do semestre 2023.2 do curso de Sistemas de Informação da Universidade Federal de Uberlândia, Campus Monte Carmelo.</p>
            </section>
        </article>
    </main>
    <footer>
        <a href="https://ufu.br">UFU</a>
        <h2>Enzo Weder & Rafael Pimenta @ 2024</h2>
        <a href="./pages/contact/"">Fale Conosco</a>
    </footer>
</body>
</html>