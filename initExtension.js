console.log("1) Chargement du script 'initExtension.js'.");


fucntion JSFilesToImportInHeader(){
	const returnValue = new Array("https://www.gstatic.com/charts/loader.js");
	
	returnValue.push("https://raw.githubusercontent.com/Gregory-PASSENHEIM/TalanGoodies/main/addListboxesEval.js");
	returnValue.push("https://raw.githubusercontent.com/Gregory-PASSENHEIM/TalanGoodies/main/addRadarGraph.js");

return returnValue;
}