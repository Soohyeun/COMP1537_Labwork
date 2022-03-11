function f_1(data) {
    // console.log(data)
    $("#movie_list").html('');
    for (var i = 0; i < data.results.length; i++) {
        x = data.results[i].poster_path;
        y = `<img src= "http://image.tmdb.org/t/p/w200/${x}">`;
        z = data.results[i].backdrop_path;

        $("#movie_list").append(`<li>${data.results[i].original_title} <br> ${data.results[i].overview} <br> ${y} <button id = "${z}" class = "backdrop_btn"> Show backdrop </button> </li> <hr>`);
    }
}


function get_m_f() {
    // ajax
    movie = $("#movie_name").val();


    $.ajax({
        "url": `https://api.themoviedb.org/3/search/movie?api_key=ed4ef9b0f9bcb9c237ab83a2c2ffb909&query=${movie}`,
        "type": "GET", // GET, POST, DELETE, UPDATE
        "success": f_1 //process
    })
}

function display_backdrop() {
    path_backdrop = $(this).attr("id");
    $('#p_right').html(`<img src= "http://image.tmdb.org/t/p/w500/${path_backdrop}" width = "100%">`);
}


function setup() {
    $('#get_m').click(get_m_f);
    $("body").on("click", ".backdrop_btn", display_backdrop)
}

$(document).ready(setup);