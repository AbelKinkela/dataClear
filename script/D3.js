

var url = "https://api.worldbank.org/v2/countries/AGO/indicators/IT.CEL.SETS.P2?date=2007:2018&format=json"
var indicatorValue = [],
    indicatorYears = [],
    margins = { top: 0, right: 0, bottom: 30, left: 25 },
    height = 300 - margins.top - margins.bottom,
    width = 600 - margins.left - margins.right,
    barwidth = 50,
    barOffset = 5;

var yScale,
    xScale,
    yAxisValues,
    yAxisTicks,
    yGuide,
    xAxisValues,
    xAxisTicks,
    xGuide,
    tooltip,
    svg;


$.getJSON(url, function (data) {
    console.log(data)
    for (var i = 0; i < data[1].length; i++) {
        indicatorValue.push(data[1][i].value);
        indicatorYears.push(new Date(data[1][i].date + "-12-31"));
        console.log(indicatorYears[i])
    }
    indicatorValue.reverse()
    indicatorYears.reverse()
    yScale = d3.scaleLinear()
        .domain([0, d3.max(indicatorValue)])
        .range([0, height])

    yAxisValues = d3.scaleLinear()
        .domain([0, d3.max(indicatorValue)])
        .range([height, 0])
    //defining the yAxisTicks for the graph
    yAxisTicks = d3.axisLeft(yAxisValues)
        .ticks(5)

    xScale = d3.scaleBand()
        .domain(indicatorValue)
        .paddingInner(.2)
        .range([0, width])

    xAxisValues = d3.scaleTime()
        .domain([indicatorYears[0], indicatorYears[(indicatorYears.length - 1)]])
        .range([0, width])
    xAxisTicks = d3.axisBottom(xAxisValues)
        .ticks(d3.timeYear.every(1))


    tooltip = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("padding", "0, 10px")
        .style("background", "white")


    svg = d3.select(".mobile-internet .part1 .graph")
        .append("svg")
        .attr("height", height + margins.top + margins.bottom)
        .attr("width", width + margins.left + margins.right)
        .style("border", "1px solid black")
        .append("g")
        .attr("transform", "translate(" + margins.left + ", " + margins.right + ")")

        .selectAll("rect")
        .data(indicatorValue)
        .enter()
        .append("rect")
        .attr("height", 0)
        .attr("x", function (d) {
            return xScale(d);
        })
        .attr("y", height)

        .attr("width", function (d) {
            return xScale.bandwidth();
        })
        .style("fill", "#2F80ED")

        .on('mouseover', function (d) {

            tooltip.transition().duration(200)
                .style("opacity", .9)
            tooltip.html(d)
                .style("left", (d3.event.pageX - 45) + "px")
                .style("top", (d3.event.pageY - 30) + "px")
            d3.select(this)
                .style("fill", "blue")

        })
        .on('mouseout', function (d) {
            d3.select(this)
                .style("fill", "#2F80ED")

        });

    yGuide = d3.select(".mobile-internet .part1 .graph svg")
        .append("g")
        .attr("transform", "translate(20, 0)")
        .call(yAxisTicks)

    xGuide = d3.select(".mobile-internet .part1 .graph svg")
        .append("g")
        .attr("transform", "translate(20, " + height + ")")
        .call(xAxisTicks)

    $(".country-menu nav ul li:nth-child(2)").click(function () {
        svg.transition()
            .attr("height", function (d) {
                return yScale(d);
            })

            .attr("y", function (d) {
                return height - yScale(d);
            })
            .delay(function (d, i) {
                return i * 20;
            })
            .duration(1000)
            .ease(d3.easeBounce)
    })
})













//http://api.worldbank.org/v2/countries/GBR/indicators/SP.POP.TOTL?date=2009:2015&format=json