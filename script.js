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

const generateCard = (id, animal) => {
    const flipCard = document.getElementsByClassName('flip-card')[0].cloneNode(true);
    flipCard.classList.toggle('hidden');
    const flipCardDiv = flipCard.childNodes[1].childNodes[1].childNodes;
    const animalIcon = flipCardDiv[1].childNodes[1];
    const animalName = flipCardDiv[1].childNodes[3];
    const animalAttack = flipCardDiv[3].childNodes[3];
    
    animalIcon.textContent = animal.icon;
    animalName.textContent = animal.name;
    animalAttack.textContent = animal.maxAttack

    flipCard.childNodes[1].classList.toggle('show');
    
    document.getElementById(id).appendChild(flipCard);
};

animals.forEach((e, i) => generateCard("cards-expositor", e, true))