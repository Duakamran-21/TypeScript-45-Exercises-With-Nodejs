//define the make_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//calling three function in creating 3 variables
var album1 = make_album("Artist no.1", "Album title");
var album2 = make_album("Usman", "Album title 2");
//calling a make_album function with third parameter
var album3 = make_album("Ali", "Album title 3", 10);
//printing the variables
console.log(album1);
console.log(album2);
console.log(album3);
