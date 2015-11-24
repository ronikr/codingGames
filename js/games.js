// TODO: use ajax to get the file server/games.json
// Create the list

$.getJSON('server/games.json', function (games) {
    console.log(games);
})

