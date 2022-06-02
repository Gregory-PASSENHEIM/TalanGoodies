//21:03 01/06/2022
console.log("1) Chargement du script 'script.js'.");

// Ajout l'evenement DOMContentLoaded pour executer fireContentLoadedEvent
document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);

function fireContentLoadedEvent () {
	// function : fireContentLoadedEvent
	// args     : 
	// Desc     : Call addJSInsert, after 1 second on loaded.
	// return   : 
	
	setTimeout(function(){addJSInsert();},1000, null);
}

var repeat_AddJSInsert = true;
function addJSInsert(event) {
	// function : addJSInsert
	// args     : 
	// Desc     : Add JS into the header of the page.
	// return   : N/A

	if (document.head !== null){
		repeat_AddJSInsert = false;

		console.log("loaderJS to add");
		var loaderJS = document.createElement('script');
		loaderJS.setAttribute('src','https://www.gstatic.com/charts/loader.js');
		loaderJS.setAttribute('type','text/javascript');
		document.head.appendChild(loaderJS);
		console.log("  => loaderJS added");

		console.log("addListboxEval to add");
		var addListboxEval = document.createElement('script');
		addListboxEval.setAttribute('src','https://gregory-passenheim.github.io/TalanGoodies/smartRecruiterAddOns.js');
		addListboxEval.setAttribute('type','text/javascript');
		document.head.appendChild(addListboxEval);
		console.log("  => addListboxEval added");

		console.log("addRadarGraph to add");
		var addRadarGraph = document.createElement('script');
		addListboxEval.setAttribute('src','https://gregory-passenheim.github.io/TalanGoodies/salesNavigatorAddOns.js');
		addRadarGraph.setAttribute('type','text/javascript');
		document.head.appendChild(addRadarGraph);
		console.log("  => addRadarGraph added");

		console.log("addRadarGraph to add");
		var addRadarGraph = document.createElement('script');
		addListboxEval.setAttribute('src','https://gregory-passenheim.github.io/TalanGoodies/salesNavigatorAddOns.js');
		addRadarGraph.setAttribute('type','text/javascript');
		document.head.appendChild(addRadarGraph);
		console.log("  => addRadarGraph added");




		/*
		const JSFilesToAdd = new Array(
			"https://www.gstatic.com/charts/loader.js",
			"https://gregory-passenheim.github.io/TalanGoodies/smartRecruiterAddOns.js", 
			"https://gregory-passenheim.github.io/TalanGoodies/salesNavigatorAddOns.js", 
			"https://gregory-passenheim.github.io/TalanGoodies/autoConnectAddOns.js", 
		);

		for (let index = 0; index < JSFilesToAdd.length; ++index) {
			const element = JSFilesToAdd[index];
			
			console.log(element);
			var addJSFile = document.createElement('script');
			addJSFile.setAttribute('src', element);
			addJSFile.setAttribute('type', 'text/javascript');
			document.head.appendChild(addJSFile);
			console.log("  => added!");
		}

		*/

	}

	// If the key word is not found : retry in 1 second.
	// else : the process is ongoing.
	if (repeat_AddJSInsert){
		//console.log("Repeat operation in 1s.");
		setTimeout(function(){addJSInsert();},1000, null);
	}
}