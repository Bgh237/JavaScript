// 09.07 JavasScript code
	
// Create an array with file names of images
var imageNames = ["cloud.png", "face.png", "heart.png", "moon.png", "sun.png"]; 

// Use a for loop to show all the images. 

for (i = 0; i < imageNames.length; i++) {
    document.write('<img src="' + imageNames[i] + '" alt="Funny image' + (i + 1) + '">"');
}

    // Use the document.write() method to write one new image element to the web page per each image.





