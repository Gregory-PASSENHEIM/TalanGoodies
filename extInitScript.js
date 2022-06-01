//"use strict";
console.log("1) Chargement du script 'extInitScript.js'.");

/*
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
*/

console.log("loaderJS to add");
var loaderJS = document.createElement('script');
loaderJS.setAttribute('src','https://www.gstatic.com/charts/loader.js');
loaderJS.setAttribute('type','text/javascript');
document.head.appendChild(loaderJS);
console.log("  => loaderJS added");

console.log("addListboxEval to add");
var addListboxEval = document.createElement('script');
addListboxEval.setAttribute('src','https://raw.githubusercontent.com/Gregory-PASSENHEIM/TalanGoodies/main/addListboxesEval.js');
addListboxEval.setAttribute('type','text/javascript');
document.head.appendChild(addListboxEval);
console.log("  => addListboxEval added");

console.log("addRadarGraph to add");
var addRadarGraph = document.createElement('script');
addRadarGraph.setAttribute('src','https://raw.githubusercontent.com/Gregory-PASSENHEIM/TalanGoodies/main/addRadarGraph.js');
addRadarGraph.setAttribute('type','text/javascript');
document.head.appendChild(addRadarGraph);
console.log("  => addRadarGraph added");
