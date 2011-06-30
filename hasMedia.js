$(document).ready(function() {

// Determine if the page requires streaming video or not
// Look in Metadata Type: "Moving Image"

var metaData = $("td.description_col2").text(); // Get metadata in 1 string
var hasMovie = "Moving Image";
var hasAudio = "Sound";

// First let's get the collection and Digital Identifier
// Videos are in collection# folders with filenames from Dig ID field
// Example: PATH/p15068coll11/LSmith.mp4

var path = "PATH/TO/CDM/MEDIA"; // Path to your collections folders
var flashpath = "PATH/TO/FLASH/PLAYER"; // Path to Flash streaming media swf
var collection = $("input#cdm_collection").val(); // CDM Collection ID
var recordno = $("td.description_col1:contains('Digital Identifier')").next().text(); // Digital Identifier #

// Trim white space from  variables

collection = jQuery.trim(collection);
recordno = jQuery.trim(recordno);

// Check metadata for string "Moving Image"

if(metaData.indexOf(hasMovie) != -1) {

	// Now let's construct the HTML video tag.
	// Serve MP4 first, OGV second, then flash for folks who need it.

	$("#tabs").prepend("<video controls width=\"320\" height=\"240\" poster=\"" + path + collection + "/" + recordno + ".jpg\"><source src=\"" + path + collection + "/" + recordno + ".ogv\" type=\"video/ogg\"><source src=\"" + path + collection + "/" + recordno + ".mp4\" type=\"video/mp4\"><object type=\"application/x-shockwave-flash\" width=\"320\" height=\"240\" data=\"" + flashpath + "?file=" + path + collection + "/" + recordno + ".flv&amp;image=" + path + collection + "/" + recordno + ".jpg\"><param name=\"movie\" value=\"" + flashpath + "?file=" + path + collection + "/" + recordno + ".flv&amp;image=" + path + collection + "/" + recordno + ".jpg\"><a href=\"" + path + collection + "/" + recordno + ".mp4\">Download the movie</a></object></video>");
} 

if(metaData.indexOf(hasAudio) != -1) {
	
	// Now let's construct the HTML audio tag.
	// Serve MP3 first, OGg second, then flashplayer with the MP3 for those who need it
	
	$("#tabs").prepend("<audio controls><source src=\"" + path + collection + "/" + recordno + ".mp3\" type=\"audio/mpeg\"><source src=\"" + path + collection + "/" + recordno + ".ogg\" type=\"audio/ogg\"><object type=\"application/x-shockwave-flash\" data=\"" + flashpath + "?file=" + path + collection + "/" + recordno + ".flv\"><param name=\"movie\" value=\"" + flashpath + "?file=" + path + collection + "/" + recordno + ".flv\"><a href=\"" + path + collection + "/" + recordno + ".mp3\">Download the audio</a></object>");

}

});