function viewdiv(id) {
    var el = document.getElementById(id);
    if (el.style.display == "block") {
        el.style.display = "none";
    } else {
        el.style.display = "block";

    }
}


$(document).ready(function() {

    $( '.mainToggle' ).click(function() {
        $('nav ul').slideToggle(500);
    });

});