angular.module('starter.controllers', ['ionic', 'ngCordova'])

.controller('DashCtrl', function($scope, $cordovaBarcodeScanner, Database) {

   $scope.scanBarcode = function() {
      $cordovaBarcodeScanner.scan().then(function(imageData) {
         alert(imageData.text);
         alert("Barcode Format -> " + imageData.format);
         alert("Cancelled -> " + imageData.cancelled);
      }, function(error) {
         console.log("An error happened -> " + error);
      });
   };

   $scope.signInScan = function() {
      $cordovaBarcodeScanner.scan().then(function(imageData) {
         var id = imageData.text.substr(imageData.text.indexOf('ID=') + 3, 3);
         var object = Database.get(id);
         Database.signIn(id);
         alert("Signed in: " + object.NAME);
      }, function(error) {
         console.log("An error happened -> " + error);
      });
   };

   $scope.signOutScan = function() {
      $cordovaBarcodeScanner.scan().then(function(imageData) {
         var id = imageData.text.substr(imageData.text.indexOf('ID=') + 3, 3);
         var object = Database.get(id);
         Database.signOut(id);
         alert("Signed out: " + object.NAME);
      }, function(error) {
         console.log("An error happened -> " + error);
      });
   };
})

.controller('ChatsCtrl', function($scope, Database, $ionicModal, $cordovaDatePicker) {
   $scope.database = Database.all();
   $scope.searchVal = "";
   $scope.calendar = {
      date: new Date(2016, 6, 15),
   };
   $ionicModal.fromTemplateUrl('templates/showVolunteer.html', {
      scope: $scope
   }).then(function(modal) {
      // showVolunteer is an object to manipulate the modal
      $scope.showVolunteer = {
         modal: modal,
         data: {},
         close: function() {
            $scope.calendar = {
               date: new Date(2016, 6, 15)
            };
            $scope.showVolunteer.modal.hide();
         },
         open: function(volunteer) {
            $scope.showVolunteer.data = volunteer;
            $scope.showVolunteer.modal.show();
         }
      };
   });

   $scope.debug = function() {
      Database.reset();
      $scope.database = Database.all();
   };
   $scope.toDate = function(date) {
      return new Date(date);
   };
   $scope.signIn = function(ID, date) {
      if (arguments.length === 1) {
         Database.signIn(ID);
      } else {
         Database.signIn(ID, date);
      }
   };
   $scope.signOut = function(ID, date) {
      if (arguments.length === 1) {
         Database.signOut(ID);
      } else {
         Database.signOut(ID, date);
      }
   };
})

.controller('AccountCtrl', function($scope, Database) {
   $scope.debug = function() {
      Database.reset();
      $scope.database = Database.all();
   };
   $scope.settings = {
      enableFriends: true
   };
});
