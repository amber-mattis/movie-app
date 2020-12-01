$(document).ready(() => {
    "use strict"

    $("body").css({backgroundColor:"black"})
    const getApi = 'https://winter-knotty-cereal.glitch.me/movies';

    $("#loading").show();
    $("#movieButton").hide();


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
                           <div class="card" style="width: 18rem;">
                            <img src=${movie.poster} class="card-img-top" style="height:22rem;">
                                <div class="card-body" style="height: 12rem;">
                                <h4 class="card-title">${movie.title}</h4> 
                                <p>Rating: ${movie.rating}</p>
                                <p>Genre: ${movie.genre}</p>
                                <p>${movie.year} </p>
                                </div>                
                            </div>
                        </div>`
           });
            $("#movieSection").html(displayHTML);
            $("#loading").hide();
            $("#movieButton").show();

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

});

