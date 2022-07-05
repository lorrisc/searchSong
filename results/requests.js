let songName = "Au DD";

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "684e288faemsh128fdc46844369ap14b7f0jsn6e2c7b9ee181",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    },
};

fetch("https://shazam.p.rapidapi.com/search?term=" + songName + "&locale=fr&offset=0&limit=5", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));