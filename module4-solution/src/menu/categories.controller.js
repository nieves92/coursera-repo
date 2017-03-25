(function() {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController);


    CategoriesController.$inject = ['categoriesData'];
    function CategoriesController(categoriesData) {
        var categoriesCtrl = this;

        categoriesCtrl.categories = categoriesData.data;

    }
})();
