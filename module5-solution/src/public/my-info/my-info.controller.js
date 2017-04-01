(function(){
  'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['profile', 'menuItem'];
  function MyInfoController(profile, menuItem){
    var myInfoCtrl = this;

    myInfoCtrl.profile = profile;
    if(myInfoCtrl.profile){
      myInfoCtrl.profile.menuItem = menuItem;
    }

    myInfoCtrl.isSignedUp = function(){
      return myInfoCtrl.profile != null;
    };
  }
})();
