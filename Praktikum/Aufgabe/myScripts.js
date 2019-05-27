$(document).ready(domReady);

function domReady() {
    $('input').powerTip({
        placement: 'n',
        mouseOnToPopup: true
    });

    $('#textInput').keyup(function () {
        var count = $(this).val().length;
        $('.counter').html(count);
    });
}

