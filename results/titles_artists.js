const navTitlesButton = document.querySelector(".navbar p:nth-child(1)");
const navArtistsButton = document.querySelector(".navbar p:nth-child(2)");

const contenairTitle = document.querySelector(".cardTitleContenair");
const contenairArtist = document.querySelector(".cardArtistsContenair");

navTitlesButton.addEventListener("click", () => {
    navTitlesButton.classList.add("activeNavbar");
    navArtistsButton.classList.remove("activeNavbar");

    contenairTitle.classList.add("activeContenair");
    contenairArtist.classList.remove("activeContenair");
});

navArtistsButton.addEventListener("click", () => {
    navArtistsButton.classList.add("activeNavbar");
    navTitlesButton.classList.remove("activeNavbar");

    contenairArtist.classList.add("activeContenair");
    contenairTitle.classList.remove("activeContenair");
});
