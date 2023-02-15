console.log("works!")

const slide = [
    {
        image: './img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: './img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: './img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: './img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: './img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
];

const { image, title, text } = slide

let arrowLeft = document.querySelector(".arrow-left");
let arrowRight = document.querySelector(".arrow-right");
let slideEl = document.querySelector(".slide")
let descriptionEl = document.querySelector(".slide-description")
let i = 0

function pushBtn() {
    let imgString = `<img src="${slide[i].image}" alt="Current Slide">`
    slideEl.innerHTML = imgString 
}

function descriptionPrint(){
    let descriptionString = `<h2>${slide[i].title}</h2> <h3>${slide[i].text}</h3>`
    descriptionEl.innerHTML = descriptionString
}

function looper(){
    if(i === 5 ){
        i = 0
    } else if (i === -1 ){
        i = 4
    }
}

arrowRight.addEventListener("click",
    function () {
        console.log("click forward")
        i++ 
        console.log(i)
        looper()
        pushBtn()
        descriptionPrint()
    }
)

arrowLeft.addEventListener("click",
    function () {
        console.log("click backwords")
        i--
        console.log(i)
        looper()
        pushBtn()
        descriptionPrint()
    }

) 