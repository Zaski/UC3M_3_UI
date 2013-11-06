
$(document).ready(function(){

	/*GLOBAL VARIABLES DECLARATION*/
	var numberOfCards;
	var cardImages;
	var cardPositions;
	var numOfClicks;
	var numOfPairsUnhidden;
	
	
	/* ---------- MAIN ---------- */
	$(document).on('click', '#play', function() {
		prepareGame();
		assignCards();
		alert("Game ready!");
		var card1;
		var card2;
		var idCard1;
		var idCard2;
				
		$(document).on('click', '.cardReverse', function(){
			numOfClicks++;
			var id = $(this).attr('id');
			var number = id.substring(7, id.length);
			var even = numOfClicks % 2 == 0;
			console.log(even);
			
			if(!even){
				hideCardShowReverse(number);
				
				if(card1 == card2){
					console.log("previous pair is equal");
					numOfPairsUnhidden++;
				}
				else{
					console.log("previous pair is different");
					hidePairOfCards(idCard1, idCard2);
				}
				
				card1 = $('#card' + number).attr('src');
				idCard1 = number;
			}
			else{
				hideCardShowReverse(number);
				card2 = $('#card' + number).attr('src');
				idCard2 = number;
				
				if(numOfPairsUnhidden == numberOfCards){
					alert("Congratulations! You won!");
				}
			}
			
			
			/*
			if(numberOfUnhidden() < 2){
				hideCardShowReverse(number);
			}
			else{
				console.log("there are 2 unhidden cards");
				
			}
			*/
			
		});
	});
	
	
	
	

	
	/* ---------- JS FUNCTIONS ---------- */
	
	function prepareGame(){
		/*Global variables initialization*/
		cardPositions = new Array();
		cardImages = new Array();
		numberOfCards = 12;
		numOfClicks = 0;
		numOfPairsUnhidden = 0;
		
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
		var image;
		for(var i=0; i<numberOfCards ; i++){
		
			image = cardImages[i];
			$("#" + cardPositions[i]).attr('src', image);
			$("#" + cardPositions[(i+numberOfCards)]).attr('src', image);
		}
	}
	
	function hideCardShowReverse(number){
		$('#card' + number).show();
		$('#reverse' + number).hide();
	}
	
	/* Return number of unhidden cards*/
	function numberOfUnhidden(){
		var status;
		var unhidden = 0;
		for(var i=0; i<(numberOfCards*2); i++){
				status = $('#card' + i).css('display');
				if(status != "none"){
					unhidden++;
				}
		}
		return unhidden;
	}
	
	function hidePairOfCards(card1, card2){
		$('#card' + card1).hide();
		$('#reverse' + card1).show();
		
		$('#card' + card2).hide();
		$('#reverse' + card2).show();
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

