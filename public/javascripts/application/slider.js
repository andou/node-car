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
$(document).ready(function () {
    /*$('body').swipeRight(function () {
        //alert('right swipe right:' + rightOpen + ' left: ' + leftOpen );
        if (rightOpen) {
            toggleRight();
        } else if (leftOpen) {
            //alert('right swipe, left open');
            toggleRight();
        } else {
            //alert('right swipe, nothing open');
            toggleLeft();
        }
    });
    $('body').swipeLeft(function () {
        //alert('left swipe right:' + rightOpen + ' left: ' + leftOpen );
        if (leftOpen) {
            //alert('left swipe, left open');
            toggleLeft();
        } else {
            //alert('left swipe, nothing open');
            toggleRight();
        }
    });*/

    function toggleRight() {
        $('#right-activator').trigger('touchend');
        if (rightOpen) {
            rightOpen = false;
        } else {
            rightOpen = true;
        }
    }

    function toggleLeft() {
        $('#left-activator').trigger('touchend');
        if (leftOpen) {
            leftOpen = false;
        } else {
            leftOpen = true;
        }
    }
});