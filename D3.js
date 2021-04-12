console.log('this is your D3.js');

d3.selectAll("h2").style("color", function() {
    return "hsl(" + Math.random() * 360 + ",100%,50%)";
});

d3.select("body").style("background-color", "beige");

d3.selectAll("h1").style("color", function() {
    return "hsl(" + Math.random() * 360 + ",100%,50%)";
});
d3.selectAll("h1").style("background-color", function() {
    return "hsl(" + Math.random() * 360 + ",100%,50%)";
});