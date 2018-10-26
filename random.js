
$(".randoms").click(function(){
    var apikey = 'QyoA3LBnlBLHUTh8cipaaJ56jXbXJoB2';
    var xhr = $.get(`http://api.giphy.com/v1/gifs/random?&api_key=${apikey}&limit=1`);

    xhr.done(function (response) {
    console.log("random", response);
    var array = response.data

    $(".random").append(`<img src=${array.images.original.url} style='height=350px;'/>`)

});
$(".random").empty();
});