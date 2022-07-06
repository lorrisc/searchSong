//*API Requests - Load Information in page

var userSearch = sessionStorage.getItem("searchBar"); //*userSearch recovery
let valueInput = userSearch;

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "684e288faemsh128fdc46844369ap14b7f0jsn6e2c7b9ee181",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    },
};

fetch("https://shazam.p.rapidapi.com/search?term=" + valueInput + "&locale=fr&offset=0&limit=5", options)
    .then((response) => response.json())
    .then((response) => {
        const loaderGif = document.querySelector("#loader");
        loaderGif.style.visibility = "hidden";

        console.log(response);
        console.log(response.tracks.hits.length);
        for (i = 0; i < response.tracks.hits.length; i++) {
            //*title
            //*card
            let card = document.createElement("article");
            card.className = "cardTitle";
            const containerTitle = document.querySelector(".cardTitleContenair");
            containerTitle.appendChild(card);

            //*image
            let background = document.createElement("img");
            background.className = "backgroundCard";
            background.src = response.tracks.hits[i].track.images.coverart;
            card.appendChild(background);

            //*title
            let titleCard = document.createElement("h2");
            titleCard.textContent = response.tracks.hits[i].track.title;
            card.appendChild(titleCard);

            //*artist
            let artistCard = document.createElement("h3");
            artistCard.textContent = response.tracks.hits[i].track.subtitle;
            card.appendChild(artistCard);

            //*LINKS PARTS
            let linksPart = document.createElement("div");
            linksPart.className = "linksCard";
            card.appendChild(linksPart);

            //*text*/
            let textTop = document.createElement("p");
            textTop.textContent = "Écouter le titre";
            linksPart.appendChild(textTop);

            //*LINKS ICON
            let linksPartIcon = document.createElement("div");
            linksPartIcon.className = "linksCard__icon";
            linksPart.appendChild(linksPartIcon);

            //*Apple music
            let linksApple = document.createElement("a");
            linksApple.href = response.tracks.hits[i].track.hub.actions[1].uri;
            linksPartIcon.appendChild(linksApple);

            let imgApple = document.createElement("img");
            imgApple.src = "../assets/streamingPlateforme/appleMusic.png";
            linksApple.appendChild(imgApple);

            //*Spotify music
            let linksSpotify = document.createElement("a");
            linksSpotify.href = response.tracks.hits[i].track.hub.providers[0].actions[0].uri;
            linksPartIcon.appendChild(linksSpotify);

            let imgSpotify = document.createElement("img");
            imgSpotify.src = "../assets/streamingPlateforme/spotify.png";
            linksSpotify.appendChild(imgSpotify);

            //*Deezer music
            let linksDeezer = document.createElement("a");
            linksDeezer.href = response.tracks.hits[i].track.hub.providers[1].actions[0].uri;
            linksPartIcon.appendChild(linksDeezer);

            let imgDeezer = document.createElement("img");
            imgDeezer.src = "../assets/streamingPlateforme/deezer.png";
            linksDeezer.appendChild(imgDeezer);
        }

        for (i = 0; i < response.artists.hits.length; i++) {
            //*artist
            //*card
            let card = document.createElement("article");
            card.className = "cardArtists";
            const containerArtist = document.querySelector(".cardArtistsContenair");
            containerArtist.appendChild(card);

            //*image
            let background = document.createElement("img");
            background.className = "backgroundCard";
            background.src = response.artists.hits[i].artist.avatar;
            card.appendChild(background);

            //*title
            let titleCard = document.createElement("h2");
            titleCard.textContent = response.artists.hits[i].artist.name;
            card.appendChild(titleCard);

            //*LINKS PARTS
            let linksPart = document.createElement("div");
            linksPart.className = "linksCard";
            card.appendChild(linksPart);

            //*text*/
            let textTop = document.createElement("p");
            textTop.textContent = "Rechercher l'artiste";
            linksPart.appendChild(textTop);

            //*LINKS ICON
            let linksPartIcon = document.createElement("div");
            linksPartIcon.className = "linksCard__icon";
            linksPart.appendChild(linksPartIcon);

            //*Apple music
            let linksApple = document.createElement("a");
            linksApple.href = response.artists.hits[i].artist.weburl;
            linksApple.target = "_blank";
            linksPartIcon.appendChild(linksApple);

            let imgApple = document.createElement("img");
            imgApple.src = "../assets/streamingPlateforme/appleMusic.png";
            linksApple.appendChild(imgApple);

            //*Spotify music
            let linksSpotify = document.createElement("a");
            linksSpotify.href = "spotify:search:" + response.artists.hits[i].artist.name;
            linksPartIcon.appendChild(linksSpotify);

            let imgSpotify = document.createElement("img");
            imgSpotify.src = "../assets/streamingPlateforme/spotify.png";
            linksSpotify.appendChild(imgSpotify);

            //*Deezer music
            // let linksDeezer = document.createElement('a');
            // linksDeezer.href = response.tracks.hits[i].track.hub.providers[1].actions[0].uri
            // linksPartIcon.appendChild(linksDeezer)

            // let imgDeezer = document.createElement("img")
            // imgDeezer.src = '../assets/streamingPlateforme/deezer.png'
            // linksDeezer.appendChild(imgDeezer)

            let carda = document.querySelectorAll(".cardTitle, .cardArtists");
            for (let i = 0; i < carda.length; i++) {
                carda[i].addEventListener("mouseenter", () => {
                    carda[i].style.transform = "rotate(" + 0.5 + "deg)";

                    setTimeout(() => {
                        carda[i].style.transform = "rotate(" + -0.5 + "deg)";
                    }, "150");
                    setTimeout(() => {
                        carda[i].style.transform = "rotate(" + 0 + "deg)";
                    }, "300");
                });
            }
        }
    })
    .catch((err) => console.error(err));
