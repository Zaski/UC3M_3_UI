 <!--
	/* Shows form pop-up */
	function showPopup() {
		//document.getElementById("rootContainer").className = "rootContainer hiddenClass";
		document.getElementById("formContainer").className = "formContainer shownClass";
	} 
	
	/* Hides form pop-up */
	function hidePopup() {
		document.getElementById("formContainer").className = "formContainer hiddenClass";
		//document.getElementById("rootContainer").className = "rootContainer shownClass";
	}

	/* Gets local time and date */
	function getTime() {
		var date = new Date();
		document.write(date.getDay() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + "  ||  " 
			+ date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
	}

	/* Updates the article style according to the information provided in the form */
	function updateArticle() {
		var colourElem = document.getElementById("colourSelection");
		var colour = colourElem.options[colourElem.selectedIndex].value;
		updateColour(colour);		
		
		var sizes = document.getElementsByName("fontSize");
		for (var i=0, length=sizes.length; i<length; i++) {
			if (sizes[i].checked) {
				updateSize(sizes[i].value);
				break;
			}
		}
			
		var styles = document.getElementsByName('fontStyle');
		for (var i=0, length=styles.length; i<length; i++) {
			if (styles[i].checked) {
				updateStyle(styles[i].value); 
				break;
			}
		}
			
		hidePopup();
		return false;
	}

	/* Updates the article background colour to one of the followng: brown, green, white or gray */
	function updateColour(colour) {
		if (colour == "green") {
			document.getElementById("article").style.backgroundColor = "#D4E2B8";
		} else if (colour == "gray") {
			document.getElementById("article").style.backgroundColor = "#CCCCCC";
		} else if (colour == "brown") {
			document.getElementById("article").style.backgroundColor = "#E8CCA5";
		} else {
			document.getElementById("article").style.backgroundColor = "#FFFFFF";
		}
	}
	
	/* 
	 * Updates the article's content font size. Accepted values are: large (17px), default (14px)
	 * and small (11px)
	 */
	function updateSize(size) {
		var pxSize;
		if (size == "large") {
			pxSize = "17px";
		} else if (size == "small") {
			pxSize = "11px";
		} else { 
			pxSize = "14px";
		}
		
		var elems = document.getElementsByClassName("paragraph");
		var length = elems.length;
		for (var i=0; i<length; i++) {
			elems[i].style.fontSize = pxSize;
		}
	}

	/* Updates the article's content font styñe. Accepted values are: bold, default and italic. */
	function updateStyle(style) {
		var italic = "normal";
		var bold = "normal";
		if (style == "bold") {
			bold = "bold";
		} else if (style == "italic") {
			italic = "italic";		
		}
		
		var elems = document.getElementsByClassName('paragraph');
		for (var i=0, length=elems.length; i<length; i++) {
			elems[i].style.fontStyle = italic;	// Set italic
			elems[i].style.fontWeight = bold;	// Set bold
		}
	}
-->