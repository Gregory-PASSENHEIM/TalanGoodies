//21:24 06/06/2022
console.log("1) Chargement du script 'salesNavigatorAddOns.js'.");


// General Var.
//keyWord = "https://www.linkedin.com/sales/";
keyWord = "https://static-exp2.licdn.com/";


// Init
setTimeout(function(){waitForRightURL_03();}, 500, null);


// function : waitForRightURL_03
// args     : 
// Desc     : Wait for the right URL is present.
// return   : N/A
var repeat_WaitForRightURL_03 = true;
function waitForRightURL_03(event) {
console.log("STEP01-00 : (" + keyWord + ") - " + window.location.href);
	if(window.location.href.includes(keyWord)){
console.log("STEP01-01");
		addExportButton();
		repeat_WaitForRightURL_03 = false;
	} else { console.log("STEP01-02"); }

	// If the key word is not found : retry in 1 second.
	// else : the process is ongoing.
	if (repeat_WaitForRightURL_03){
		setTimeout(function(){waitForRightURL_03();},1000, null);
	}
}


// function : addExportButton
// args     : 
// Desc     : Parse the HTML code as Chrome DevTools to add Graph received via API.
// return   : N/A
var repeat_AddExportButton = true;
function addExportButton(event) {

	// Add Radar Graph on the SR Profile.
console.log("1)");
	if (document.getElementsByTagName("header") !== null){
console.log("2)");
		if (document.getElementsByTagName("header")[0] !== null){
console.log("3)");
			repeat_AddExportButton = false;
console.log("4)");

			/*
			// Generate the html of the table added in the evaluation part
			var candidateEval = document.getElementById("st-reviewRating").parentElement.parentElement;
			candidateEval.innerHTML = buildTableArea_02(candidateEval.innerHTML);
			*/
		}
	}
	// If the key word is not found : retry in 1 second.
	// else : the process is ongoing.
	if (repeat_AddExportButton){
		setTimeout(function(){addExportButton();},1000, null);
	}
}


// function : buildSelectBox
// args     : value = The Name and Label that has to be used for.
// Desc     : Create a dynamic HTML sctring
// return   : HTML string representing the Select Box.
function buildExportButton(value) {
	myInnerHTML = "<div><button id='save'>Export</button></div>";
	return myInnerHTML;
}