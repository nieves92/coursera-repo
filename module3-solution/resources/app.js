(function() {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItems)
        .constant('ApiPath', 'https://davids-restaurant.herokuapp.com/menu_items.json');

    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var narrowCtrl = this;
        narrowCtrl.found = [];
        narrowCtrl.errorMessage = '';

        narrowCtrl.getMenuItems = function() {
            if (narrowCtrl.searchTerm) {
                MenuSearchService.getMatchedMenuItems(narrowCtrl.searchTerm)
                    .then(function(foundItems) {
                        narrowCtrl.errorMessage = foundItems.length ? '' : "Nothing found!!";
                        narrowCtrl.found = foundItems;
                    })
                    .catch(function(errorMessage) {
                        console.log(errorMessage);
                    });
            } else {
                narrowCtrl.errorMessage = "Nothing found!!";
            }
        };

        narrowCtrl.removeItem = function(itemIndex) {
            narrowCtrl.found.splice(itemIndex, 1);
        };
    }

    MenuSearchService.$inject = ['$http', '$q', 'ApiPath'];

    function MenuSearchService($http, $q, ApiPath) {
        var service = this;

        service.getMatchedMenuItems = function(searchTerm) {
            var deferred = $q.defer();
            $http({
                    url: ApiPath
                }).then(function(response) {
                    var foundItems = [];
                    var data = response.data.menu_items;
                    if (data) {
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                                foundItems.push(data[i]);
                            }
                        }
                    }
                    deferred.resolve(foundItems);
                })
                .catch(function() {
                    deferred.reject('Error while retrieving Menu Items');
                });
            return deferred.promise;
        }
    }

    function FoundItems() {
        var ddo = {
            restrict: 'E',
            templateUrl: 'loader/itemsloaderindicator.template.html',
            scope: {
                foundItems: '<',
                onRemove: '&'
            },
            transclude: true
        }
        return ddo;
    }
})();
