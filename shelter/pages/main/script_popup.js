const MODAL_WINDOW_BACKGROUND = document.querySelector('.modal-window-background');
const MODAL_WINDOW = document.querySelector('.modal-window-wrapper');
const PET_NAME = document.querySelector('.modal-window__content_pet-name');
const PET_IMAGE = document.querySelector('.modal-window__pet-image');
const PET_BREAD = document.querySelector('.modal-window__content_pet-bread');
const PET_DESCRIPTION = document.querySelector('.modal-window__content_pet-description');
const PET_AGE = document.querySelector('.modal-window__content_pet-age');
const PET_INOCULATIONS = document.querySelector('.modal-window__content_pet-inoculations');
const PET_DISEASES = document.querySelector('.modal-window__content_pet-diseases');
const PET_PARASITES = document.querySelector('.modal-window__content_pet-parasites');
const EXIT_BUTTON = document.querySelector('.modal-window__exit-button');

findCards();

MODAL_WINDOW_BACKGROUND.addEventListener('click', closeModalWindow);
EXIT_BUTTON.addEventListener('click', closeModalWindow);

function findCards() {
    document.querySelectorAll('.card').forEach(item => {
        item.addEventListener('click', event => {
            showName(item);
            WINDOW.classList.add("scroll_lock");
            MODAL_WINDOW.classList.add("modal-window_active");
            MODAL_WINDOW_BACKGROUND.classList.add("modal-window-background_active");
        })
    })
}

function closeModalWindow() {
    WINDOW.classList.remove("scroll_lock");
    MODAL_WINDOW_BACKGROUND.classList.remove("modal-window-background_active");
    MODAL_WINDOW.classList.remove("modal-window_active");
}

function showName(item) {
    let petName = item.children[1].innerText;

    let petBaseCardNumber;
    for (let i = 0; i < cardBase.length; i++) {
        if (cardBase[i]["name"] == petName) {
            petBaseCardNumber = i;
            break
        }
    }

    let petImgLink = cardBase[petBaseCardNumber]["img"];
    let petType = cardBase[petBaseCardNumber]["type"];
    let petBread = cardBase[petBaseCardNumber]["breed"];
    let petDescription = cardBase[petBaseCardNumber]["description"];
    let petAge = cardBase[petBaseCardNumber]["age"];
    let petInoculations = cardBase[petBaseCardNumber]["inoculations"];
    let petDiseases = cardBase[petBaseCardNumber]["diseases"];
    let petParasites = cardBase[petBaseCardNumber]["parasites"];

    PET_IMAGE.src = petImgLink;
    PET_NAME.innerHTML = petName;
    PET_BREAD.innerHTML = petType + " - " + petBread;
    PET_DESCRIPTION.innerHTML = petDescription;
    PET_AGE.innerHTML = "<b>Age: </b>" + petAge;
    PET_INOCULATIONS.innerHTML = "<b>Inoculation: </b>" + petInoculations;
    PET_DISEASES.innerHTML = "<b>Diseases: </b>" + petDiseases;
    PET_PARASITES.innerHTML = "<b>Parasites: </b>" + petParasites;
    // if (window.matchMedia('(min-width: 320px) and (max-width: 749px)').matches) {
    //     PET_IMAGE.src = "";
    // }
};