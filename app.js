angular.module("listApp", [])
.controller('mainCtrl', function($scope) {
  $scope.piechart = function() {
    console.log("Hello there!");
  };
})
.controller('otherCtrl', function($scope) {
  $scope.whoAmI = function() {
    console.log("Hi again!");
  };
});//End Module
//   $scope.piechart = [{
//       name: 'Housing and Utilities',
//       y: income*34.00 / 100
//     }, {
//       name: 'Car',
//       y: income*12.00 / 100,
//       sliced: true,
//       selected: true
//     }, {
//       name: 'Health',
//       y: income*10.00 / 100
//     }, {
//       name: 'Food',
//       y: income*14.00 / 100
//     }, {
//       name: 'Savings',
//       y: income*10.00 / 100
//     }, {
//       name: 'Other/Debts/Fun',
//       y: income*20.00 / 100
//     }]
//   };
// });


    link: function($scope, $elm, $attr) {

      var data = new google.visualization.DataTable();
            data.addColumn('string', 'Label');
            data.addColumn('number', 'Value');
            var chart = new google.visualization.PieChart($elm[0]);

            draw();

            // Watches, to refresh the chart when its data or title  change
            $scope.$watch('data', function () {
                draw();
            }, true); // true is for deep object equality checking
            $scope.$watch('title', function () {
                draw();
            });
            // Chart selection handler
           google.visualization.events.addListener(chart, 'select', function () {
               var selectedItem = chart.getSelection()[0];
               if (selectedItem) {
                   $scope.$apply(function () {
                       $scope.selectFn({
                           selectedRowIndex: selectedItem.row
                       });
                   });
               }
           });
           function draw() {
                         if (!draw.triggered) {
                             draw.triggered = true;
                             $timeout(function () {
                                 draw.triggered = false;
                                 var label, value;
                                 data.removeRows(0, data.getNumberOfRows());
                                 angular.forEach($scope.data, function (row) {
                                     label = row[0];
                                     value = parseFloat(row[1], 10);
                                     if (!isNaN(value)) {
                                         data.addRow([row[0], value]);
                                     }
                                 });
                                 var options = {
                                     'title': $scope.title,
                                         'width': $scope.width,
                                         'height': $scope.height
                                 };
                                 chart.draw(data, options);
                                 // No raw selected
                                 $scope.selectFn({
                                     selectedRowIndex: undefined
                                 });
                             }, 0, true);
                         }
                     }
                }//End Link
             };//End Return
         });//End App Directive

         app.controller('Ctrl', function ($scope) {
     // Initial chart data
     $scope.chartTitle = "Your Personal Budget";
     $scope.chartWidth = 600;
     $scope.chartHeight = 400;
     $scope.chartData = [
         ['Housing and Utilities', ],
         ['Food', ],
         ['Car', ],
         ['Health', ],
         ['Savings', ],
         ['Other/Debts/Fun', ]
     ];

     $scope.deleteRow = function (index) {
         $scope.chartData.splice(index, 1);
     };
     $scope.addRow = function () {
         $scope.chartData.push([]);
     };
     $scope.selectRow = function (index) {
         $scope.selected = index;
     };
     $scope.rowClass = function (index) {
         return ($scope.selected === index) ? "selected" : "";
     };
 });
