var impressionPoints = [];

function render(rad) {
    //clear previous
    d3.selectAll(".hexagons").remove();

    var margin = {top:10, right:10, bottom:10, left:10};
	width = +d3.select("svg").attr("width"),
	height = +d3.select("svg").attr("height");

	var hexbin = d3_hexbin.hexbin()
		.x(function(d) { return d.x; })
		.y(function(d) { return d.y; })
	    .extent([[0,0], [width, height]])
	    .radius(rad);

	var bins = hexbin(impressionPoints);

	var color = d3.scaleLinear()
		.domain([0, d3.max(bins, function(d) { return d.length; })])
		.range(["white", "orangeRed"])
		.interpolate(d3.interpolateCubehelix.gamma(1));

	var x = d3.scaleIdentity().domain([0, width]),
	    y = d3.scaleIdentity().domain([0, height]);

	var xAxis = d3.axisTop(x),
		yAxis = d3.axisLeft(y);

	svg.append("g")
	    .attr("class", "hexagons")
	  .selectAll("path")
	    .data(bins)
	  .enter().append("path")
	    .attr("class", "sixes")
	    .attr("d", hexbin.hexagon())
	    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
	    .style("fill", function(d) { return color(d.length); })
            .style("opacity", "0.75");
}


window.onload = loadEyeTracking();

function loadEyeTracking() {
	// Set parameters for the tracker
	webgazer.setRegression('ridge')
		.setTracker("clmtrackr")
		.setGazeListener(function(data, clock) {
			// Conditional function to be made
			if (data) {
				data.time = clock;
				position = impressionPoints.length + 1;
				data.position = position;
				delete data.all;
				impressionPoints.push(data);
			};
		})
		.showPredictionPoints(true);

	var setup = function() {
		var cl = webgazer.getTracker().clm;
	}

	function checkIfReady() {
		if (webgazer.isReady()) {
			setup();
		} else {
			setTimeout(checkIfReady, 100);
		}
	}

	setTimeout(checkIfReady, 100);
}

function imageUpload(uploaded) {
	// Read file

	var reader = new FileReader();
        reader.onloadend = function (e) {
		// Create image to then perform DOM manipulation with
		var image = new Image();
		image.src = e.target.result;

		image.onload = function() {
			svg.attr("width", this.width)
				.attr("height", this.height);
			d3.select("#focus")
				.style("background-image", "url(" + e.target.result +")")
				.style("background-repeat", "no-repeat");
		};
    	};
    	//reader.readAsDataURL(this.files[0]);
	reader.readAsDataURL(uploaded.files[0]);

	//Add blurry box
	//http://bl.ocks.org/mbostock/1342359

	
}