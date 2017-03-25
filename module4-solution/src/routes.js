(function() {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'src/menu/templates/home.template.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'src/menu/templates/main-categories.template.html',
                controller: 'CategoriesController as categoriesCtrl',
                resolve: {
                    categoriesData: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            .state('categories.menu', {
                url: '/menu={itemId}',
                templateUrl: 'src/menu/templates/main-menu.items.template.html',
                controller: 'MenuItemsController as menuItemsCtrl',
                params: {
                    itemId: null
                }
            });
    }
})();
