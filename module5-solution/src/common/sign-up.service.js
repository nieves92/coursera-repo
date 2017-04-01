(function() {
    'use strict';

    angular.module('common').service('SignUpService', SignUpService);

    function SignUpService() {
        var service = this;

        service.signUp = function(profile) {
            service.profile = profile;
        }

        service.getProfile = function() {
            return service.profile;
        }

    }
})();
