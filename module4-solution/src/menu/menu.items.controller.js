(function() {
    'use strict';

    angular.module('MenuApp')
        .controller('MenuItemsController', MenuItemsController);

    MenuItemsController.$inject = ['$stateParams', 'categoriesData', 'MenuDataService']
    function MenuItemsController($stateParams, categoriesData, MenuDataService) {
        var menuItemsCtrl = this,
            categories = categoriesData.data,
            categoryShortName = categories[$stateParams.itemId].short_name;

        MenuDataService.getItemsForCategory(categoryShortName).then(function(response) {
            menuItemsCtrl.categoryName = response.data.category.name;
            menuItemsCtrl.items = response.data.menu_items;
        });
    }
})();
