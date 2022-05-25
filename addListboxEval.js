console.log("SCRIPT:addListboxEval.js");
/*
setTimeout(function(){addGraphToProfileInsert();},1000, null);

// Create new ITEM to add to the IHM
function addGraphToIHM(nodeToAdd) {
	// Create a "SPAN" node:
	const nodeSPAN = document.createElement("span");
	nodeSPAN.setAttribute("class", "avatar-thumb ng-binding ng-scope");
	nodeSPAN.setAttribute("ng-if", "$ctrl.showInitials");
	nodeSPAN.setAttribute("ng-bind", "$ctrl.state.initials");

	// Create a "IMG" sub node:
	const nodeIMG = document.createElement("img");
	nodeIMG.setAttribute("src", "https://d2mvzyuse3lwjc.cloudfront.net/doc/en/UserGuide/images/Radar_Chart/Radar_Chart_01.png?v=26493");
	nodeIMG.setAttribute("alt", "Radar");
	nodeIMG.setAttribute("width", "150");
	nodeIMG.setAttribute("height", "126");

	// Append the IMG node to the "SPAN" node:
	nodeSPAN.appendChild(nodeIMG);
	
	// Append the "SPAN" node to the nodeToAdd:
	nodeToAdd.parentNode.insertBefore(nodeSPAN, nodeToAdd.nextSibling);
}


// Create new ITEM to add to the IHM
function addEvalToIHM(nodeToAdd, label) {
	// Create a "DIV" node:
	const nodeDIV1 = document.createElement("div");

	// Create a "DIV" node:
	const nodeDIV2 = document.createElement("div");
	nodeDIV2.setAttribute("class", "group-label tooltip-trigger");

	// Create a "SPAN" sub node:
	const nodeSPAN = document.createElement("span");
	nodeSPAN.setAttribute("class", "form-label is-required ng-binding");

	// Create a "LABEL" sub node:
	const nodeLABEL = document.createElement("label");
	nodeLABEL.innerHTML = label

	// Create a "SELECT" sub node:
	const nodeSELECT = document.createElement("select");
	nodeSELECT.setAttribute("id", "index_" + label);
	nodeSELECT.setAttribute("size", "1");

	// Create a "OPTION 00" sub node:
	const nodeOPTION0 = document.createElement("option");
	nodeOPTION0.setAttribute("value", "0");
	nodeOPTION0.innerHTML = "0"

	// Create a "OPTION 01" sub node:
	const nodeOPTION1 = document.createElement("option");
	nodeOPTION1.setAttribute("value", "1");
	nodeOPTION1.innerHTML = "1"

	// Create a "OPTION 02" sub node:
	const nodeOPTION2 = document.createElement("option");
	nodeOPTION2.setAttribute("value", "2");
	nodeOPTION2.innerHTML = "2"

	// Create a "OPTION 03" sub node:
	const nodeOPTION3 = document.createElement("option");
	nodeOPTION3.setAttribute("value", "3");
	nodeOPTION3.innerHTML = "3"

	// Create a "OPTION 04" sub node:
	const nodeOPTION4 = document.createElement("option");
	nodeOPTION4.setAttribute("value", "4");
	nodeOPTION4.innerHTML = "4"

	// Create a "OPTION 05" sub node:
	const nodeOPTION5 = document.createElement("option");
	nodeOPTION5.setAttribute("value", "5");
	nodeOPTION5.innerHTML = "5"


	// Append the IMG node to the "SPAN" node:
	nodeSELECT.appendChild(nodeOPTION0);
	nodeSELECT.appendChild(nodeOPTION1);
	nodeSELECT.appendChild(nodeOPTION2);
	nodeSELECT.appendChild(nodeOPTION3);
	nodeSELECT.appendChild(nodeOPTION4);
	nodeSELECT.appendChild(nodeOPTION5);
	nodeSPAN.appendChild(nodeLABEL);
	nodeSPAN.appendChild(nodeSELECT);
	nodeDIV2.appendChild(nodeSPAN);
	nodeDIV1.appendChild(nodeDIV2);

	//console.log("   => nodeDIV1 : ");
	//console.log("          " + nodeDIV1.innerHTML);
	
	// Append the "SPAN" node to the nodeToAdd:
	nodeToAdd.appendChild(nodeDIV1);
}


var repeat_AddGraphToProfileInsert = true;
function addGraphToProfileInsert(event) {
	// function : addGraphToProfileInsert
	// args     : 
	// Desc     : Parse the HTML code as Chrome DevTools to add Graph received via API.
	// return   : N/A

	// Add graph on the Profile insert.
	fullNode = getHTML();
	if (document.getElementById("st-applicantName") !== null){
		repeat_AddGraphToProfileInsert = false;
		var candidateInfo = document.getElementById("st-applicantName").parentElement.parentElement.parentElement;
		//myInnerHTML  = "<table id='GPAchartIsHereGPA' border=1><tr><td width=400><!--START001-->" + candidateInfo.innerHTML + "<!--STOP001--></td><td>";
		//myInnerHTML += "    <div id='chartIsHere' style='height: 200px; border:1px solid black;'>";
		//myInnerHTML += "		<script>";
		//myInnerHTML += "			google.charts.load('upcoming', {'packages': ['vegachart']}).then(addChartHere);";
	    //myInnerHTML += "			function addChartHere(){console.log('ICI001');addChart(chartValues);console.log('ICI002');}";
		//myInnerHTML += "			var chartValues = [ {'key': 'GPAjavaGPA', 'value': 1, 'category': 0}, {'key': 'perso', 'value': 2, 'category': 0}, {'key': 'comm', 'value': 3, 'category': 0}, {'key': 'soft', 'value': 4, 'category': 0}, {'key': 'smart', 'value': 5, 'category': 0}, {'key': 'GPAjavaGPA', 'value': 5, 'category': 1}, {'key': 'perso', 'value': 4, 'category': 1}, {'key': 'comm', 'value': 3, 'category': 1}, {'key': 'soft', 'value': 2, 'category': 1}, {'key': 'smart', 'value': 1, 'category': 1}, {'key': 'GPAjavaGPA', 'value': 1, 'category': 2}, {'key': 'perso', 'value': 4, 'category': 2}, {'key': 'comm', 'value': 3, 'category': 2}, {'key': 'soft', 'value': 5, 'category': 2}, {'key': 'smart', 'value': 2, 'category': 2},];";
		//myInnerHTML += "		</script>";
		//myInnerHTML += "	</div>";
		//myInnerHTML += "</td></tr><tr visibility:collapse;><td colspan=2 visibility:collapse;><img src='https://s3.amazonaws.com/smart-branding/android-chrome-192x192.png' height=0 width=590></td></tr></table>";

		myInnerHTML  = "		<table id='GPAchartIsHereGPA' border=1><tr><td width=400>";
		myInnerHTML += "			<!--START001-->";
		myInnerHTML +=  			candidateInfo.innerHTML;
		myInnerHTML += "			<!--STOP001-->";
		myInnerHTML += "			</td><td>";
		myInnerHTML += "				<div id='chartIsHere' style='height: 200px; border:1px solid black;'>";
		//myInnerHTML += "					<script>";
		//myInnerHTML += "						google.charts.load('upcoming', {'packages': ['vegachart']}).then(addChartHere);";
		//myInnerHTML += "						function addChartHere(){console.log('ICI001');addChart(chartValues);console.log('ICI002');}";
		//myInnerHTML += "						var chartValues = [ {'key': 'java', 'value': 1, 'category': 0}, {'key': 'perso', 'value': 2, 'category': 0}, {'key': 'comm', 'value': 3, 'category': 0}, {'key': 'soft', 'value': 4, 'category': 0}, {'key': 'smart', 'value': 5, 'category': 0}, {'key': 'java', 'value': 5, 'category': 1}, {'key': 'perso', 'value': 4, 'category': 1}, {'key': 'comm', 'value': 3, 'category': 1}, {'key': 'soft', 'value': 2, 'category': 1}, {'key': 'smart', 'value': 1, 'category': 1}, {'key': 'java', 'value': 1, 'category': 2}, {'key': 'perso', 'value': 4, 'category': 2}, {'key': 'comm', 'value': 3, 'category': 2}, {'key': 'soft', 'value': 5, 'category': 2}, {'key': 'smart', 'value': 5, 'category': 2},];";
		//myInnerHTML += "					</script>";
		myInnerHTML += "				</div>";
		myInnerHTML += "			</td></tr>";
		myInnerHTML += "			<tr visibility:collapse;><td colspan=2 visibility:collapse;><img src='https://s3.amazonaws.com/smart-branding/android-chrome-192x192.png' height=0 width=590></td></tr>";
		myInnerHTML += "		</table>";

		candidateInfo.innerHTML = myInnerHTML;
		
		//console.log(myInnerHTML);
	}
	// If the key word is not found : retry in 1 second.
	// else : the process is ongoing.
	if (repeat_AddGraphToProfileInsert){
		setTimeout(function(){addGraphToProfileInsert();},1000, null);
	}
}

var repeat_AddInputToInterviews = true;
function addInputToInterviews(event) {
	// function : addInputToInterviews
	// args     : 
	// Desc     : Parse the HTML code as Chrome DevTools to add Graph received via API.
	// return   : N/A


	// Add graph on the Profile insert.
	fullNode = getHTML();
	if (fullNode !== null){
		if (fullNode.outerHTML.includes("Overall Rating")){
			repeat_AddInputToInterviews = false;
			var children = fullNode.getElementsByTagName('span');
			for( i=0; i< children.length; i++ ){
				var child = children[i];
				if (child !== null){
					if(child.innerHTML == "Overall Rating"){
						console.log("   => addInputToInterviews Trouvé!!");
						addEvalToIHM(child.parentNode.parentNode, "Communication");
						addEvalToIHM(child.parentNode.parentNode, "Issue Fixing");
						addEvalToIHM(child.parentNode.parentNode, "Vulgarisation");
						addEvalToIHM(child.parentNode.parentNode, "Dev - FromScratch");
						addEvalToIHM(child.parentNode.parentNode, "Dev - Explanation");
						//console.log("        => Parent 4 : " + child.parentNode.parentNode.parentNode.parentNode.innerHTML);
					}
				}
			}
		}
	}

	// If the key word is not found : retry in 1 second.
	// else : the process is ongoing.
	if (repeat_AddInputToInterviews){
		setTimeout(function(){addInputToInterviews();},1000, null);
	}
}


function getHTML() {
	// function : getHTML
	// args     : 
	// Desc     : Parse the HTML code as Chrome DevTools do and return the needed node.
	// return   : HTMLNode
	var html = '', node = document.firstChild
	var returnNode = null
	while (node) {
		if(node.nodeType == Node.ELEMENT_NODE){returnNode = node;}
		node = node.nextSibling
	}
	return returnNode;
}

*/