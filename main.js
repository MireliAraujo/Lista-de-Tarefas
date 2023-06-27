$(document).ready(function() {
    $('form').on('submit', function (e) {
        e.preventDefault();
        const ItemListaTafera = $('#nomeTarefa').val();
        const novoItem = $('<li style="display: none;"></li>');
        $(`<p>${ItemListaTafera}</p>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(2000);
        $('#nomeTarefa').val('');
        
    });

    $('ul').on("click", (function () {
        $('li').css({"text-decoration":"line-through"});
    }));
});