var apikey = 'QyoA3LBnlBLHUTh8cipaaJ56jXbXJoB2';
var limit = 20;
var offset = 0;
$("#searchbutton").click(function () {
    $(".datadiv").empty();
    offset += 20;
    var searchvalue = $("#searchtext").val();
    searchData(offset, limit, searchvalue);
});



function searchData(skip, take, searchvalue) {
    var searchvalue = $(".searchbar").val();
    var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${searchvalue}&api_key=${apikey}&limit=${take}&offset=${skip}`);
    xhr.done(function (response) {
        console.log("searchdata", response);
        var results = response.data
        $(".data-title").empty();
        $(".data-title").append(`<p>Explore ${searchvalue.charAt(0).toUpperCase()}${searchvalue.slice(1)} Gifs</p>`);

        for (i in results) {
            $(".data-gifs").append(`<img src=${results[i].images.fixed_width.url} style='height:200px; width:200px;'/>`);
             }

    });

}
    $(".searchbar").keyup(function (e) {
    if (e.keyCode == 13) {
        var searchvalue = $(".searchbar").val();
       
        $(".data-gifs").empty();
        
        
        offset = 0;
        searchData(limit, offset, searchvalue);

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