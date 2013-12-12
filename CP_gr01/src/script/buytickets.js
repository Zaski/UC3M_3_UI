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
		$("#content2").show();
	});
	
	$( "#next2" ).click(function() {
		$("#content2").hide();
		$("#content3").show();
		alert("For this tab to show the appropriate content, a CVM system with a database behind is needed. Therefore, only the layout with default values is shown.");
	});
	
	$( "#previous2" ).click(function() {
		$("#content2").hide();
		$("#content1").show();
	});
	
	$( "#previous3" ).click(function() {
		$("#content3").hide();
		$("#content2").show();
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
