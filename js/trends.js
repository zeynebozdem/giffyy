var offset = 0;
var limit = 20;

/*$(".logo").click(function(){
    $(".datadiv").empty();

    trendingData(offset,limit);
});*/
$(".data-title").append(`<p>Trends Today</p>`);
trendingData(offset, limit);

$('.trends').click(function () {
  location.reload();
  $('.trends').addClass('active');
});




function trendingData(skip, take) {
    id=1;
    var xhr = $.get(`http://api.giphy.com/v1/gifs/trending?&api_key=${apikey}&offset=${skip}&limit=${take}`);
    xhr.done(function (response) {
        var array = response.data
        console.log("trending", array);
        for (i = 0; i < array.length; i++) {
            $(".data-gifs").append(`<div class="card masonry-brick masonry-brick--h" ><img class="card-img-top" <img src=${array[i].images.fixed_width.url}><div class="card-body"><div class="row"><div class="col-md-6"> <p class="card-title text-left">Some quick example text to build on the card title and make up the bulk of the card's content.</p></div><div class="col-md-6 text-right"> <img src="assets/share.png"></div></div></div></div>`);
        }

    });
}

//<div class="col"><img src=${array[i].images.fixed_width.url} style="height:200px;"/><p style="color:white;</div>">${array[i].title}</p>