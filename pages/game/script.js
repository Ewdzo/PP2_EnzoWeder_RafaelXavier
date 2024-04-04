const animals = [
    { name: "Hippopotamus", icon: "🦛", maxAttack: 10 },
    { name: "Bear", icon: "🐻", maxAttack: 10 },
    { name: "Lion", icon: "🦁", maxAttack: 9 },
    { name: "Gorilla", icon: "🦍", maxAttack: 9 },
    { name: "Orangutan", icon: "🦧", maxAttack: 8 },
    { name: "Horse", icon: "🐴", maxAttack: 8 },
    { name: "Hawk", icon: "🦅", maxAttack: 7 },
    { name: "Wolf", icon: "🐺", maxAttack: 7 },
    { name: "Monkey", icon: "🐒", maxAttack: 6 },
    { name: "Dog", icon: "🐕", maxAttack: 6 },
    { name: "Fox", icon: "🦊", maxAttack: 5 },
    { name: "Racoon", icon: "🦝", maxAttack: 5 },
    { name: "Peacock", icon: "🦚", maxAttack: 4 },
    { name: "Spider", icon: "🕷️", maxAttack: 4 },
    { name: "Cat", icon: "🐈‍", maxAttack: 3 },
    { name: "Hedgehog", icon: "🦔", maxAttack: 3 },
    { name: "Turtle", icon: "🐢", maxAttack: 2 },
    { name: "Sloth", icon: "🦥", maxAttack: 2 },
    { name: "Chicken", icon: "🐔", maxAttack: 1 },
    { name: "Bat", icon: "🦇", maxAttack: 1 }
];

const getRandom = (max) => {
    return Math.floor(Math.random() * max);
}

const getAnimal = (index) => {
    const baseAnimal = animals[index];
    const animal = {
        name: baseAnimal.name,
        icon: baseAnimal.icon,
        // attack: 1 + getRandom(baseAnimal.maxAttack)
        attack: baseAnimal.maxAttack
    };

    return animal;
}

const getDeck = () => {
    return [getAnimal(getRandom(animals.length)), getAnimal(getRandom(animals.length)), getAnimal(getRandom(animals.length))];
}

const player = {
    deck: null,
    points: 0,
    selectedCard: null
}

const bot = {
    deck: null,
    points: 0,
    selectedCard: null
}

const updateScoreboard = () => {
    document.getElementById("scoreboard").textContent = `${player.points} x ${bot.points}`
}

const generateCard = (id, card, user) => {
    const flipCard = document.getElementsByClassName('flip-card')[0].cloneNode(true);
    flipCard.classList.toggle('hidden');
    const flipCardDiv = flipCard.childNodes[1].childNodes[1].childNodes;
    const animalIcon = flipCardDiv[1].childNodes[1];
    const animalName = flipCardDiv[1].childNodes[3];
    const animalAttack = flipCardDiv[3].childNodes[3];

    animalIcon.textContent = card.icon;
    animalName.textContent = card.name;
    animalAttack.textContent = card.attack

    if (user) {
        flipCard.childNodes[1].classList.toggle('show');
        flipCard.onclick = () => {
            if (!player.selectedCard) {
                flipCard.setAttribute("id", "user-selected");
                player.selectedCard = card;
                player.deck.splice(player.deck.indexOf(card), 1)
            }

            if (player.selectedCard && bot.selectedCard) animalFight();
        }
    } else {
        flipCard.onclick = () => {
            if (!bot.selectedCard && player.selectedCard) {
                flipCard.setAttribute("id", "bot-selected");
                bot.selectedCard = card;
                bot.deck.splice(bot.deck.indexOf(card), 1)
            }

            if (player.selectedCard && bot.selectedCard) animalFight();
        }
    }

    document.getElementById(id).appendChild(flipCard);
};

const animalFight = async () => {
    setTimeout(function () {
        if (player.selectedCard.attack > bot.selectedCard.attack) player.points++
        else if (player.selectedCard.attack < bot.selectedCard.attack) bot.points++
        else {
            player.points++
            bot.points++
        }

        updateScoreboard();

        document.getElementById("bot-selected").classList.add('hide-bot-card');
        document.getElementById("bot-selected").setAttribute("id", "");
        document.getElementById("user-selected").classList.add('hide-player-card');
        document.getElementById("user-selected").setAttribute("id", "");
        player.selectedCard = null;
        bot.selectedCard = null;
    }, 2500);

    setTimeout(function () {
        if (player.points >= 2 && player.points > bot.points) document.getElementById("scoreboard").textContent = "VOCÊ GANHOU!"
        else if (bot.points >= 2 && player.points < bot.points) document.getElementById("scoreboard").textContent = "VOCÊ PERDEU!"
        else if (player.points == bot.points && player.deck.length == 0 && bot.deck.length == 0) document.getElementById("scoreboard").textContent = "EMPATE!"
    }, 10000);
}

player.deck = getDeck();
bot.deck = getDeck();

player.deck.forEach((e, i) => generateCard("user-deck", e, true))
bot.deck.forEach((e, i) => generateCard("bot-deck", e))

document.getElementById("reload-button").onclick = () => location.reload();