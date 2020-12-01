$(document).ready(() => {
    "use strict"


    const getApi = 'https://winter-knotty-cereal.glitch.me/movies';

    $("#loading").show();
    $("#main-title, #movieButton").hide();


    //display form and movie list after 3 sec//
   setTimeout(function() {
       console.log(getMovies());
       getMovies();
   },3000);

   // get list data//
    const getMovies = () => fetch(getApi)
        .then(res => res.json()
        .then(movies => {
            let displayHTML = ""
           movies.forEach(movie => {
               console.log(movie);
               displayHTML += `
                        <div class="col-3">
                           <div class="card" style="width: 18rem; border: none; margin: 10px">
                            <img src=${movie.poster} class="card-img-top" style="height:22rem;">
                                <div class="card-body" style="height: 18rem; font-size: 12px; color: white; background: black">
                                <h4 class="card-title">${movie.title}</h4> 
                                <p>Rating: ${movie.rating}</p>
                                <p>Genre: ${movie.genre}</p>
                                <p>${movie.year}</p>
                                <p>${movie.plot}</p>
                                </div>                
                            </div>
                        </div>`
           });
            $("#main-title, #movieButton").show();
            $("#movieSection").html(displayHTML);
            $("#loading").hide();


        }))
        .catch(console.error)


    // $(".movieInfo").on("submit", function(e) {
    //     e.preventDefault();
    //     const newMovie = $(".movieInfo").val();
    //     const options = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(newMovie)
    //     };
    //     fetch('/movies',options)
    //         .then(res => res.json())
    //         .then(function(newMovie){
    //             console.log(newMovie);
    //         })
    //         .catch(console.error);
    //
    //     console.log(newMovie);
    // });

    const newMovie = $("#addNewMovie");

    newMovie.on("submit",function(e){
        e.preventDefault();
        const movieData = new movieData(this);

        fetch(`${getApi}`,{
            method: 'POST',
            body: JSON.stringify(movieData),
        }).then(function (response) {
            return response.text()
        }).then(function (text){
            console.log(text);
        })
    });

    $("body").css("background", "black")

});



