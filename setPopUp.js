console.log("1) Chargement du script contenant la fonction.");


// Generales variables
currentTabs = null;


// Once the DOM is loaded...
window.onload = function() {
	while(currentTabs == null){
		chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
			console.log("2)" + tabs[0].url)
			currentTabs = tabs;
		});
		delay(500).then(() => console.log('ran after 1 second1 passed'));
		console.log("3)" + currentTabs[0].url)
	}
	buildPopUpForm();
};


// Build the PopUp form.
function buildPopUpForm() {
	console.log("window.location.href : " + window.location.href);
	if (tabs[0].url.includes("talan0.sharepoint.com") && 
		tabs[0].url.includes("CanadaAll") && 
		tabs[0].url.includes("Talan-America.aspx")){
		
		// create the PopUp form.
		document.getElementById("content").innerHTML = dynamicPopUp();

		// Fill the fileds with to Chrome mem.
		fillForm();
	} else {
		document.getElementById("popUpContent").innerHTML = "You must be connected to <a href='http://portal.talancanada.com/'>Talan Canada Portal</a> to setup this extension.";
	}
}


// Create the dynamib PopUp Form.
function dynamicPopUp() {
	returnValue = ""
	returnValue += "	<table><tbody>";
	returnValue += "		<tr><th><H1>Talan's Extensions<br>Pimper My SmartRecruiter!<H1></th></tr>";
	returnValue += "		<tr><td><label>Current User :</label><input type='text' id='userName' value='Greg'/></td></tr>";
	returnValue += "		<tr><td>&nbsp;<br></tr>";
	returnValue += "		<tr><td><label>User id :</label><input type='text' id='userId' value='id012345'/></td></tr>";
	returnValue += "		<tr><td><label>API URL :</label><input type='text' id='apiUrl' value='http://toto'/></td></tr>";
	returnValue += "		<tr><td><input type='button' onclick = 'saveInfo();' value = 'Save' /><input type='button' onclick = 'resetInfo();' value = 'Reset' /></td></tr>";
	returnValue += "	</tbody></table>";
	return returnValue
}


// Fill the fileds with to Chrome mem.
function fillForm() {
	// fill the USERNAME filed.
	chrome.storage.local.get('userName', function (result) {
		var theValue = result.userName;
		if (theValue) {
			document.getElementById("userName").value = theValue;
		}
	});
	// fill the USERID filed.
	chrome.storage.local.get('userId', function (result) {
		var theValue = result.userId;
		if (theValue) {
			document.getElementById("userId").value = theValue;
		}
	});
	// fill the APIURL filed.
	chrome.storage.local.get('apiUrl', function (result) {
		var theValue = result.apiUrl;
		if (theValue) {
			document.getElementById("apiUrl").value = theValue;
		}
	});
}


// Save the values to Chrome mem.
function saveInfo() {
	chrome.storage.local.set({'userName': document.getElementById("userName").value});
	chrome.storage.local.set({'userId': document.getElementById("userId").value});
	chrome.storage.local.set({'apiUrl': document.getElementById("apiUrl").value});
}


// Reset the values to Chrome mem.
function resetInfo() {
	chrome.storage.local.set({'userName': ""});
	chrome.storage.local.set({'userId': ""});
	chrome.storage.local.set({'apiUrl': ""});
	document.getElementById("userName").value = "";
	document.getElementById("userId").value = "";
	document.getElementById("apiUrl").value = "";
}