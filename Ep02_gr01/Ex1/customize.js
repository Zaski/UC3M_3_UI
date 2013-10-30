function switchLayers() {
	document.getElementById("rootContainer").className = "rootContainer hiddenClass";
	document.getElementById("formContainer").className = "formContainer shownClass";
}
	
function updateArticle() {
	/* Get input values */
	var colourElem = document.getElementById("colourSelection");
	
	var colour = colourElem.options[colourElem.selectedIndex].value;
	var style = document.querySelector('input[name="fontStyle"]:checked').value;
	var size = document.querySelector('input[name="fontSize"]:checked').value;

	/* Update properties and default selections */
	updateColour(colour);
	updateStyle(style);
	updateSize(size);
}

