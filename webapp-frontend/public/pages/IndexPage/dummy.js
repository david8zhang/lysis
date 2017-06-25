export const options = {
    chart: {
        backgroundColor: '#ffffff',
        type: 'spline',
        height: 270,
        margin: [80, 80, 80, 80],
        events: {
            load: function () {
                var y = Math.log(19)
                // set up the updating of the chart each second
                var series = this.series;
                setInterval(() => {
                    var x = (new Date()).getTime(), // current time
                        y = Math.random()
                    var dataSeries = series[0]
                    dataSeries.addPoint([x, y], true, true);
                }, 1000);
            }
        }
    },
    title: {
        text: null
    },
    xAxis: {
        lineWidth: 0,
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        maxZoom: 60,
        type: 'datetime',
        labels: {
            enabled: false
        },
        minorTickLength: 0,
        tickLength: 0
    },
    yAxis: {
        lineWidth: 0,
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        title: {
            text: null
        },
        labels: {
            enabled: false
        },
        minorTickLength: 0,
        tickLength: 0
    },
    legend: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    plotOptions: {
        series: {
            marker: {
                enabled: false
            },
            lineWidth: 5,
            color: {
                linearGradient: { x1: 1, x2: 1, y1: 0, y2: 1 },
                stops: [
                    [0, '#315AAB'],
                    [0.33, '#7E4FA4'],
                    [0.66, '#FD895A'],
                    [1, '#FB3F71']
                ]
            },
            point: {
                events: {
                    click: function () {
                        if (this.series.data.length > 1) {
                            this.remove();
                        }
                    }
                }
            }
        }
    },
    series: [{
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -15; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: Math.tanh(Math.random())
                });
            }
            return data;
        }())
    }],
    credits: {
        enabled: false
    }
};
