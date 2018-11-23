
  setInterval(masonry(),300);
  function masonry(){
    var elem = document.querySelector('.grid');
    var msnry = new Masonry( elem, {
      // options
      itemSelector: '.grid-item',
      columnWidth: 200
    });
  }