angular.module('listApp')
.directive('piechart', function($timeout) {
  return {
    restrict:'EA',
    scope: {
      title: '@',
      data: '=',
      selectFn: '&select'
    },//End Scope

    link: function (scope, element) {
      Highcharts.charts(element[0], {
        chart: {
          type: 'pie'
        },
        title: {
          text: scope.title
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor:"pointer",
            dataLabels: {
              enabled: true,
              format:'<b>{point.name}</b>':{point.percentage:.0}%''
            }
          }
        },
        series: [{
          date: scope.data
        }]
      });
    };
  };
})
