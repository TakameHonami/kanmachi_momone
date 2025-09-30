function PageTopAnime() {
    var scroll = $(window).scrollTop(); // スクロール値を取得
    if (scroll >= 200) {
        $('#page-top').removeClass('DownMove').addClass('UpMove');
    } else {
        if($('#page-top').hasClass('UpMove')){
            $('#page-top').removeClass('UpMove').addClass('DownMove');
        }
    }

    var wH = window.innerHeight; // 画面の高さ
    var footerPos = $('.site-footer').offset().top; // footerの位置
    var btnHeight = $('#page-top').outerHeight(); // ボタンの高さ

    if (scroll + wH >= footerPos) {
        // フッターにかかったら
        var pos = (scroll + wH) - footerPos + 10;
        $('#page-top').css('bottom', pos + 'px'); // フッター手前で止める
    } else {
        if($('#page-top').hasClass('UpMove')){
            $('#page-top').css('bottom','10px'); // 通常時は画面下10px
        }
    }
}

$(window).scroll(function(){
    PageTopAnime();
});

$('#page-top').click(function(){
    $('body,html').animate({scrollTop: 0}, 500);
    return false;
});
