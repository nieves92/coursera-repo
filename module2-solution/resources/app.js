(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyController = this;

        toBuyController.list = ShoppingListCheckOffService.toBuyList;

        toBuyController.buyItem = function(index) {
            ShoppingListCheckOffService.buyItem(index);
        }

        toBuyController.isEmpty = function() {
            return !toBuyController.list.length;
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBoughtController = this;

        alreadyBoughtController.list = ShoppingListCheckOffService.boughtList;

        alreadyBoughtController.isEmpty = function() {
            return !alreadyBoughtController.list.length;
        }

    }

    function ShoppingListCheckOffService() {
        var service = this;

        service.toBuyList = [{
            name: 'cookies',
            quantity: '10 bags'
        }, {
            name: 'milk',
            quantity: '2 bottles'
        }, {
            name: 'candies',
            quantity: '5 bags'
        }, {
            name: 'Pepto Bismol',
            quantity: '2 bottles'
        }, {
            name: 'tequila',
            quantity: '4 bottles'
        }, {
            name: 'eggs',
            quantity: '1 dozen'
        }];
        service.boughtList = [];

        service.buyItem = function(index) {
            service.boughtList.push(service.toBuyList[index]);
            service.toBuyList.splice(index, 1);
        }
    }
})();
