var margin = { top: 20, right: 90, bottom: 30, left: 90 },
  width = 660 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

// Definicion del tamano del arbol
var treemap = d3.tree().size([height, width]);

//Metodo para cargar archivo JSON con D3
d3.json("timeline.json", function (error, treeData) {
  if (error) throw error;
  var nodes = d3.hierarchy(treeData, function (d) {
    return d.children;
  });

  // Utiliza la variable anterior para definir 
  nodes = treemap(nodes);

  // append the svg object to the element with id #timelinesgv of the page
  // appends a 'group' element to 'svg'
  // moves the 'group' element to the top left margin
  var svg = d3.select("#timelinesgv").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom),
    g = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // adds the links between the nodes    ***var link = ***
  g.selectAll(".link")
    .data(nodes.descendants().slice(1))
    .enter().append("path")
    .attr("class", "link")
    .attr("d", function (d) {
      return "M" + d.x + "," + d.y
        + "C" + d.x + "," + (d.y + d.parent.y) / 2
        + " " + d.parent.x + "," + (d.y + d.parent.y) / 2
        + " " + d.parent.x + "," + d.parent.y;
    });
  
  var node = g.selectAll(".node")
    .data(nodes.descendants())
    .enter().append("g")
    .attr("class", function (d) {
      return "node" +
        (d.children ? " node--internal" : " node--leaf");
    })
    .attr("transform", function (d) {
      return "translate(" + d.x + "," + d.y + ")";
    });
  
  // adds the circle to the node
  node.append("circle")
    .attr("r", 10);
  
  // adds the text to the node
  node.append("text")
    .attr("dy", ".35em")
    .attr("y", function (d) { return d.children ? -20 : 20; })
    .style("text-anchor", "middle")
    .text(function (d) { return d.data.name; });
});