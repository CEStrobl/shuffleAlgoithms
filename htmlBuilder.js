let songCardCount = 0;

/**
 * 
 * @param {object} divIn 
 * @param {string} type 
 * @param {string} content 
 * @param {string} id
 * 
 * Example use: addElement ( control, "p", "Hello World!", "paragraph1" )
 * Creates a paragraph with the id:"paragraph1" saying "Hello World!" inside div obj control
 */
function addElement(divIn, type, content, id, cssClass) {
	const newDiv = document.createElement(type)

	newDiv.className = cssClass;

	newDiv.innerHTML = content;
	
	newDiv.id = id

	divIn.after(newDiv)
}

/**
 * 
 * @param {object} divIn 
 * @param {string} type 
 * @param {string} content 
 * @param {string} id
 * 
 * Example use: addElement ( control, "p", "Hello World!", "paragraph1" )
 * Creates a paragraph with the id:"paragraph1" saying "Hello World!" inside div obj control
 */
function embedElement(divIn, type, content, id, cssClass) {
	const newDiv = document.createElement(type)

	newDiv.className = cssClass;

	newDiv.innerHTML = content;
	
	newDiv.id = id

	divIn.appendChild(newDiv)
}
function createSongCard (divIn, img, title, artist,rank) {
	// Create Row
	let rowName = "card"+songCardCount;
	
	embedElement(divIn, "div", "", rowName, "row")

	let myRow = document.getElementById(rowName);

	// Prep inner columns
	let imgObj = '<img src="' + img + '" alt="">'
	let titleObj = '<h3>'+ title + '</h3>'
	let artistObj = '<p>' + artist + '</p>' +'<p>' + rank + '</p>'

	// Create two columns inside row
	let colName = rowName + "col";

	embedElement( myRow, "div", imgObj, colName+1, "column" )
	embedElement( myRow, "div", titleObj+artistObj, colName+2, "column" )

	songCardCount++;
}
