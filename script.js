let control = document.getElementById("control")
let randomShuf = document.getElementById("random")
let amazon = document.getElementById("amazon")


function randomizeArray(inputArray) {
    let arrayToRandomize = inputArray.slice(); // Copy the input array to avoid modifying the original
    let outputArray = [];
    
    while (arrayToRandomize.length > 0) {
        const randomIndex = Math.floor(Math.random() * arrayToRandomize.length);
        const removedElement = arrayToRandomize.splice(randomIndex, 1)[0];
        outputArray.push(removedElement);
    }
    
    return outputArray;
}

function populateSongByTitle() {
	for (let i = 0; i < songByObj.length; i++) {
		const a = songByObj[i];
		
		songByTitle.push(a.title)
	}
}

function populatePlaylist(divIn, playlist) {
	for (let i = 0; i < playlist.length; i++) {
		const a = playlist[i];
		
		createSongCard(divIn, a.img, a.title, a.artist, a.rank)
	}
}

let songByObj = [lover, lookwhat, august, enchanted, youbelong, me, gorgeous, style, bejeweled, red, sadbeautiful, superman, longstory, yourenotsorry, iknowplaces, forgot, midnightrain, mirrorball, heknows, holyground]

let songByTitle = []

populateSongByTitle()



let controlPlaylist = [lover, lookwhat, august, enchanted, youbelong, me, gorgeous, style, bejeweled, red, sadbeautiful, superman, longstory, yourenotsorry, iknowplaces, forgot, midnightrain, mirrorball, heknows, holyground]

let randomized = randomizeArray(controlPlaylist)

let amazonPlaylist = [yourenotsorry, mirrorball, bejeweled, style, longstory, sadbeautiful, gorgeous, me, lover, superman, holyground, heknows, august, forgot, midnightrain, lookwhat, youbelong, enchanted, red, iknowplaces]



populatePlaylist(control, controlPlaylist)
populatePlaylist(randomShuf, randomized)
populatePlaylist(amazon, amazonPlaylist)