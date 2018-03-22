function search() {
	// Log something on the browser console
	console.log("Searching...");

	var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {
               //document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
               //console.log("Back from the server with: " + xmlhttp.responseText);
               updatePage(xmlhttp.responseText);
           }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    };

    // TODO: I need to get the book name from the form here...

    xmlhttp.open("GET", "/scriptures?book=John", true);
    xmlhttp.send();	
}

function updatePage(results) {
	console.log("Updating the div with these results: " + results);
}