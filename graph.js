var svg = d3.select('svg')
.style({"fill": "dodgerblue"})

var maxHeight = 430;

var data = [10, 15, 16, 68, 90, 100, 117, 8, 20, 51, 70, 12, 5, 34, 23, 100, 200, 300, 29, 80, 69, 42, 330, 350, 205, 100, 430]
.sort(function(a, b){ return a - b})
console.log(data);


var yScale = d3.scale.linear()
var g = svg.append('g')
.attr('transform', 'translate(-10, 50)')

var rects = g.selectAll('rect')
.data(data)


rects.enter()
.append('rect')
.attr({
  x: function(d, i) { return 100 + i * 20  },
  y: function(d, i) { return maxHeight - yScale(d) },
  width: 15,
  height: function(d, i) { return d }
})
