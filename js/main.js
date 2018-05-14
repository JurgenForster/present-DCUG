Reveal.initialize();

var YearLabels = ['2017', '2018', '2019', '2020', '2021'];

var chartConf = {
    type: {
        bar: 'bar',
        horizontalBar: 'horizontalBar',
        line: 'line',
        radar: 'radar',
        pie: 'pie',
        doughnut: 'doughnut',
        bubble: 'bubble'
    },
    colors: {
        green: '0, 180, 140',
        blue: '0, 165, 180',
        white: '255, 255, 255',
        pink: '194, 92, 155',
        yellow: '216, 151, 23',
        orange: '229, 126, 58',
        red: '194, 23, 23'
    },
    opacity: {
        light: '0.2',
        medium: '0.5',
        none: '1',
        transparent: '0'
    }
};

var finConf2 = {
    type: chartConf.type.horizontalBar,
    labels: 'doorlooptijd',
    data: {
        labels: ['PRIO1: Issue 1', 'PRIO2: DGS3.0', 'PRIO3: Zorgkrediet'],
        datasets: [
            {
                data: [2018.75, 2018.75, 2019.25],
                backgroundColor: [
                    'rgba(' +
                        chartConf.colors.orange +
                        ',' +
                        chartConf.opacity.none +
                        ')',
                    'rgba(' +
                        chartConf.colors.orange +
                        ',' +
                        chartConf.opacity.none +
                        ')',
                    'rgba(' +
                        chartConf.colors.red +
                        ',' +
                        chartConf.opacity.none +
                        ')'
                ],
                borderColor: [
                    'rgba(' +
                        chartConf.colors.blue +
                        ',' +
                        chartConf.opacity.transparent +
                        ')',
                    'rgba(' +
                        chartConf.colors.blue +
                        ',' +
                        chartConf.opacity.transparent +
                        ')',
                    'rgba(' +
                        chartConf.colors.blue +
                        ',' +
                        chartConf.opacity.transparent +
                        ')'
                ],
                borderWidth: 1
            }
        ]
    },
    options: {
        legend: {
            position: 'right',
            labels: {
                fontColor: 'rgba(255,255,255,1)'
            }
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        fontColor: 'rgba(255,255,255,1)'
                    }
                }
            ],
            xAxes: [
                {
                    ticks: {
                        fontColor: 'rgba(255,255,255,1)',
                        callback: function(value, index, values) {
                            var year = value.toString().split('.');
                            console.log(year);
                            var q = (value % 1).toFixed(2);
                            return year[0] + ' Q' + q / 0.25;
                        },
                        stepSize: 0.25,
                        min: 2018,
                        max: 2019.5
                    }
                }
            ]
        },
        responsive: true
    }
};

var finConf3 = {
    type: chartConf.type.bar,
    data: {
        labels: [' tot 1 maart 2018', 'na 1 maart 2018'],
        datasets: [
            {
                label: 'PM,BI',
                backgroundColor:
                    'rgba(' +
                    chartConf.colors.orange +
                    ',' +
                    chartConf.opacity.none +
                    ')',
                borderColor:
                    'rgba(' +
                    chartConf.colors.orange +
                    ',' +
                    chartConf.opacity.none +
                    ')',
                stack: 'Stack 0',
                data: [10, 5]
            },
            {
                label: 'arch',
                backgroundColor:
                    'rgba(' +
                    chartConf.colors.yellow +
                    ',' +
                    chartConf.opacity.none +
                    ')',
                borderColor:
                    'rgba(' +
                    chartConf.colors.yellow +
                    ',' +
                    chartConf.opacity.none +
                    ')',
                stack: 'Stack 0',
                data: [0, 0]
            },
            {
                label: 'BPM',
                backgroundColor:
                    'rgba(' +
                    chartConf.colors.green +
                    ',' +
                    chartConf.opacity.none +
                    ')',
                borderColor:
                    'rgba(' +
                    chartConf.colors.green +
                    ',' +
                    chartConf.opacity.none +
                    ')',
                stack: 'Stack 0',
                data: [50, 50]
            },
            {
                label: 'devOps',
                backgroundColor:
                    'rgba(' +
                    chartConf.colors.blue +
                    ',' +
                    chartConf.opacity.none +
                    ')',
                borderColor:
                    'rgba(' +
                    chartConf.colors.blue +
                    ',' +
                    chartConf.opacity.none +
                    ')',
                stack: 'Stack 0',
                data: [80, 80]
            },
            {
                label: 'Market & Comm',
                backgroundColor:
                    'rgba(' +
                    chartConf.colors.pink +
                    ',' +
                    chartConf.opacity.none +
                    ')',
                borderColor:
                    'rgba(' +
                    chartConf.colors.pink +
                    ',' +
                    chartConf.opacity.none +
                    ')',
                stack: 'Stack 0',
                data: [1, 2, 3, 4, 5]
            },
            {
                label: 'Business Analyse',
                backgroundColor:
                    'rgba(' +
                    chartConf.colors.red +
                    ',' +
                    chartConf.opacity.none +
                    ')',
                borderColor:
                    'rgba(' +
                    chartConf.colors.red +
                    ',' +
                    chartConf.opacity.none +
                    ')',
                stack: 'Stack 0',
                data: [80, 30]
            }
        ]
    },
    options: {
        legend: {
            labels: {
                fontColor: 'rgba(255,255,255,1)'
            }
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        fontColor: 'rgba(255,255,255,1)',
                        min: 0,
                        max: 300
                    }
                }
            ],
            xAxes: [
                {
                    ticks: {
                        fontColor: 'rgba(255,255,255,1)'
                    }
                }
            ]
        },
        responsive: true
    }
};

//var ctx1 = document.getElementById('Finance1');
var ctx2 = document.getElementById('Finance2');

//var Finance_1 = new Chart(ctx1, finConf2);
var Finance_2 = new Chart(ctx2, finConf3);
