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
		.interpolate(d3.interpolateCubehelix.gamma(3));

	var x = d3.scaleIdentity().domain([0, width]),
	    y = d3.scaleIdentity().domain([0, height]);

	var xAxis = d3.axisTop(x),
		yAxis = d3.axisLeft(y);

	svg.append("g")
	    .attr("class", "hexagons")
	  .selectAll("path")
	    .data(bins)
	  .enter().append("path")
	    .attr("d", hexbin.hexagon())
	    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
	    .style("fill", function(d) { return color(d.length); })
            .style("opacity", "0.75");
}

window.onload = function() {
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
};
