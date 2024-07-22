//define the make_album function
function make_album(artist_name: string, album_title: string, tracks?){
    let album:{artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title
    };
    if (tracks !== undefined){
        album.tracks = tracks;
    }
    return album;
    }

    //calling three function in creating 3 variables
    let album1 = make_album("Artist no.1","Album title");

let album2 = make_album("Usman","Album title 2");



//calling a make_album function with third parameter
let album3 = make_album("Ali","Album title 3",10);

//printing the variables
console.log(album1);
console.log(album2);
console.log(album3);