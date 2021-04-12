console.log('this is your D3.js');

d3.selectAll("h2").style("color", function() {
    return "hsl(" + Math.random() * 360 + ",100%,50%)";
});

d3.select("body").style("background-color", "white");

d3.selectAll("h1").style("color", function() {
    return "hsl(" + Math.random() * 360 + ",100%,50%)";
});
d3.selectAll(".h2")
    .data([8, 16, 32, 64, 128, 256])
    .style("font-size", function(d) { return d + "px"; });