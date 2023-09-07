// set random background
let landing = document.querySelector(".landing-page");

let imgSrc = ['images1.jpeg', 'images2.jpeg', 'images3.jpeg', 'images4.jpeg'];

setInterval(() => {
    let randomImag = Math.floor(Math.random() * imgSrc.length);

    landing.style.backgroundImage = 'url("../img/'+imgSrc[randomImag] +'")'
    // console.log(randomImag);
}, 10000);
// set random background 


// start burger icon

let toggleIcon = document.querySelector(".header-area .burger-icon");

let allLinks = document.querySelector(".header-area .links");

toggleIcon.onclick = () => {
    allLinks.classList.toggle('opened');
}


// end burger icon 