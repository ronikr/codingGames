function renderGames (gamesJSON) {
    $.getJSON("server/games.json", function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
            items.push( "<ul class='container container-" + key + "'><li class='class class-" + key + "'>" + val.name + "</li>" +
                        "<li onclick="+"goto('" + val.url + "')" + "" +  " class='class imageClass class-" + key + "'><img src=" + val.picture + " /></li>" +
                        "<li class='class class-" + key + "'>" + val.description + "</li>" +
                        "</ul><br/>" );
        });

        $( "<ul/>", {
            "class": "gamesList",
           html: items.join( "" )
        })
            .appendTo( ".dataBox" );
    });
}

$(document).ready(renderGames);

function goto(url) {
    window.location.assign(url);
}