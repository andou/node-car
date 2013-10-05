(function ($) {
    var $html = $('html'),
        $body = $('body'),
        $content = $('#content'),
        $main = $('#content'),
        $nav = $('#nav'),
        winHeight = $(window).height(),
        leftNavMooved = false,
        rightNavMooved = false;

    function openSection(direction) {
        //alert(direction);
        if (direction == 'left') {
            $nav = $('#nav.left');
            $nav.prependTo($body).addClass('visible');
            leftNavMooved = true;
        } else {
            $nav = $('#nav.right');
            $nav.prependTo($body).addClass('visible');
            rightNavMooved = true;
        }
    }

    function closeSection(direction) {
        //alert(direction);
        if (direction == 'left') {
            $nav = $('#nav.left');
            $nav.prependTo($body).removeClass('visible');
            leftNavMooved = false;
        } else {
            $nav = $('#nav.right');
            $nav.prependTo($body).removeClass('visible');
            rightNavMooved = false;
        }
    }
    $('#left-activator').on(Modernizr.touch ? 'touchend' : 'click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (!leftNavMooved) {
            openSection('left');
        } else {
            closeSection('left');
        }
        $main.toggleClass('slid-right');
    });
    $('#right-activator').on(Modernizr.touch ? 'touchend' : 'click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (!rightNavMooved) {
            openSection('right');
        } else {
            closeSection('right');
        }
        $main.toggleClass('slid-left');
    });
    $main.on('webkitTransitionEnd transitionend oTransitionEnd', function (e) {
        $html.toggleClass('no-scrolling');
        $body.toggleClass('no-scrolling');
        $nav.toggleClass('scroll');
    });
    if ($content.height() < winHeight) {
        $content.height(winHeight);
    }
}($));
var rightOpen = false;
var leftOpen = false;
 




