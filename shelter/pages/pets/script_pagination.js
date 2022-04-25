// const BTN_LEFT = document.querySelector("#pets__scroller__button_left");
// const BTN_RIGHT = document.querySelector("#pets__scroller__button_right");
// const CAROUSEL = document.querySelector("#carousel");
// const ITEM_LEFT = document.querySelector("#item-left");
// const ITEM_RIGHT = document.querySelector("#item-right");

const PAGINATOR = document.querySelector(".cards_box");
const BTN_PAGE = document.querySelector(".paginator_page");
const BTN_LEFT = document.querySelector(".paginator_left");
const BTN_RIGHT = document.querySelector(".paginator_right");
const BTN_START = document.querySelector(".paginator_start");
const BTN_FINISH = document.querySelector(".paginator_finish");

const cardBase = [{
        "name": "Jennifer",
        "img": "../../assets/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "../../assets/pets-sopfia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "../../assets/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Scarlett",
        "img": "../../assets/pets-scarlet.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Katrine",
        "img": "../../assets/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "../../assets/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "../../assets/pets-freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "../../assets/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    },
]

const pageLeft = () => {
    if (currentPage == 1) return
    currentPage--;
    PAGINATOR.innerHTML = "";
    PAGINATOR.innerHTML = listOfPages[currentPage - 1].join("");
    BTN_PAGE.innerHTML = currentPage;
    BTN_RIGHT.classList.add("navigation_button_active");
    BTN_FINISH.classList.add("navigation_button_active");
    if (currentPage == 1) {
        BTN_LEFT.classList.remove("navigation_button_active");
        BTN_START.classList.remove("navigation_button_active");
    }
}

const pageStart = () => {
    if (currentPage == 1) return
    currentPage = 1;
    PAGINATOR.innerHTML = "";
    PAGINATOR.innerHTML = listOfPages[currentPage - 1].join("");
    BTN_PAGE.innerHTML = currentPage;
    BTN_LEFT.classList.remove("navigation_button_active");
    BTN_START.classList.remove("navigation_button_active");
    BTN_RIGHT.classList.add("navigation_button_active");
    BTN_FINISH.classList.add("navigation_button_active");
}

const pageRight = () => {
    if (currentPage == listOfPages.length) return
    BTN_LEFT.classList.add("navigation_button_active");
    BTN_START.classList.add("navigation_button_active");
    currentPage++;
    PAGINATOR.innerHTML = "";
    PAGINATOR.innerHTML = listOfPages[currentPage - 1].join("");
    BTN_PAGE.innerHTML = currentPage;
    if (currentPage == listOfPages.length) {
        BTN_RIGHT.classList.remove("navigation_button_active");
        BTN_FINISH.classList.remove("navigation_button_active");
    }
}

const pageFinish = () => {
    if (currentPage == listOfPages.length) return
    currentPage = listOfPages.length;
    PAGINATOR.innerHTML = "";
    PAGINATOR.innerHTML = listOfPages[currentPage - 1].join("");
    BTN_PAGE.innerHTML = currentPage;
    BTN_LEFT.classList.add("navigation_button_active");
    BTN_START.classList.add("navigation_button_active");
    BTN_RIGHT.classList.remove("navigation_button_active");
    BTN_FINISH.classList.remove("navigation_button_active");
}

const listOfPages = [];
let currentPage = 1;

BTN_PAGE.innerHTML = currentPage;

//GENERATE PAGES. SHOW FIRST PAGE-----------------------------------------------
if (window.matchMedia('(max-width: 1023px) and (min-width: 750px)').matches) {
    PAGINATOR.innerHTML = (generateMatrixOfCards(6)[0].join(""));
}
if (window.matchMedia('(min-width: 320px) and (max-width: 749px)').matches) {
    PAGINATOR.innerHTML = (generateMatrixOfCards(3)[0].join(""));
}
if (window.matchMedia('(min-width: 1024px)').matches) {
    PAGINATOR.innerHTML = (generateMatrixOfCards(8)[0].join(""));
}
//------------------------------------------------------------------------------

BTN_LEFT.addEventListener("click", pageLeft);
BTN_RIGHT.addEventListener("click", pageRight);
BTN_START.addEventListener("click", pageStart);
BTN_FINISH.addEventListener("click", pageFinish);

function generateMatrixOfCards(cardsOnPage) {
    const listOfCards = [];
    const numberOfCards = 48;
    const numberOfPages = Math.ceil(numberOfCards / cardsOnPage);

    // Generate cards
    let cardCounter = 0;
    for (let i = 0; i < numberOfCards; i++) {
        if (cardCounter == 8) cardCounter = 0;
        let nameOfPet = cardBase[cardCounter].name;
        let imageOfPet = cardBase[cardCounter].img;
        listOfCards.push(`<div class="card"><img src="${imageOfPet}" alt=""><p>${nameOfPet}</p><a class="card__button">Learn more</a></div>`);
        cardCounter++;
    } //Can be optimized. Generate half of array and then add copy//!!!!!!!!

    // Generate pages
    for (let currPage = 1; currPage <= numberOfPages; currPage++) {
        let trimStart = (currPage - 1) * cardsOnPage;
        let trimEnd = trimStart + cardsOnPage;
        listOfPages[currPage - 1] = listOfCards.slice(trimStart, trimEnd);
    }

    //Shuffle cards pages
    for (let i = 0; i < numberOfPages; i++) {
        shuffle(listOfPages[i]);
    }

    //Shuffle pages
    shuffle(listOfPages);

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    return listOfPages;
}