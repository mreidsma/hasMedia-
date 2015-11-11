$(document).ready(function() {

	// Determine if the page requires streaming video or not
	// Look in Metadata Type: "Moving Image", or Format: flv

	var metaData = $("td.description_col2").text(); // Get metadata in 1 string
	var hasMovie = "Moving Image";
	var hasAudio = "Sound";

	// First let's get the collection and Digital Identifier
	// Videos are in collection# folders with filenames from Dig ID field
	// Example: PATH/p15068coll11/LSmith.mp4

	var path = "http://gvsulib.com/media/"; // Path to your collections folders
	var flashpath = "https://media.dreamhost.com/mediaplayer.swf"; // Path to flash player
	var collection = $("input#cdm_collection").val(); // CDM Collection ID
	
	// Grab the digital identification number
	if($("#metadata_digita").length > 0) {
		var recordno = $("#metadata_digita").text(); // Digital Identifier #
	} 

	if($("#metadata_identi").length > 0) {
		var recordno = $("#metadata_identi").text(); // Digital Identifier #
	}

	// Trim white space from  variables

	collection = jQuery.trim(collection);
	recordno = jQuery.trim(recordno);

	// Check metadata for string "Moving Image"

	if(metaData.indexOf(hasMovie) != -1) {

		// Now let's construct the HTML video tag.
		// Serve MP4 first, OGV second, then flash for folks who need it.

		

		$("#tabs").prepend("<video controls width=\"320\" height=\"240\" poster=\"" + path + collection + "/" + recordno + ".jpg\"><source src=\"" + path + collection + "/" + recordno + ".mp4\" type=\"video/mp4\"><source src=\"" + path + collection + "/" + recordno + ".OGG\" type=\"video/ogg\"><object type=\"application/x-shockwave-flash\" width=\"320\" height=\"240\" data=\"https://media.dreamhost.com/mediaplayer.swf?file=" + path + collection + "/" + recordno + ".flv&amp;image=" + path + collection + "/" + recordno + ".jpg\"><param name=\"movie\" value=\"https://media.dreamhost.com/mediaplayer.swf?file=" + path + collection + "/" + recordno + ".flv&amp;image=" + path + collection + "/" + recordno + ".jpg\"><a href=\"https://media.dreamhost.com/mediaplayer.swf?file=" + path + collection + "/" + recordno + ".mp4\">Download the movie</a></object></video><p><a href=\"javascript:window.open(\'https://media.dreamhost.com/mediaplayer.swf?file=" + path + collection + "/" + recordno + ".flv&amp;image=" + path + collection + "/" + recordno + ".jpg\');\" style=\"background:#eee;background:-moz-linear-gradient(top, rgba(255, 255, 255, .2) 0%, rgba(0, 0, 0, .2) 100%);background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255, 255, 255, .2)), color-stop(100%,rgba(0, 0, 0, .2)));background: -webkit-linear-gradient(top, rgba(255, 255, 255, .2) 0%,rgba(0, 0, 0, .2) 100%);background: -o-linear-gradient(top, rgba(255, 255, 255, .2) 0%,rgba(0, 0, 0, .2) 100%);background: -ms-linear-gradient(top, rgba(255, 255, 255, .2) 0%,rgba(0, 0, 0, .2) 100%);background: linear-gradient(top, rgba(255, 255, 255, .2) 0%,rgba(0, 0, 0, .2) 100%);border: 1px solid #aaa;border-top: 1px solid #ccc;border-left: 1px solid #ccc;-moz-border-radius:.25em;-webkit-border-radius:.25em;border-radius:.25em;color: #444;display: inline-block;font-weight:bold;text-decoration:none;text-shadow: 0 1px rgba(255, 255, 255, .75);cursor: pointer;margin:1.25em 0;padding: .333em .75em;font-size:1em;line-height:1.3125em;\">View video full-screen</a></p>");
	
if(collection == 'p16015coll6') { // Banner for Young Lords

		$('#tabs').prepend('<div style="color: #31708f;background-color: #d9edf7;border-color: #bce8f1;padding: 15px;margin-bottom: 20px;border: 1px solid transparent;border-radius: 4px;">Please Note: Some videos may be temporarily unavailable on this site. If a video will not play you can try searching for it on <a href="https://gvsu.ensemblevideo.com/YoungLordsinLincolnPark">GVSU Ensemble Video</a>.');
		
		}

	}

	if(metaData.indexOf(hasAudio) != -1) {

		// Now let's construct the HTML audio tag.
		// Serve MP3 first, OGg second, then flashplayer with the MP3 for those who need it

		$("#tabs").prepend("<audio controls><source src=\"" + path + collection + "/" + recordno + ".mp3\" type=\"audio/mpeg\"><source src=\"" + path + collection + "/" + recordno + ".OGG\" type=\"audio/ogg\"><object type=\"application/x-shockwave-flash\" data=\"" + flashpath + "?file=" + path + collection + "/" + recordno + ".flv\"><param name=\"movie\" value=\"" + flashpath + "?file=" + path + collection + "/" + recordno + ".flv\"><a href=\"" + path + collection + "/" + recordno + ".mp3\">Download the audio</a></object>");
	}


});