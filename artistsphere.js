// script.js
function toggleAlbums(button, tableId) {
    var table = document.getElementById(tableId);

    // Check if the table is currently hidden
    if (table.style.display === "none") {
        // Show the table
        table.style.display = "block";
        // Change button text to "Close Album"
        button.textContent = "Close Album";
    } else {
        // Hide the table
        table.style.display = "none";
        // Change button text to "View Albums"
        button.textContent = "View Albums";
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
    } else {
        details.style.display = "none";
    }
}

// script.js
function showArtists(artistId) {
    var allArtists = document.querySelectorAll('.aInfo');
    allArtists.forEach(function (artist) {
        artist.style.display = "none";
    });

    // Show the selected table
    var artist = document.getElementById(artistId);
    artist.style.display = "block";
}
