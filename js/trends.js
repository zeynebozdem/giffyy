var offset = 0;
var limit = 20;

/*$(".logo").click(function(){
    $(".datadiv").empty();

    trendingData(offset,limit);
});*/
$(".data-title").append(`<p>Trends Today</p>`);
trendingData(offset, limit);

$('#trends').click(function () {
   location.reload();

});



function trendingData(skip, take) {
    id=1;
    var xhr = $.get(`http://api.giphy.com/v1/gifs/trending?&api_key=${apikey}&offset=${skip}&limit=${take}`);
    xhr.done(function (response) {
        var array = response.data
        console.log("trending", array);
        for (i = 0; i < array.length; i++) {
            $(".data-gifs").append(`  <div class="col"><img src=${array[i].images.fixed_width.url} style="height:200px;"/><p style="color:white;</div>">${array[i].title}</p>`);
        }

    });
}
