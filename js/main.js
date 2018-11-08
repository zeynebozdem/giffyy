var id; //1 trends, 2 search, 3 category
var apikey = 'NinlyFZz6OQehrRKF5TafhvA59MxoI67';

function GetData(skip,take,searchvalue){
    var method=!searchvalue?"trending?":`search?q=${searchvalue}&`;

var xhr = $.get(`http://api.giphy.com/v1/gifs/${method}api_key=${apikey}&limit=${take}&offset=${skip}`);
    xhr.done(function (response) {
        console.log("categoryData", response);
        var results = response.data

        for (i in results) {
            $(".data-gifs").append(` <div><img src=${results[i].images.fixed_width.url} class="gif"></div>`);
             }

    });
}