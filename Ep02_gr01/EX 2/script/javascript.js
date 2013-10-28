
var emptyFieldsArray;
var wrongFieldsArray;

var type;
var type1;
var type2;
var type3;
var name;
var mail;
var location;
var phone;
var description;
var notification;

function submitForm() {
	
	emptyFieldsArray = new Array();
	wrongFieldsArray = new Array();
	
	type = document.getElementById("formType");
	type1 = document.getElementById("formType1");
	type2 = document.getElementById("formType2");
	type3 = document.getElementById("formType2");
	name = document.getElementById("formName");
	mail = document.getElementById("formMail");
	location = document.getElementById("formLocation");
	phone = document.getElementById("formPhone");
	description = document.getElementById("formDescription");
	notification = document.getElementById("formNotification");
	
	var emptyFields = checkMandatoryFields();
	var wrongFields = checkFormat();
	
	
	if (!emptyFields && !wrongFields){
		sendMail();
		alert("Thank you for fulfilling the form. An email has been sent to the email provided.");
		return true;
	}
	else{
		alert("Please, fulfill the form correctly. Fields in red are mandatory and must be filled with a correct format. Fields in orange are not mandatory, but must have a correct format too.");
		return false;
	}
}

/* --------------- CHECK EMPTY FIELDS --------------------- */

function checkMandatoryFields() {
	var empty;
	
	empty = checkType();
	if(!empty){
		empty = checkName();
	}
	if(!empty){
		empty = checkMail();
	}
	if(!empty){
		empty = checkLocation();
	}
	if(!empty){
		empty = checkDescription();
	}
	
	alert("[DEBUG] checkMandatoryFields returns: " + empty);
	
	return empty;
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
	alert("[DEBUG] checkName starts");
	if (name.value == null || name.value == ""){
		emptyFieldsArray.push(" Username");
		//borderRed(name);
		alert("[DEBUG] checkName returns true");
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
		//borderRed(mail);
		return true;
	}
	else{
		return false;
	}
}

/*Return true if Location is empty*/
function checkLocation(){
	if (location.value == null || location.value == ""){
		emptyFieldsArray.push(" Location");
		//borderRed(location);
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
		//borderRed(description);
		return true;
	}
	else{
		return false;
	}
}

/* ----------------- CHECK WRONGLY FORMATTED FIELDS --------------------- */

function checkFormat() {
	alert("[DEBUG] checkFormat starts");
	var wrongFormat;
	
	wrongFormat = formatMail();
	if(!wrongFormat){
		wrongFormat = formatPhone();
	}
	
	alert("[DEBUG] checkFormat returns: " + wrongFormat);
	return wrongFormat;
}

/*Returns true if format of Mail is wrong. If correct or empty, returns false*/
function formatMail() {

	var atpos = mail.value.indexOf("@");
	var dotpos = mail.value.lastIndexOf(".");
	
	if(checkMail){
		return false
	}
	else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=mail.value.length){
		wrongFieldsArray.push(" Mail");
		//borderRed(mail);
		return true;
	}
	else {
		return false;
	}
}

/* Returns true if format of Phone is wrong. If correct or empty, returns false*/
function formatPhone() {
	var plusPos = phone.value.lastIndexOf("+");
	
	if(phone.value == null || phone.value == ""){
		return false
	}
	else if (plusPos != 0){
		wrongFieldsArray.push(" Phone");
		//borderOrange(phone);
		return true
	}
	else{
		return false
	}
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

