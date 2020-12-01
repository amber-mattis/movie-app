$(document).ready(() => {
    "use strict"


    const getApi = 'https://winter-knotty-cereal.glitch.me/movies';

    $("#loading").show();
    $("#searchMovie").hide();


    //display form and movie list after 1.5 sec//
   setTimeout(function() {
       console.log(getMovies());
       $("#loading").hide();
       $("#searchMovie").show();
       getMovies();


   },1500);

   // get list data//
    const getMovies = () => fetch(getApi)
        .then(res => res.json()

        .then(movies => {

            let displayHTML = ""
           movies.forEach(movie => {
               console.log(movie);
               displayHTML += `  
                           <div class="card" style="width: 18rem;">
                            <img src=${movie.poster} class="card-img-top">
                                <div class="card-body">
                                <h4 class="card-title">${movie.title}</h4> 
                                <p>Rating: ${movie.rating}</p>
                                <p>Genre: ${movie.genre}</p>
                                
                                </div>                
                            </div>`
           });
            $("#movieHere").html(displayHTML);
        }))
        .catch(console.error)





    // $("#searchMovie").on("submit", (e) => {
    //     e.preventDefault();
    //     let searchInput = ($("#movieInput").val());
    //     console.log(getMovies(searchInput));;
    // });






});

