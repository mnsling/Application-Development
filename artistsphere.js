var currentlyDisplayedAlbums = null;
var currentlyDisplayedSongs = null;

function toggleAlbums(button, tableId) {
    var table = document.getElementById(tableId);

    if (currentlyDisplayedAlbums) {
        currentlyDisplayedAlbums.style.display = "none";
    }

    if (currentlyDisplayedSongs) {
        currentlyDisplayedSongs.style.display = "none";
    }

    if (table.style.display === "none") {
        table.style.display = "block";
        currentlyDisplayedAlbums = table; 
    } else {
        table.style.display = "none";
        currentlyDisplayedAlbums = null; 
    }
}

function showSongs(detailsId) {
    var allDetails = document.querySelectorAll('.details');
    allDetails.forEach(function (details) {
        details.style.display = "none";
    });

    var details = document.getElementById(detailsId);
    if (details.style.display === "none") {
        details.style.display = "block";
        currentlyDisplayedSongs = details; 
    } else {
        details.style.display = "none";
        currentlyDisplayedSongs = null; 
    }
}

function showArtists(artistId) {
    var allArtists = document.querySelectorAll('.aInfo');
    allArtists.forEach(function (artist) {
        artist.style.display = "none";
    });

    if (currentlyDisplayedAlbums) {
        currentlyDisplayedAlbums.style.display = "none";
    }

    if (currentlyDisplayedSongs) {
        currentlyDisplayedSongs.style.display = "none";
    }

    var artist = document.getElementById(artistId);
    artist.style.display = "block";
    currentlyDisplayedAlbums = null; 
    currentlyDisplayedSongs = null; 
}
