// Globals variables déclaration
const chartValues = [ {'key': 'java', 'value': 1, 'category': 0}, {'key': 'perso', 'value': 2, 'category': 0}, {'key': 'comm', 'value': 3, 'category': 0}, {'key': 'soft', 'value': 4, 'category': 0}, {'key': 'smart', 'value': 5, 'category': 0}, {'key': 'java', 'value': 5, 'category': 1}, {'key': 'perso', 'value': 4, 'category': 1}, {'key': 'comm', 'value': 3, 'category': 1}, {'key': 'soft', 'value': 2, 'category': 1}, {'key': 'smart', 'value': 1, 'category': 1}, {'key': 'java', 'value': 1, 'category': 2}, {'key': 'perso', 'value': 4, 'category': 2}, {'key': 'comm', 'value': 3, 'category': 2}, {'key': 'soft', 'value': 5, 'category': 2}, {'key': 'smart', 'value': 5, 'category': 2},];


// Init
//console.log("SCRIPT:addRadarGraph.js");
setTimeout(function(){waitForRightURL_01();}, 500, null);

// function : waitForRightURL_01
// args     : 
// Desc     : Wait for the right URL is present.
// return   : N/A
var repeat_WaitForRightURL_01 = true;
function waitForRightURL_01(event) {

console.log("STEP00-00 : (applications) - " + window.location.href);
	if(window.location.href.includes("applications")){
//console.log("STEP00-01");
		addGraphToProfile();
		repeat_WaitForRightURL_01 = false;
	} else { console.log("STEP00-02"); }

	// If the key word is not found : retry in 1 second.
	// else : the process is ongoing.
	if (repeat_WaitForRightURL_01){
		setTimeout(function(){waitForRightURL_01();},1000, null);
	}
}


// function : addGraphToProfile
// args     : 
// Desc     : Parse the HTML code as Chrome DevTools to add Graph received via API.
// return   : N/A
var repeat_AddGraphToProfile = true;
function addGraphToProfile(event) {
	
	// Add Radar Graph on the SR Profile.
	if (document.getElementById("st-applicantName") !== null){
		repeat_AddGraphToProfile = false;

		// Generate the html of the table added in the profile
		var candidateInfo = document.getElementById("st-applicantName").parentElement.parentElement.parentElement;
		candidateInfo.innerHTML = buildTableArea_01(candidateInfo.innerHTML);

		// Start the Graph Generation
		google.charts.load('upcoming', {packages: ['vegachart']}).then(addChart);

	}
	// If the key word is not found : retry in 1 second.
	// else : the process is ongoing.
	if (repeat_AddGraphToProfile){
		setTimeout(function(){addGraphToProfile();},1000, null);
	}
}


// function : buildTableArea_01
// args     : innerHTML = The HTML that were present before the execution.
//            innerHTML = The Name and Label that has to be used for.
// Desc     : Create a dynamic HTML sctring
// return   : HTML string representing the Select Box.
function buildTableArea_01(innerHTML) {
	myInnerHTML  = "";
	myInnerHTML += "		<table id='GPAchartIsHereGPA' border=0>";
	myInnerHTML += "		    <tr>";
	myInnerHTML += "		        <td width=300>" + innerHTML + "</td>";
	myInnerHTML += "		    	<td><div id='chartIsHere' style='height:300px;'></div></td>";
	myInnerHTML += "			</tr>";
	myInnerHTML += "			<tr visibility:collapse;><td colspan=2 visibility:collapse;><img src='https://s3.amazonaws.com/smart-branding/android-chrome-192x192.png' height=0 width=590></td></tr>";
	myInnerHTML += "		</table>";
//console.log("  myInnerHTML - buildTableArea_01 - 00 : " + myInnerHTML);
	return myInnerHTML;
}


