// thx SO

$(document).ready(function() {
    $('.translateBtn').on('click', function() {
        let $this = $(this);
        let loadingText = '<i class="fa fa-circle-o-notch fa-spin"></i> Generating ...';
        if ($(this).html() !== loadingText) {
            $this.data('original-text', $(this).html());
            $this.html(loadingText);
        }

        let url = 'ideas';
        $('input[type=\'text\']').each(function () {
            url += "/" + $(this).val();
        });
        console.log(url);
        window.location = url;
    });
});

//stolen from https://bootsnipp.com/snippets/featured/dynamic-form-fields-add-amp-remove-bs3ArEyOuSaLtYyOuDiDntgEtpIcKeD

$(function() {
    $(document).on('click', '.btn-add', function(e) {
        e.preventDefault();
        let controlForm = $('.controls:first'),
            currentEntry = $(this).parents('.entry:first'),
            newEntry = $(currentEntry.clone()).hide().appendTo(controlForm).fadeIn(200);

        newEntry.find('input').val('');
        controlForm.find('.entry:not(:last) .btn-add')
            .removeClass('btn-add').addClass('btn-remove')
            .removeClass('btn-success').addClass('btn-danger')
            .html('<span class="glyphicon glyphicon-minus"></span>');
    }).on('click', '.btn-remove', function(e) {
        $(this).parents('.entry:first').fadeOut(200);
        e.preventDefault();
        return false;
    });
});