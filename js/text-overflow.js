(function(){
    var cut = document.getElementsByClassName('card__txt_overflow');
    for( var i = 0; i < cut.length; i++ ){
        cut[i].innerText = cut[i].innerText.slice(0,130) + '...';
    }
})();