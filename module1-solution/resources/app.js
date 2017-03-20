(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        var noDataMessage = "Please enter data first",
            tooMuchMessage = "Too much!",
            enjoyMessage = "Enjoy!",
            dishes;

        $scope.message = '';

        $scope.checkIfTooMuch = function() {
            if (isLunchValid()) {
                removeEmptyDishes();
                if (dishes.length > 3) {
                    $scope.message = tooMuchMessage;
                } else {
                    $scope.message = enjoyMessage;
                }
            }
        };

        function isLunchValid() {
            if ($scope.dishes) {
                dishes = $scope.dishes.split(',');
                $scope.isLunchValid = true;
                return true;
            } else {
                $scope.message = noDataMessage;
                $scope.isLunchValid = false;
                return false;
            }
        }

        function removeEmptyDishes() {
            for (var i = dishes.length; i--;) {
                if (!dishes[i].trim().length > 0) {
                    console.log("Removing empty dish.");
                    dishes.splice(i, 1);
                }
            }
            console.log("Lunch has: " + dishes.length + " dishes");
        }

    };
})();
