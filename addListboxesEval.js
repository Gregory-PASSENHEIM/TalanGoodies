// Globals variables déclaration
const matieres = ["Java", "Communication", "Vulgarisation", "Test01", "Test02"];


// Init
//console.log("SCRIPT:addListboxesEval.js");
setTimeout(function(){waitForRightURL_02();}, 500, null);

// function : waitForRightURL_02
// args     : 
// Desc     : Wait for the right URL is present.
// return   : N/A
var repeat_WaitForRightURL_02 = true;
function waitForRightURL_02(event) {

	if(window.location.href.includes("reviews")){
//console.log("STEP01-00");
		addListboxesToEval();
		repeat_WaitForRightURL_02 = false;
	} else { console.log("STEP01-01"); }

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
		var candidateEval = document.getElementById("st-reviewRating").parentElement;
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
	myInnerHTML = "";
	myInnerHTML += "<table style='width:100%' border=1>";
	myInnerHTML += "	<tr>";
	myInnerHTML += "		<td rowspan=2>" + innerHTML + "</td>";
	if (matieres.length%2 == 0) { nbItemsPremiereLine = Math.floor(matieres.length/2); } else { nbItemsPremiereLine = Math.floor(matieres.length/2) + 1; }
	for (let i = 0; i <= nbItemsPremiereLine; i++) {
console.log("  1) i : " + i);
		myInnerHTML += "		<td>A-" + buildSelectBox(matieres[i]) + "</td>";
		i++;
	}
	myInnerHTML += "	</tr>";
	myInnerHTML += "	<tr>";
	for (let i = nbItemsPremiereLine; i < matieres.length; i++) {
console.log("  2) i : " + i);
 		myInnerHTML += "		<td>B-" + buildSelectBox(matieres[i]) + "</td>";
	}
	myInnerHTML += "	</tr>";
	myInnerHTML += "</table>";
//console.log("  myInnerHTML - buildTableArea_02 - 01 : " + myInnerHTML);
	return myInnerHTML;
}

// function : buildSelectBox
// args     : value = The Name and Label that has to be used for.
// Desc     : Create a dynamic HTML sctring
// return   : HTML string representing the Select Box.
function buildSelectBox(value) {
console.log("    value : " + value);
	myInnerHTML = "";
	myInnerHTML += "<label for='" + value + "'>" + value + ":</label>";
	myInnerHTML += "<select id='" + value + "'>";
	myInnerHTML += "	<option value='0'>0</option>";
	myInnerHTML += "	<option value='1'>1</option>";
	myInnerHTML += "	<option value='2'>2</option>";
	myInnerHTML += "	<option value='3'>3</option>";
	myInnerHTML += "	<option value='4'>4</option>";
	myInnerHTML += "	<option value='5'>5</option>";
	myInnerHTML += "	</select>";
//console.log("  myInnerHTML - buildSelectBox - 01 : " + myInnerHTML);
	return myInnerHTML;
}

