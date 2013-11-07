
$(document).ready(function(){

	/*GLOBAL VARIABLES DECLARATION*/
	var numberOfCards;
	var cardImages;
	var cardPositions;
	var numOfClicks;
	var numOfPairsUnhidden;
	var timer;
	var time;
	
	
	/* ---------- MAIN ---------- */
	//show instructions pupup
	$(document).on('click', '#instructions', function(){
		console.log("instructions button pressed");
		$('#popup').fadeIn();
	});
	
	//close popup
	$(document).on('click', '#close', function(){
		console.log("close button pressed");
		$('#popup').fadeOut();
	});
	
	//refresh the page to play a new game
	$(document).on('click', '#replay', function(){
		location.reload();
		//$('#play').click();
	});
	
	//start the game when the play button is pressed
	$(document).on('click', '#play', function() {
		timer = self.clearInterval(timer);
		time = 0;
		$('#play').hide();
		$('#replay').show();
		prepareGame();
		assignCards();
		timer = self.setInterval(function(){clock()},1000);

		
		var card1;
		var card2;
		var idCard1;
		var idCard2;
				
		$(document).on('click', '.cardReverse', function(){
			numOfClicks++;
			var id = $(this).attr('id');
			var number = id.substring(7, id.length);
			var even = numOfClicks % 2 == 0;
			console.log("even: " + even);
			
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
					alert("Congratulations! You won!\nTime invested: " + time + " seconds.\nClicks done: " + numOfClicks + ".");
					timer = self.clearInterval(timer);

				}
			}
			
			
		});
	});
	
	
	
	

	
	/* ---------- JS FUNCTIONS ---------- */
	function clock()
	{
		var t = ++time;
		$('#timer').text(t);
	}
	
	function prepareGame(){
		/*Global variables initialization*/
		cardPositions = new Array();
		cardImages = new Array();
		numberOfCards = 12;
		numOfClicks = 0;
		numOfPairsUnhidden = 0;
		
		fillArrayCardImages();
		fillArrayCardPositions();
		
		shuffle(cardPositions);
	}
	
	/*fills cardPositions array with strings from "card0" to "card<2*numberofCards>*/
	function fillArrayCardPositions(){

		for(var i=0; i<numberOfCards; i++){
			cardPositions.push("card" + i);
			cardPositions.push("card" + (numberOfCards + i));
		}

	}
	
	/*fills cardImages array with possible names of the img files*/
	function fillArrayCardImages(){
		for(var i=1; i<=numberOfCards; i++){
			cardImages.push("images/card" + i + ".png");
		}
	}
	
	/* Each card is displayed in 2 different of the 24 available positions*/
	function assignCards(){
		var image;
		for(var i=0; i<numberOfCards ; i++){
		
			image = cardImages[i];
			$("#" + cardPositions[i]).attr('src', image);
			$("#" + cardPositions[(i+numberOfCards)]).attr('src', image);
		}
	}
	
	/* Hide card in position number and show the reverse image*/
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
	
	/* If 3rd card is pressed and the previous 2 are not equal, hide them both*/
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

