var apikey = 'QyoA3LBnlBLHUTh8cipaaJ56jXbXJoB2';
var offset = 0;
var limit = 20;

/*$(".logo").click(function(){
    $(".datadiv").empty();

    trendingData(offset,limit);
});*/

trendingData(offset, limit);
    $(window).on("scroll", function () {
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
            offset += 20;
            trendingData(offset, limit);
        }
    });


function trendingData(skip, take) {
    var xhr = $.get(`http://api.giphy.com/v1/gifs/trending?&api_key=${apikey}&offset=${skip}&limit=${take}`);
    xhr.done(function (response) {
        var array = response.data
        console.log("trending", array);

        for (i = 0; i < array.length; i++) {
            $(".datadiv").append(`<img src=${array[i].images.fixed_width.url} style="height:200px;"/>`);
        }

    });
}
