var id; //1 trends, 2 search, 3 category
var apikey = 'NinlyFZz6OQehrRKF5TafhvA59MxoI67';

function GetData(skip, take, searchvalue) {
    var method = !searchvalue ? "trending?" : `search?q=${searchvalue}&`;

    var xhr = $.get(`http://api.giphy.com/v1/gifs/${method}api_key=${apikey}&limit=${take}&offset=${skip}`);
    xhr.done(function (response) {
        console.log("categoryData", response);
        var results = response.data

        for (i in results) {
            var gifLink = results[i].bitly_url;
            $(".data-gifs").append(` <div class="gif-container"><img src=${results[i].images.fixed_width.url}><div class="overlay"><div onclick="copyClipboard('${results[i].bitly_url}')"><a><img src="assets/clone.svg"></a></div><div><a href="https://www.facebook.com/sharer.php?u=${results[i].bitly_url}" target="_blank"><img src="assets/facebook.svg"></a></div><div><a href="https://twitter.com/intent/tweet?url=${results[i].bitly_url}" target="_blank"><img src="assets/twitter.svg"></a></div></div></div>`);
        }

    });
}

function copyClipboard(url) {
    var copied = `${url}`;
    copied.val().select();
    console.log(copied);
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + copied);
}