
var emptyFieldsArray;
var wrongFieldsArray;

var type;
var type1;
var type2;
var type3;
var guyname;
var mail;
var guylocation;
var phone;
var description;
var notification;

console.log("CACA!");
/*
(function(win, doc){

})(window, document)*/

function submitForm() {
	
	emptyFieldsArray = new Array();
	wrongFieldsArray = new Array();
	
	type = document.getElementById("formType");
	type1 = document.getElementById("formType1");
	type2 = document.getElementById("formType2");
	type3 = document.getElementById("formType3");
	guyname = document.getElementById("formName");
	mail = document.getElementById("formMail");
	guylocation = document.getElementById("formLocation");
	phone = document.getElementById("formPhone");
	description = document.getElementById("formDescription");
	notification = document.getElementById("formNotification");
			
	var emptyFields = checkMandatoryFields();
	var wrongFields = checkFormat();
	
	
	if (!emptyFields && !wrongFields){
		alert("Thank you for fulfilling the form. An email has been sent to the email provided.\nNow, an error will prompt in your web browser, as this webpage has no server-side support to being able to send emails");
		sendMail();
	}
	else{
		alert("Please, fulfill the form correctly. Fields in red are mandatory and must be filled with a correct format. Fields in orange are not mandatory, but must have a correct format too.\nEmpty mandatory fields: " + emptyFieldsArray + "\nWrong fields: " + wrongFieldsArray);
	}
}

/* --------------- CHECK EMPTY FIELDS --------------------- */

/* Returns true when some mandatory field is empty */
function checkMandatoryFields() {
	var somethingEmpty;
	
	var emptyType = checkType();
	var emptyName = checkName();
	var emptyMail = checkMail();
	var emptyLocation = checkLocation();
	var emptyDescription = checkDescription();
		
	if (!emptyType && !emptyName && !emptyMail && !emptyLocation && !emptyDescription){
		somethingEmpty = false;
	}
	else{
		somethingEmpty = true;
	}
		
	return somethingEmpty;
}

/*Return true if Type is not selected*/
function checkType(){
	if(!type1.checked){
		if(!type2.checked){
			if(!type3.checked){
				emptyFieldsArray.push(" Type");
				borderRed(type);
				return true;
			}
		}
	}
	else{
		return false;
	}
}

/*Return true if Username is empty*/
function checkName(){
	if (guyname.value == null || guyname.value == ""){
		emptyFieldsArray.push(" Username");
		borderRed(guyname);
		return true;
	}
	else{
		return false;
	}
}

/*Return true if Mail is empty*/
function checkMail(){
	if (mail.value == null || mail.value == ""){
		emptyFieldsArray.push(" Email");
		borderRed(mail);
		return true;
	}
	else{
		return false;
	}
}

/*Return true if Location is empty*/
function checkLocation(){
	if (guylocation.value == null || guylocation.value == ""){
		emptyFieldsArray.push(" Location");
		borderRed(guylocation);
		return true;
	}
	else{
		return false;
	}
}

/*Return true if Description is empty*/
function checkDescription(){
	if (description.value == null || description.value == ""){
		emptyFieldsArray.push(" Description of the problem");
		borderRed(description);
		return true;
	}
	else{
		return false;
	}
}

/* ----------------- CHECK WRONGLY FORMATTED FIELDS --------------------- */

/* Returns true when the format of any of the fields that require special formatting is wrong */
function checkFormat() {
	
	var wrongFormat;
	
	var wrongMail = formatMail();
	var wrongPhone = formatPhone();
	
	if (!wrongMail && !wrongPhone){
		wrongFormat = false;
	}
	else{
		wrongFormat = true;
	}
	
	return wrongFormat;
}

/*Returns true if format of Mail is wrong. If correct or empty, returns false*/
function formatMail() {
	
	var thereIsDot = mail.value.indexOf(".");
	var atpos = mail.value.indexOf("@");
	var dotpos = mail.value.lastIndexOf(".");
	
	if(!checkMail){
		return false
	}
	else if (atpos < 1 || dotpos < atpos+2 || dotpos+2 >= mail.value.length || atpos === -1 || thereIsDot === -1){
		wrongFieldsArray.push(" Email");
		borderRed(mail);
		return true;
	}
	else {
		return false;
	}
}

/* Returns true if format of Phone is wrong. If correct or empty, returns false*/
function formatPhone() {
	var plusPos = phone.value.lastIndexOf("+");
	var numbers = phone.value.substring(1, phone.value.length);
	
	if(phone.value == null || phone.value == ""){
		return false
	}
	
	if (plusPos != 0 || !checkNumber(numbers)){
		wrongFieldsArray.push(" Phone");
		borderOrange(phone);
		return true
	}
	return false
}

/* Returns false if string 'number' is not composed only by digits. Otherwise true */
function checkNumber(number){

	for(i=0;i<number.length;i++){
	
	//if the string character is not a number return false
	 if(number.charCodeAt(i)<48 | number.charCodeAt(i)>57){
		return false;
	 }
	 
	}
	return true;
}

/* ------------------ CHANGE BORDER COLOR WHEN REQUESTED -------------------- */

function borderRed(elemment) {
	elemment.style.border = "3px solid red";
}

function borderOrange(elemment) {
	elemment.style.border = "3px solid orange";
}

/* --------------------- SEND MAIL TO PROVIDED E-MAIL ----------------- */
function sendMail() {

	var link = mail.value
             + "&subject=" + escape("UI Practice 2 - Group 1")
             + "&body=" + escape("Thank you for fulfilling our form in Generic Sports.");

    window.location.href = link;
	
}

/*--------------------------*/

