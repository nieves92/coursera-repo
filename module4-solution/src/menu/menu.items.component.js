(function() {
    'use strict';

    angular.module('MenuApp')
        .component('menuItems', {
            templateUrl: 'src/menu/templates/menu.items.template.html',
            bindings: {
              items : '<',
              category : '<'
            }
        })
})();
