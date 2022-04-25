// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

amount = localStorage.getItem("amount");
document.querySelector("#wallet").innerHTML = amount;

const searchmovies = () => {

    let movie = document.querySelector("#search").value;

    const url = `https://api.themoviedb.org/3/search/movie?api_key=9ec49ee61f8a396cf9db6bc6dd6d687c&language=en-US&page=1&include_adult=false&query=${movie}`

    fetch(url).then ( res => {
        return res.json() .then ( res => append(res.results)) ;
    })
}

let movies = document.querySelector("#movies");

const append = (info) => {
    movies.innerHTML = null;
    info.forEach( el => {

        let box = document.createElement("div");

        let image = document.createElement("img");
        image.src = `https://image.tmdb.org/t/p/w500${el.poster_path}`
        image.setAttribute("class", "image");

        let name = document.createElement("h3");
        name.innerText = el.title;

        let btn = document.createElement("button");
        btn.innerText = "Book Now";
        btn.setAttribute("class", "book_now");
        btn.addEventListener("click", function() {
            bookmovie(el);
        })

        box.append(image, name, btn);
        movies.append(box);
    });
};

const bookmovie = (el) =>  {
    localStorage.setItem("movie", JSON.stringify(el));
    window.location.href = "checkout.html";
}

let id;
const debounce = (delay) => {
    if ( id ){
        clearTimeout(id);
    }
    id = setTimeout(() => {
        searchmovies();
    }, delay);
};