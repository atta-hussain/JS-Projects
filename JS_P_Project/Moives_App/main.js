const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const main = document.querySelector("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// initially get fav movies
getMovies(APIURL);

async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    showMoives(respData.results);
}


function showMoives(movies) {
    // clear main
    main.innerHTML = '';

    movies.forEach((movie) => {
        const {
            poster_path,
            title,
            vote_average,
            overview
        } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        
                <img class="rounded-t-2xl"
                    src="${IMGPATH + poster_path}"
                    alt="${title}"/>
                    
                <div class="flex font-serif font-semibold text-xl movie-info rounded-b-2xl
                bg-gradient-to-r from-orange-600 to-purple-700 h-20 item-center justify-between lg:h-24 px-1 py-3 text-gray-300 moive-info">
                    <h3>${title}</h3> 
                    <span class ="bg-purple-800 p-1  w-10 h-10 rounded-xl ${getClassByRate(vote_average)}">${vote_average}</span>
                </div>
                <div class ="overview bg-gradient-to-r from-orange-600 to-purple-700 p-2 bg-local rounded-2xl text-gray-300"> 
                <div class="p-2">                
                    <span class ="bg-gradient-to-r from-orange-600 to-purple-700 font-serif font-semibold text-xl w-20 h-20 p-2 rounded-xl my-2 ${getClassByRate(vote_average)}">${vote_average}</span> <br>
                </div>
                <h3 class=" font-serif font-semibold text-xl">${title}</h3> 
                <h4 class="text-left pl-2 font-serif font-semibold ">Overview:</h4>
                ${overview}
                </div>
            `;
        main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return "text-green-700";
    } else if (vote >= 6) {
        return "text-orange-500";
    } else {
        return "text-yellow-500";
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getMovies(SEARCHAPI + searchTerm);

        search.value = '';
    }
});