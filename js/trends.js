var offset = 0;
var limit = 20;

/*$(".logo").click(function(){
    $(".datadiv").empty();

    trendingData(offset,limit);
});*/
$(".data-title").append(`<p>Trends Today</p>`);
GetData(offset, limit);

$('.trends').click(function () {
  location.reload();
  $('.trends').addClass('active');
});





//<div class="col"><img src=${array[i].images.fixed_width.url} style="height:200px;"/><p style="color:white;</div>">${array[i].title}</p>