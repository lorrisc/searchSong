//*Save input value */

let inputSearch = document.querySelector(".searchBar");

inputSearch.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && inputSearch.value != '') {
        sessionStorage.setItem("searchBar", inputSearch.value);//*input value save
        location = "results/results.html";//*page results
    }
});