function addChart() {
	//console.log('STEP00-08-02');
	const dataTable = new google.visualization.DataTable();
	dataTable.addColumn({type: 'string', 'id': 'key'});
	dataTable.addColumn({type: 'number', 'id': 'value'});
	dataTable.addColumn({type: 'string', 'id': 'category'});
	
	//console.log("!!! YOUPY !!!");
	//console.log("00");
	
	const options = {
		'vega': {
			"$schema": "https://vega.github.io/schema/vega/v5.json",
			"description": "A radar chart example, showing multiple dimensions in a radial layout.",
			"width": 200,
			"height": 200,
			"padding": 40,
			"autosize": {"type": "none", "contains": "padding"},
			"signals": [{"name": "radius", "update": "width / 2"}],
			"data": [
				{"name": "table",},
				{
					"name": "keys",
					"source": "table",
					"transform": [
						{
							"type": "aggregate",
							"groupby": ["key"],
						},
					],
				},
			],
			"scales": [
				{
					"name": "angular",
					"type": "point",
					"range": {"signal": "[-PI, PI]"},
					"padding": 0.5,
					"domain": {"data": "table", "field": "key"},
				},
				{
					"name": "radial",
					"type": "linear",
					"range": {"signal": "[0, radius]"},
					"zero": true,
					"nice": false,
					"domain": {"data": "table", "field": "value"},
					"domainMin": 0,
				},
				{
					"name": "color",
					"type": "ordinal",
					"domain": {"data": "table", "field": "category"},
					"range": {"scheme": "category10"},
				}
			],
			"encode": {
				"enter": {
					"x": {"signal": "radius"},
					"y": {"signal": "radius"},
				},
			},
			"marks": [
				{
					"type": "group",
					"name": "categories",
					"zindex": 1,
					"from": {
						"facet": {"data": "table", "name": "facet", "groupby": ["category"]}
					},
					"marks": [
						{
							"type": "line",
							"name": "category-line",
							"from": {"data": "facet"},
							"encode": {
								"enter": {
									"interpolate": {"value": "linear-closed"},
									"x": {"signal": "scale('radial', datum.value) * cos(scale('angular', datum.key))"},
									"y": {"signal": "scale('radial', datum.value) * sin(scale('angular', datum.key))"},
									"stroke": {"scale": "color", "field": "category"},
									"strokeWidth": {"value": 1},
									"fill": {"scale": "color", "field": "category"},
									"fillOpacity": {"value": 0.1}
								}
							}
						},
						{
							"type": "text",
							"name": "value-text",
							"from": {"data": "category-line"},
							"encode": {
								"enter": {
									"x": {"signal": "datum.x"},
									"y": {"signal": "datum.y"},
									"text": {"signal": "datum.datum.value"},
									"align": {"value": "center"},
									"baseline": {"value": "middle"},
									"fill": {"value": "black"}
								}
							}
						}
					]
				},
				{
					"type": "rule",
					"name": "radial-grid",
					"from": {"data": "keys"},
					"zindex": 0,
					"encode": {
						"enter": {
							"x": {"value": 0},
							"y": {"value": 0},
							"x2": {"signal": "radius * cos(scale('angular', datum.key))"},
							"y2": {"signal": "radius * sin(scale('angular', datum.key))"},
							"stroke": {"value": "lightgray"},
							"strokeWidth": {"value": 1}
						}
					}
				},
				{
					"type": "text",
					"name": "key-label",
					"from": {"data": "keys"},
					"zindex": 1,
					"encode": {
						"enter": {
							"x": {"signal": "(radius + 5) * cos(scale('angular', datum.key))"},
							"y": {"signal": "(radius + 5) * sin(scale('angular', datum.key))"},
							"text": {"field": "key"},
							"align": [
								{
									"test": "abs(scale('angular', datum.key)) > PI / 2",
									"value": "right"
								},
								{
									"value": "left"
								}
							],
							"baseline": [
								{
									"test": "scale('angular', datum.key) > 0", "value": "top"
								},
								{
									"test": "scale('angular', datum.key) == 0", "value": "middle"
								},
								{
									"value": "bottom"
								}
							],
							"fill": {"value": "black"},
							"fontWeight": {"value": "bold"}
						}
					}
				},
				{
					"type": "line",
					"name": "outer-line",
					"from": {"data": "radial-grid"},
					"encode": {
						"enter": {
							"interpolate": {"value": "linear-closed"},
							"x": {"field": "x2"},
							"y": {"field": "y2"},
							"stroke": {"value": "lightgray"},
							"strokeWidth": {"value": 1}
						}
					}
				}
			]
		}
	};
	
	//console.log(getValues());
	//console.log(options["vega"]);
	//console.log(options["vega"]["data"]);
	//console.log(options["vega"]["data"][0]);
	//console.log(options["vega"]["data"][0]["values"]);
	//console.log("01");
	options["vega"]["data"][0]["values"] = chartValues;
	//console.log("02");
	//console.log(options["vega"]["data"][0]["values"]);
	
	//console.log("03");
	const elem = document.createElement("div");
	//console.log("04");
	elem.setAttribute("style", "display: inline-block; width: 250px; height: 300px; padding: 20px;");
	//console.log("05");
	
	//console.log("06");
	const chart = new google.visualization.VegaChart(elem);
	//console.log("07");
	chart.draw(dataTable, options);
	//console.log("08");
	
	//console.log(elem);
	//console.log(document);
	//console.log(document.getElementById("chartIsHere"));
	document.getElementById("chartIsHere").appendChild(elem);
	//console.log('STEP00-08-03');
}