var offset = 0;
var limit = 20;

/*$(".logo").click(function(){
    $(".datadiv").empty();

    trendingData(offset,limit);
});*/
$(".data-title").append(`<p>Trends Today</p>`);
trendingData(offset, limit);

$('.swiper-slide[0]').click(function () {
    id=1;
    trendingData(offset, limit);

});



function trendingData(skip, take) {
    id=1;
    var xhr = $.get(`http://api.giphy.com/v1/gifs/trending?&api_key=${apikey}&offset=${skip}&limit=${take}`);
    xhr.done(function (response) {
        var array = response.data
        console.log("trending", array);
        for (i = 0; i < array.length; i++) {
            $(".data-gifs").append(`<img src=${array[i].images.fixed_width.url} style="height:200px;"/>`);
        }

    });
}
