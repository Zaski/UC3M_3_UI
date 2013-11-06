
$(document).ready(function(){

	/*GLOBAL VARIABLES DECLARATION*/
	var numberOfCards;
	var cardImages;
	var cardPositions;
	
	
	
	/* ---------- MAIN ---------- */
	 $("button").click(function(){
		prepareGame();
		var image;
		assignCards();
		
		
		
		
	});
	
	
	
	

	
	/* ---------- JS FUNCTIONS ---------- */
	
	function prepareGame(){
		/*Global variables initialization*/
		cardPositions = new Array();
		cardImages = new Array();
		numberOfCards = 12;
		
		fillArrayCardImages();
		fillArrayCardPositions();
		
		console.log("cardImages: " + cardImages);
		console.log("cardPositions before shuffle: " + cardPositions);
		shuffle(cardPositions);
		console.log("cardPositions after shuffle: " + cardPositions);
	}
	
	/*fills cardPositions array with strings from "card0" to "card<2*numberofCards>*/
	function fillArrayCardPositions(){

		for(var i=0; i<numberOfCards; i++){
			cardPositions.push("card" + i);
			cardPositions.push("card" + (numberOfCards + i));
		}

	}
	
	function fillArrayCardImages(){
		for(var i=1; i<=numberOfCards; i++){
			cardImages.push("images/card" + i + ".png");
		}
	}
	
	function assignCards(){
		for(var i=0; i<numberOfCards ; i++){
		
			image = cardImages[i];
			console.log(image);
			$("#" + cardPositions[i]).attr('src', image);
			$("#" + cardPositions[(i+numberOfCards)]).attr('src', image);
		}
	}
	
	/* Begin credits to: http://bost.ocks.org/mike/shuffle/ */
	function shuffle(array) {
	  var m = array.length, t, i;

	  // While there remain elements to shuffle…
	  while (m) {

		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);

		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	  }

	  return array;
	}
	/* End credits to: http://bost.ocks.org/mike/shuffle/ */
	
	
	
	
});

