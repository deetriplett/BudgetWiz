
//PIE CHART
$("button").click(function() {

var incomeInput = document.getElementById('income');
var income = incomeInput.value;

 $('#container').highcharts({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Your Personal Budget'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>${point.y:.0f}</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: ${point.y:.0f} ',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          }
        },//End datalabels
        // showInLegend: true
      }//End pie
    },
    series: [{
      name: 'Category',
      colorByPoint: true,
      data: [{
        name: 'Housing and Utilities',
        y: income*34.00 / 100
      }, {
        name: 'Car',
        y: income*12.00 / 100,
        sliced: true,
        selected: true
      }, {
        name: 'Health',
        y: income*10.00 / 100
      }, {
        name: 'Food',
        y: income*14.00 / 100
      }, {
        name: 'Savings',
        y: income*10.00 / 100
      }, {
        name: 'Other/Debts/Fun',
        y: income*20.00 / 100
      }]
    }]
  });

  $('#container').show();
  // $('.dataChange').show();
  var frm = document.getElementsById('income');
  frm.reset();
});
console.log(income);
