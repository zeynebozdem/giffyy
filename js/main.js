var id; //1 trends, 2 search, 3 category
var apikey = 'NinlyFZz6OQehrRKF5TafhvA59MxoI67';

function GetData(skip,take,searchvalue){
    var method=!searchvalue?"trending?":`search?q=${searchvalue}&`;

var xhr = $.get(`http://api.giphy.com/v1/gifs/${method}api_key=${apikey}&limit=${take}&offset=${skip}`);
    xhr.done(function (response) {
        console.log("categoryData", response);
        var results = response.data

        for (i in results) {
            $(".data-gifs").append(` <div class="gif-container"><img src=${results[i].images.fixed_width.url}><div class="overlay"><div><a href="#" target="_blank"><img src="assets/clone.svg"></a></div><div><a href="#" target="_blank"><img src="assets/facebook.svg"></a></div><div><a href="#" target="_blank"><img src="assets/twitter.svg"></a></div><div><a href="# target="_blank"><img src="assets/whatsapp.svg"></a></div></div></div>`);
             }

    });
}