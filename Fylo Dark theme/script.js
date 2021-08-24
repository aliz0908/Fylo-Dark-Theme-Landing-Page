$(document).ready(function() {
    $('#email').keyup(function() {
        $(this).attr('size', $(this).val().length)
    });
});