Reveal.initialize();

var shipsterYearLabels = ["2017", "2018", "2019", "2020", "2021"];

var chartConf = {
    type: {
        bar: 'bar',
        horizontalBar: 'horizontalBar',
        line: 'line',
        radar: 'radar',
        pie: 'pie',
        doughnut: 'doughnut',
        bubble: 'bubble',
    },
    colors: {
        green: '0, 180, 140',
        blue: '0, 165, 180',
        white: '255, 255, 255',
        pink: '194, 92, 155',
        yellow: '216, 151, 23',
        orange: '229, 126, 58',
    },
    opacity: {
        light: '0.2',
        medium: '0.5',
        none: '1',
        transparent: '0'
    }
}

function calcTotal(startNumber, growth) {
    var growthArray = [];
    var x = startNumber;

    growth.forEach(function(growthNumber) {
        x = x * growthNumber;
        growthArray.push(x);
    });

    return growthArray;
}

function calcSegment(totalArray, growthMobile, growthCC) {
    var growthSegment = [];

    totalArray.forEach(function(total, index) {
        if (growthMobile) {
            total = total * growthMobile[index];
        }
        if (growthCC) {
            total = total * growthCC[index];
        }

        growthSegment.push(total);
    });

    return growthSegment;
}

function calcRev(OSNEurArray, perc) {
    var revArray = [];
    OSNEurArray.forEach(function(amount) {
        var x = amount * perc;
        revArray.push(x);
    });
    return revArray;
}

var OSN = {
    eur: 22600,
    pur: 200,
    mobile: 0.07,
    cc: 0.12,
    growthTotal: [1, 1.13, 1.12, 1.11, 1.1],
    growthMobile:  [0.07, 0.10, 0.13, 0.17, 0.21],
    growthCC: [0.12, 0.13, 0.14, 0.15, 0.16],
    revPercs: [0.0025, 0.005, 0.0075],
    marketPerc: [0.125, 0.25]
};

var OSNArrays = {
    yearsTotalEur: calcTotal(OSN.eur, OSN.growthTotal),
    yearsTotalPur: calcTotal(OSN.pur, OSN.growthTotal),
};

var OSNSegmentArrays = {
    yearsMobileEur: calcSegment(OSNArrays.yearsTotalEur, OSN.growthMobile, null),
    yearsMobilePur: calcSegment(OSNArrays.yearsTotalPur, OSN.growthMobile, null),
    yearsCCEur: calcSegment(OSNArrays.yearsTotalEur, null, OSN.growthCC),
    yearsCCPur: calcSegment(OSNArrays.yearsTotalPur, null, OSN.growthCC),
    yearsCCMobEur: calcSegment(OSNArrays.yearsTotalEur, OSN.growthMobile, OSN.growthCC),
    yearsCCMobPur: calcSegment(OSNArrays.yearsTotalPur, OSN.growthMobile, OSN.growthCC),
};

var finConf1 = {
    type: chartConf.type.line,
    data: {
        labels: shipsterYearLabels,
        datasets: [{
            label: '0,25%',
            data: calcRev(OSNSegmentArrays.yearsCCMobEur, OSN.revPercs[0]),
            backgroundColor: [
                'rgba('+ chartConf.colors.blue +','+ chartConf.opacity.none+')',
            ],
            borderColor: [
                'rgba('+ chartConf.colors.blue +','+ chartConf.opacity.none +')',
            ],
            borderWidth: 1
        },
        {
            label: '0,5%',
            data: calcRev(OSNSegmentArrays.yearsCCMobEur, OSN.revPercs[1]),
            backgroundColor: [
                'rgba('+ chartConf.colors.blue +','+ chartConf.opacity.medium +')',
            ],
            borderColor: [
                'rgba('+ chartConf.colors.blue +','+ chartConf.opacity.none +')',
            ],
            borderWidth: 1
        },
        {
            label: '0,75%',
            data: calcRev(OSNSegmentArrays.yearsCCMobEur, OSN.revPercs[2]),
            backgroundColor: [
                'rgba('+ chartConf.colors.blue +','+ chartConf.opacity.light+')',
            ],
            borderColor: [
                'rgba('+ chartConf.colors.blue +','+ chartConf.opacity.none +')',
            ],
            borderWidth: 1
        },{
            label: '0,25% all cc',
            data: calcRev(OSNSegmentArrays.yearsCCEur, OSN.revPercs[0]),
            backgroundColor: [
                'rgba('+ chartConf.colors.blue +','+ chartConf.opacity.transparent+')',
            ],
            borderColor: [
                'rgba('+ chartConf.colors.blue +','+ chartConf.opacity.none +')',
            ],
            borderWidth: 1
        },
        {
            label: '0,5% all cc',
            data: calcRev(OSNSegmentArrays.yearsCCEur, OSN.revPercs[1]),
            backgroundColor: [
                'rgba('+ chartConf.colors.blue +','+ chartConf.opacity.transparent +')',
            ],
            borderColor: [
                'rgba('+ chartConf.colors.blue +','+ chartConf.opacity.none +')',
            ],
            borderWidth: 1
        },
        {
            label: '0,75% all cc',
            data: calcRev(OSNSegmentArrays.yearsCCEur, OSN.revPercs[2]),
            backgroundColor: [
                'rgba('+ chartConf.colors.blue +','+ chartConf.opacity.transparent+')',
            ],
            borderColor: [
                'rgba('+ chartConf.colors.blue +','+ chartConf.opacity.none +')',
            ],
            borderWidth: 1
        },
    ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    callback: function(value, index, values) {
                        if(value > 0) {
                            return '€' + value + 'M';
                        } else {
                            return 0;
                        }
                    },
                    fontColor: 'rgba(255,255,255,0.5)'
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: 'rgba(255,255,255,0.5)'
                }
            }]
        },
        responsive: true
    }
}

var ctx1 = document.getElementById("ShipsterFinance1");

var ShipsterFinance_1 = new Chart(ctx1, finConf1);

