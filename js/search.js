
var offset = 0;
var limit = 20;


$(".searchbar").keyup(function (e) {
    if (e.keyCode == 13) {
        var searchvalue = $(".searchbar").val();

        $(".data-gifs").empty();

        GetData(limit, offset, searchvalue);

    }
});




//delete input val




 /*
$("#trendsButton").click(function () {
    console.log("trends");
});
$("#randomsButton").click(function () {
    console.log("randoms");
});
  
    $("button").click(function () {
        var searchValue = $("#searchText").val();
        console.log(searchValue);
        var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=QyoA3LBnlBLHUTh8cipaaJ56jXbXJoB2&limit=${dataLimit}`);
        xhr.done(function (response) {
            console.log("search", response);
            var results = response.data
            for (i in results) {
                $(".gifs").append(`<img src=${results[i].images.original.url} style='height:350px;'/>`);
                console.log("searched");
            }
        });
        $("div").empty();
    });
    var xhr = $.get(`http://api.giphy.com/v1/gifs/trending?&api_key=${apiKey}&limit=${dataLimit}`);
        xhr.done(function (response) {
            console.log("trending", response);
            var trends = response.data
            for (i in trends) {
                $(".gifs").append(`<img src='${trends[i].images.original.url} style='height:350px;'/>`);
            }
        });
*/