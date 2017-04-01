(function() {
    'use strict';

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService', 'SignUpService', '$scope'];

    function SignUpController(MenuService, SignUpService, $scope) {
        var signUpCtrl = this;

        signUpCtrl.signUp = function() {
            var profile = {
                firstName: signUpCtrl.firstName,
                lastName: signUpCtrl.lastName,
                emailAddress: signUpCtrl.emailAddress,
                phoneNumber: signUpCtrl.phoneNumber,
                menuNumber: signUpCtrl.menuNumber
            };
            SignUpService.signUp(profile);
            signUpCtrl.successMessage = 'Your information has been saved';
        };

        signUpCtrl.verifyFavMenu = function() {
            if (signUpCtrl.menuNumber) {
                MenuService.getMenuItemByShortName(signUpCtrl.menuNumber).then(function(data) {
                    $scope.signUpForm.menuItem.$setValidity("menuItem", (data ? true : false));
                });
            } else {
                $scope.signUpForm.menuItem.$setValidity("menuItem", false);
            }
        };

    }
})();
