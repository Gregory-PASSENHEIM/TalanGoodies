"use strict";
console.log("1) Chargement du script 'extInitScript.js'.");

// Defini les scripts a ajouter.
const JSFilesToAdd = new Array(
	"https://www.gstatic.com/charts/loader.js",
	"https://raw.githubusercontent.com/Gregory-PASSENHEIM/TalanGoodies/main/addListboxesEval.js", 
	"https://raw.githubusercontent.com/Gregory-PASSENHEIM/TalanGoodies/main/addRadarGraph.js",
	);


for (let index = 0; index < JSFilesToAdd.length; ++index) {
	const element = JSFilesToAdd[index];
	
	console.log(element + " to add.");
	var addJSFile = document.createElement('script');
	addJSFile.setAttribute('src', element);
	addJSFile.setAttribute('type', 'text/javascript');
	document.head.appendChild(addJSFile);
	console.log("  => " + element + " added");
}
