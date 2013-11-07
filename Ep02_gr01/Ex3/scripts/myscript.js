/**This function displays a menu depending of the radius button pressed
 *
 * @param 'rectangle' 	the radius button 'rectangle' has been pressed
 * @param 'circle'		the radius button 'circle' has been pressed
 */
function displayMenu(figure) {

	 x="Color: <select id=" + "color" + "><option value=" + "blue" + ">Blue</option><option value=" + "red" + ">Red</option><option value=" + "yellow" + ">Yellow</option></select><br>"
	 
	 if (figure=='rectangle'){
	 
		//uncheck the previous radius button value
		if(document.getElementById('circle') .checked == true){
		document.getElementById('circle') .checked = false;
		}

		x= x + "Width: <input type=" + "text" + " id=" + "width" + "><br>";
		x= x + "Heigth: <input type=" + "text" + " id=" + "height" + "><br>";
		x= x + "<input type=" + "button" + " onClick= drawRect() value=" + "Draw" + "></button>";

	} else if (figure=='circle'){
	
		//uncheck the previous radius button value
		if(document.getElementById('rectangle') .checked == true){
		document.getElementById('rectangle') .checked = false;
		}
		
		x= x + "Radius: <input type=" + "text" + " id=" + "radius" + "><br>";
		x= x + "Mode: <select id=" + "mode" + "><option value=" + "full" + ">Full</option><option value=" + "quarter" + ">Quarter</option><option value=" + "half" + ">Half</option><option value=" + "three_quarters" + ">Three quarters</option></select><br>"
		x= x + "<input type=" + "button" + " onClick=" + "drawCircle()" +" value=" + "Draw" + "></button>";
	}
	
	//reveals menu
	document.getElementById("features") .innerHTML=x;
}

/**This function draws a rectangle within a canvas**/
function drawRect() {
	
	//cleaning the previous message showed to the user
	document.getElementById("message") .innerHTML="";
	
	try{
		
		//Collecting the values in the form
		color = document.getElementById("color") .value;
		width = document.getElementById("width") .value;
		height = document.getElementById("height") .value;

		//canvas size variables
		canvasWidth= document.getElementById("myCanvas") .width;
		canvasHeight= document.getElementById("myCanvas") .height;

		//Error if the figure to draw is bigger than the canvas
		if(canvasWidth<width | canvasHeight<height){
			txt="Figure bigger than canvas. Canvas size: width " + canvasWidth + " x height " + canvasHeight;
			throw new Error(txt);
		}
		
		//Error if the width or height are not numbers
		if(!checkNumber(width) | !checkNumber(height)){
			throw new Error("Width and height must be numbers");
		}
		
		//Error if the user does not write anything
		if(width=="" | height=="" | width==null | height==null ){
			throw new Error("You must specify values");
		}
		
		var c=document.getElementById("myCanvas");
		var ctx=c.getContext("2d");
		//cleaning the canvas
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		ctx.fillStyle=color;
		//Draws the rectangle in the center of the canvas
		result = ctx.fillRect(parseInt(canvasWidth)/2-parseInt(width)/2,parseInt(canvasHeight)/2-parseInt(height)/2,width,height);
		00
	} catch(e) {
		document.getElementById("message") .innerHTML="<strong>" + e.message + "</strong>";
	}
}

/**This fucntion draws a circle within a canvas**/
function drawCircle() {
	
	//cleaning the previous message showed to the user
	document.getElementById("message") .innerHTML="";
	
	try{

		//Collecting the values in the form
		color = document.getElementById("color") .value;
		radius = document.getElementById("radius") .value;
		mode = document.getElementById("mode") .value;

		//canvas size variables
		canvasWidth= document.getElementById("myCanvas") .width;
		canvasHeight= document.getElementById("myCanvas") .height;
		
		//Error if the radius in bigger than the half of the canvas width
		if(canvasWidth/2 < radius){
			txt = "Radius bigger than canvas. Max radius: " + canvasWidth/2;
			throw new Error(txt);
		}
		
		//Error if the radius is not a number
		if(!checkNumber(radius)){
			throw new Error("Radius must be numbers");
		}
		
		//Error if the user does not write anything		
		if(radius=="" | radius==null ){
			throw new Error("You must specify values");
		}
		

		var c=document.getElementById("myCanvas");
		var ctx=c.getContext("2d");
		
		//cleaning the canvas
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		
		ctx.beginPath();
		ctx.fillStyle=color;
		
		//Selecting the way of drawing the circle
		switch(mode){
		case "full":		
		ctx.arc(200,200,radius,0,2*Math.PI);
		break;
		
		case "quarter":
		ctx.arc(200,200,radius,1.5*Math.PI,2*Math.PI);
		ctx.lineTo(200, 200);
		break;
		
		case "half":
		ctx.arc(200,200,radius,0,Math.PI);
		break;
		
		case "three_quarters":
		ctx.arc(200,200,radius,0,1.5*Math.PI);
		ctx.lineTo(200, 200);
		break;
		}
		
		ctx.closePath();
		//Draw the circle
		ctx.fill();
		
	} catch(e) {
		document.getElementById("message") .innerHTML="<strong>" + e.message + "</strong>";
	}
}


/**This function checks if a string contains only numbers 
 *
 * @param		string to analize.
 * @return		true if the string is composed just by numbers, otherwise false.
 */
function checkNumber(number){

	for(i=0;i<number.length;i++){
	
	//if the string character is not a number return false
	 if(number.charCodeAt(i)<48 | number.charCodeAt(i)>57){
		return false;
	 }
	 
	}
	return true;
}