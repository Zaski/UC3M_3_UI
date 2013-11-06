
$(document).ready(function(){

	/*GLOBAL VARIABLES DECLARATION*/
	var numberOfCards;
	var cardImages;
	var cardPositions;
	
	
	
	/* ---------- MAIN ---------- */
	 $(document).on('click', '#play', function() {
		console.log("preparing Game...");
		prepareGame();
		var image;
		console.log("assigning values to cards...");
		assignCards();
		console.log("hidding cards, showing reverse...");
		hideCardsShowReverse();
		
		
		
		
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
	
	function hideCardsShowReverse(){
		console.log("estoy en hideCardsShowReverse");
		//test: change attribute 'display' of the first card to 'nonoe'. Expected result: there is 1 card less. Result: there are still 24 cards...
		$('#card0').attr('display', 'none');
		$('img.cardReverse').attr('display', 'block');
		console.log("job done");
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

