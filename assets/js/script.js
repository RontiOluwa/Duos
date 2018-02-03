$(document).ready(function(){
    $('.dropdown-submenu a.test').on("click", function(e){
        // alert();
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});
