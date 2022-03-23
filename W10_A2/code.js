var page_id = 1;
var page_size = null;
var num_of_pages = null;
var movie_list_data = null;

function display(data) {
    $("#movie_list").html('');

    for (var i = (page_id - 1) * page_size; i < page_id * page_size && (i < data.results.length); i++) {


        x = data.results[i].poster_path;
        y = `<img src= "http://image.tmdb.org/t/p/w200/${x}">`;
        z = data.results[i].backdrop_path;

        $("#movie_list").append(`#${i+1}<br>${data.results[i].original_title} <br> ${data.results[i].overview} <br> ${y} <button id = "${z}" class = "backdrop_btn"> Show backdrop </button>  <hr>`);
    }
}

function pagination(data) {
    $("#num_btn_div").html('');

    movie_list_data = data;
    page_size = $('#page_size option:selected').val();
    num_of_pages = Math.ceil(data.results.length / page_size)

    for (var i = 1; i <= num_of_pages; i++) {
        $('#num_btn_div').append(`<button id='${i}' class = 'page_num_btn'>${i}</button>`)
    }

    display(movie_list_data)
}

function get_movie() {
    // page_id = 1;
    movie_title = $('#input_value').val();
    if (movie_title != "")
        $.ajax({
            "url": `https://api.themoviedb.org/3/search/movie?api_key=ed4ef9b0f9bcb9c237ab83a2c2ffb909&query=${movie_title}`,
            "type": "GET",
            "success": pagination //process
        })

}

function display_backdrop() {
    path_backdrop = $(this).attr("id");
    $('#backdrop').html(`<img src= "http://image.tmdb.org/t/p/w500/${path_backdrop}" width = "100%">`);
}

function search_movie() {
    page_id = 1;
    get_movie()
    $('#page_btn_div').show();
}

function change_page() {
    $('#prev_btn').show();
    $('#next_btn').show();
    page_id = $(this).attr("id");
    display(movie_list_data)
}

function first() {
    page_id = 1;
    display(movie_list_data)
}

function last() {
    page_id = num_of_pages;
    display(movie_list_data)
}

function prev() {
    if (page_id > 1)
        page_id--;
    display(movie_list_data)
}

function next() {
    if (page_id < num_of_pages)
        page_id++;
    display(movie_list_data)
}

function setup() {
    $('#page_btn_div').hide();
    $('#search_btn').click(search_movie);
    $('#first_btn').click(first);
    $('#last_btn').click(last);
    $('#prev_btn').click(prev);
    $('#next_btn').click(next);
    $('#page_size').change(get_movie);
    $("body").on("click", ".page_num_btn", change_page)
    $("body").on("click", ".backdrop_btn", display_backdrop)

    $('#prev_btn').hide();
    $('#next_btn').hide();
}

$(document).ready(setup);