
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
		alert("Form submitted properly");
		return true;
	}
	else{
		if(emptyFields){
			alert("The following fields are empty: " + emptyFieldsArray);
		}
		if(wrongFields){
			alert("The following fields have a wrong format: " + wrongFieldsArray);
		}
		return false;
	}
}

/* ------------------------------------ */

function checkMandatoryFields() {
	var empty;
	
	empty = checkType();
	empty = checkName();
	empty = checkMail();
	empty = checkLocation();
	empty = checkDescription();
	
	alert("checkMandatoryFields returns: " + empty);
	
	return empty;
}

function checkType(){
	if(!type1.checked){
		if(!type2.checked){
			if(!type3.checked){
				emptyFieldsArray.push(" Type");
				type.style.border="3px solid red";
				return true;
			}
		}
	}
	else{
		return false;
	}
}

function checkName(){
	alert("checkName starts");
	if (name.value == null || name.value == ""){
		emptyFieldsArray.push(" Username");
		//name.style.border="3px solid red";
		alert("checkName returns true");
		return true;
	}
	else{
		return false;
	}
}

function checkMail(){
	if (mail.value == null || mail.value == ""){
		emptyFieldsArray.push(" Email");
		//mail.style.border="3px solid red";
		return true;
	}
	else{
		return false;
	}
}

function checkLocation(){
	if (location.value == null || location.value == ""){
		emptyFieldsArray.push(" Location");
		//location.style.border="3px solid red";
		return true;
	}
	else{
		return false;
	}
}

function checkDescription(){
	if (description.value == null || description.value == ""){
		emptyFieldsArray.push(" Description of the problem");
		//description.style.border="3px solid red";
		return true;
	}
	else{
		return false;
	}
}

/* -------------------------------------- */

function checkFormat() {
	alert("checkFormat TEST");
	return true;
}

/* -------------------------------------- */

function sendMail() {
	alert("sendMail");
}

/*--------------------------*/

