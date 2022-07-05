//*Switch section (button navbar)*/

//*Navbar button*/
const navTitlesButton = document.querySelector(".navbar p:nth-child(1)");
const navArtistsButton = document.querySelector(".navbar p:nth-child(2)");

//*container*/
const contenairTitle = document.querySelector(".cardTitleContenair");
const contenairArtist = document.querySelector(".cardArtistsContenair");



//*title click*/
navTitlesButton.addEventListener("click", () => {
    navTitlesButton.classList.add("activeNavbar");
    navArtistsButton.classList.remove("activeNavbar");

    contenairTitle.classList.add("activeContenair");
    contenairArtist.classList.remove("activeContenair");
});

//*artists click*/
navArtistsButton.addEventListener("click", () => {
    navArtistsButton.classList.add("activeNavbar");
    navTitlesButton.classList.remove("activeNavbar");

    contenairArtist.classList.add("activeContenair");
    contenairTitle.classList.remove("activeContenair");
});
