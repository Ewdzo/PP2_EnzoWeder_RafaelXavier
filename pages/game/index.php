<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>APExPredator</title>
    <link rel="stylesheet" href="../../style.css">
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <header>

    </header>
    <main>
        <div id="game-screen">
            <div class="flip-card hidden">
                <div class="flip-card-inner">
                    <article class="card card-front">
                        <div>
                            <h1 id="animal-icon"></h1>
                            <h2 id="animal-name"></h2>
                        </div>
                        <section>
                            <img src="../../assets/sword_icon.png" alt="Sword Icon" height="40" width="40">
                            <h2 id="animal-attack"></h2>
                        </section>
                    </article>
                    <article class="card card-back">
                        <img src="../../assets/sword_icon.png" alt="Sword Icon" height="50" width="50">
                    </article>
                </div>
            </div>
            <div id="bot-deck"></div>
            <div id="user-deck"></div>
        </div>
    </main>
</body>

</html>