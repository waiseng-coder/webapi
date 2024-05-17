let database = [];

// Function to add any song with the following details
function addSong(artist, title, album, releaseDate, duration, genre) {
    if (typeof title !== 'string' || title.trim() === "") {
        console.log("Invalid song title. Title must be a string.");
        return;
    }
    // Check if there same song
    const existingSong = database.find(song => song.title === title);
    if (existingSong) {
        console.log(`Song '${title}' already exists in the database.`);
        return;
    }

    database.push({
        artist,
        title,
        album,
        releaseDate,
        duration,
        genre
    });
    console.log(`Song '${title}' added successfully!`);
}

// Function to delete songs by artist from database
function deleteSongsByArtist(artist) {
    database = database.filter(song => song.artist !== artist);
    console.log(`Songs by '${artist}' deleted successfully!`);
}

// Function to delete songs by title from database
function deleteSongByTitle(title) {
    database = database.filter(song => song.title !== title);
    console.log(`Song '${title}' deleted successfully!`);
}

// Function to view all the songs available in database
function viewAllSongs() {
    console.log("Songs available in the database:");
    database.forEach(song => {
        console.log(`Artist: ${song.artist}, Title: ${song.title}, Album: ${song.album}, Release Date: ${song.releaseDate}, Duration: ${song.duration}, Genre: ${song.genre}`);
    });
}

// Function to search for songs by genre
function findSongsByGenre(genre) {
    const matchingSongs = database.filter(song => song.genre === genre);
    return matchingSongs;
}

// Function to store songs
function storeSongs(songs) {
    if (songs.length === 0) {
        console.log(`No songs found for the given genre.`);
        return;
    }
    console.log(`Songs in genre '${songs[0].genre}' are:`);
    songs.forEach(song => {
        console.log(`Artist: ${song.artist}, Title: ${song.title}, Album: ${song.album}, Release Date: ${song.releaseDate}, Duration: ${song.duration}`);
    });
}

// Function to play songs in the database 
function playSong(title) {
    const song = database.find(song => song.title === title);
    if (!song) {
        console.log(`Song '${title}' not found.`);
        return;
    }

    console.log(`Now playing: '${title}' by ${song.artist} from the album '${song.album}'.`);
}


//songs to add
addSong("Michael Jackson", "They Don't Care About Us", "Album1 HIStory: Past, Present and Future, Book I", "16/04/1996", "4:44 ", "Pop");
addSong("Steve Jablonsky ", "Arrival To Earth", "Transformer Score", "25/06/2007", "5:27", "	Film score");
addSong("Linkin Park", "What I've", "Minutes to Midnights", "01/04/2007", "5:00", "Hard Rock");
addSong("Angela Zhang ", "yin xin de chi bang", " Zhang Shao Han", "11/07/2010", "3:27", "Chinese pop");

const popSongs = findSongsByGenre('Pop');
playsong('yin xin de chi bang');
storeSongs(popSongs);
viewAllSongs();
deleteSongsByArtist("Micheal Jackson");
viewAllSongs();
deleteSongByTitle("Arrival To Earth");
viewAllSongs();


module.exports = {
    addSong,
    deleteSongsByArtist,
    deleteSongByTitle,
    viewAllSongs,
    findSongsByGenre,
    playSong
};
