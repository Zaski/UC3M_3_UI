$(document).ready(function(){

	/*GLOBAL VARIABLES DECLARATION*/
	
	
	/*Make all select elements have a blank space by default*/
	$('#formFilm').prop('selectedIndex', -1)
	$('#formCinema').prop('selectedIndex', -1)
	$('#formSession').prop('selectedIndex', -1)
	$('#formPayment').prop('selectedIndex', -1)
	
	/*Button handling*/
	$( "#next1" ).click(function() {
		$("#content1").hide();
		$("#content3").hide();
		$("#content2").show();
		
		$(".tab").css('background-image','url(images/menuBackgroundPattern.png)');
		$(".tab").css('border-bottom','solid 1px white');
		$("#tab2").css('background-image','none');
		$("#tab2").css('border-bottom','none');
	});
	
	$( "#next2" ).click(function() {
		$("#content2").hide();
		$("#content1").hide();
		$("#content3").show();
		
		$(".tab").css('background-image','url(images/menuBackgroundPattern.png)');
		$(".tab").css('border-bottom','solid 1px white');
		$("#tab3").css('background-image','none');
		$("#tab3").css('border-bottom','none');
		
		alert("For this tab to show the appropriate content, a CVM system with a database behind is needed. Therefore, only the layout with default values is shown.\n\nAlso, a CVM system is taken for granted at this point, which would be the one handling the proper introduction of data in the form.");
	});
	
	$( "#previous2" ).click(function() {
		$("#content2").hide();
		$("#content3").hide();
		$("#content1").show();
		
		$(".tab").css('background-image','url(images/menuBackgroundPattern.png)');
		$(".tab").css('border-bottom','solid 1px white');
		$("#tab1").css('background-image','none');
		$("#tab1").css('border-bottom','none');
	});
	
	$( "#previous3" ).click(function() {
		$("#content3").hide();
		$("#content1").hide();
		$("#content2").show();
		
		$(".tab").css('background-image','url(images/menuBackgroundPattern.png)');
		$(".tab").css('border-bottom','solid 1px white');
		$("#tab2").css('background-image','none');
		$("#tab2").css('border-bottom','none');
	});
	
	/*Popup handling*/
	$( "#buy" ).click(function() {
		$(".popup").fadeIn();
	});
	
	$( ".continueButton" ).click(function() {
		$(".popup").fadeOut();
	});
	
	$( ".signupButton" ).click(function() {
		$(".popup").fadeOut();
	});
	
	/*Tab clicking handling*/
	$( "#tab2" ).click(function() {
		$("#next1").click();
	});
	
	$( "#tab3" ).click(function() {
		$("#next2").click();
	});
	
	$( "#tab1" ).click(function() {
		$("#previous2").click();
	});
	
	/*Show alert on login*/
	$( "#loginSubmit" ).click(function() {
		alert("Having a login system requires the usage of a database and a MVC system, which is not implemented.\n\nThis login box is for interface modelling purposes only, but has no functionalities at all. Please ignore it for usage.");
	});
	
	/*Show/hide proper div when payment method is chosen*/
	$("#formPayment").change(function() {
		if( $(this).val() == "credit" ){
			$("#paymentOption1").show();
			$("#paymentOption2").hide();
		}
		if( $(this).val() == "payondelivery" ){
			$("#paymentOption2").show();
			$("#paymentOption1").hide();
		}
	});
	
	
});
