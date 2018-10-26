var apikey = 'QyoA3LBnlBLHUTh8cipaaJ56jXbXJoB2';
var offset=0;
var limit=20;
trendingData(offset,limit);
$(window).on("scroll", function () {
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        offset += 20;
        trendingData(offset, limit);
    }
});

function trendingData(skip,take){
    var xhr = $.get(`http://api.giphy.com/v1/gifs/trending?&api_key=${apikey}&offset=${skip}&limit=${take}`);
    xhr.done(function (response) {
        var array = response.data
        console.log("trending",array);

        for (i=0;i<array.length;i++) {
          var divs=document.createElement("div");
          $('.trends').append(divs);
         

       /* $("div").className=`trends-${i}`;
            $(`.trends-${i}`).append(`<img src=${array[i].images.original.url} style='height=350px;'/>`);*/
            var totalcount = response.pagination.total_count
            $("p").text(` Trending aramasından ${totalcount} sonuç bulundu.`);
        }

});
}
