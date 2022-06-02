/* ---------------------------------------------- */
/* |     Add the listbox of evaluation part     | */
/* ---------------------------------------------- */

// Globals variables déclaration
const matieres = ["Java", "Comm.", "Vulg.", "Test01", "Test02", "Test0A", "Test0B"];


// Init
//console.log("SCRIPT:addListboxesEval.js");
setTimeout(function(){waitForRightURL_02();}, 500, null);

// function : waitForRightURL_02
// args     : 
// Desc     : Wait for the right URL is present.
// return   : N/A
var repeat_WaitForRightURL_02 = true;
function waitForRightURL_02(event) {

console.log("STEP01-00 : (reviews) - " + window.location.href);
	if(window.location.href.includes("reviews")){
//console.log("STEP01-01");
		addListboxesToEval();
		repeat_WaitForRightURL_02 = false;
	} else { console.log("STEP01-02"); }

	// If the key word is not found : retry in 1 second.
	// else : the process is ongoing.
	if (repeat_WaitForRightURL_02){
		setTimeout(function(){waitForRightURL_02();},1000, null);
	}
}


// function : addListboxesToEval
// args     : 
// Desc     : Parse the HTML code as Chrome DevTools to add Graph received via API.
// return   : N/A
var repeat_AddListboxesToEval = true;
function addListboxesToEval(event) {
	
	// Add Radar Graph on the SR Profile.
	if (document.getElementById("st-reviewRating") !== null){
		repeat_AddListboxesToEval = false;

		// Generate the html of the table added in the evaluation part
		var candidateEval = document.getElementById("st-reviewRating").parentElement.parentElement;
		candidateEval.innerHTML = buildTableArea_02(candidateEval.innerHTML);
	}
	// If the key word is not found : retry in 1 second.
	// else : the process is ongoing.
	if (repeat_AddListboxesToEval){
		setTimeout(function(){addListboxesToEval();},1000, null);
	}
}


// function : buildTableArea_02
// args     : innerHTML = The HTML that were present before the execution.
//            innerHTML = The Name and Label that has to be used for.
// Desc     : Create a dynamic HTML sctring
// return   : HTML string representing the Select Box.
function buildTableArea_02(innerHTML) {
	nbItemsPremiereLine = Math.floor(matieres.length/2)+matieres.length%2;
//console.log(" nbItemsPremiereLine : " + nbItemsPremiereLine);
	
	myInnerHTML = "";
	myInnerHTML += "		<table style='width:100%' border=1>";
	myInnerHTML += "          <tr>";
	myInnerHTML += "            <td rowspan=2 style='width:105px'>" + innerHTML + "</td>";
	for (let i = 0; i < nbItemsPremiereLine; i++) {
		myInnerHTML += buildSelectBox(matieres[i]);
	}
	myInnerHTML += "          </tr>";
	myInnerHTML += "          <tr>";
	for (let i = nbItemsPremiereLine; i < matieres.length; i++) {
 		myInnerHTML += buildSelectBox(matieres[i]);
	}
	myInnerHTML += "          </tr>";
	myInnerHTML += "		</table>";

	return myInnerHTML;
}


// function : buildSelectBox
// args     : value = The Name and Label that has to be used for.
// Desc     : Create a dynamic HTML sctring
// return   : HTML string representing the Select Box.
function buildSelectBox(value) {
//console.log("    value : " + value);
	myInnerHTML = "";
	myInnerHTML += "<td><label for='" + value + "'>" + value + ":</label></td>";
	myInnerHTML += "<td style='width:15px'>";
	myInnerHTML += "	<select id='" + value + "'>";
	myInnerHTML += "		<option value='-1'>N/A</option>";
	myInnerHTML += "		<option value='0'>0</option>";
	myInnerHTML += "		<option value='1'>1</option>";
	myInnerHTML += "		<option value='2'>2</option>";
	myInnerHTML += "		<option value='3'>3</option>";
	myInnerHTML += "		<option value='4'>4</option>";
	myInnerHTML += "		<option value='5'>5</option>";
	myInnerHTML += "	</select>";
	myInnerHTML += "</td>";
//console.log("  myInnerHTML - buildSelectBox - 01 : " + myInnerHTML);
	return myInnerHTML;
}
