<!--
	function showBrowserInfo() {
		document.write("<br><br>");
		document.write("You are using <i>" + navigator.appCodeName + " " + navigator.appName + "</i><br> version <i>" + navigator.appVersion 
			+ "</i><br> on <i>" + navigator.platform + "</i>");
		document.write("<br><br>");
				
		var status;
		if (navigator.cookieEnabled == true) {
			status = "ON";
		} else {
			status = "OFF";
		}
		document.write("Your cookies are <i>" + status + "</i><br><br><br>");	
	}	
	
	function setDefaultBackground() {
		var isChrome = window.chrome;
		if(isChrome) {
			document.getElementById("article").style.backgroundColor = "#FFFFFF";
		} else { 
			document.getElementById("article").style.backgroundColor = "#CCCCCC";	
		}
	}
-->