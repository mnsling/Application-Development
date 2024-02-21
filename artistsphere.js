// script.js

var currentlyDisplayedAlbums = null;
var currentlyDisplayedSongs = null;

function toggleAlbums(button, tableId) {
    var table = document.getElementById(tableId);

    // Hide the previously displayed albums
    if (currentlyDisplayedAlbums) {
        currentlyDisplayedAlbums.style.display = "none";
    }

    // Hide the previously displayed songs
    if (currentlyDisplayedSongs) {
        currentlyDisplayedSongs.style.display = "none";
    }

    // Check if the table is currently hidden
    if (table.style.display === "none") {
        // Show the table
        table.style.display = "block";
        currentlyDisplayedAlbums = table; // Update the currently displayed albums
        // Change button text to "Close Album"
    } else {
        // Hide the table
        table.style.display = "none";
        currentlyDisplayedAlbums = null; // Reset the currently displayed albums
        // Change button text to "View Albums"
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
        currentlyDisplayedSongs = details; // Update the currently displayed songs
    } else {
        details.style.display = "none";
        currentlyDisplayedSongs = null; // Reset the currently displayed songs
    }
}

function showArtists(artistId) {
    var allArtists = document.querySelectorAll('.aInfo');
    allArtists.forEach(function (artist) {
        artist.style.display = "none";
    });

    // Hide the previously displayed albums when switching artists
    if (currentlyDisplayedAlbums) {
        currentlyDisplayedAlbums.style.display = "none";
    }

    // Hide the previously displayed songs when switching artists
    if (currentlyDisplayedSongs) {
        currentlyDisplayedSongs.style.display = "none";
    }

    // Show the selected table
    var artist = document.getElementById(artistId);
    artist.style.display = "block";
    currentlyDisplayedAlbums = null; // Reset the currently displayed albums when switching artists
    currentlyDisplayedSongs = null; // Reset the currently displayed songs when switching artists
}
