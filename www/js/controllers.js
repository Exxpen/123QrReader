angular.module('starter.controllers', ['ionic', 'ngCordova'])

.controller('DashCtrl', function($scope, $cordovaBarcodeScanner, Database) {
   $scope.signInScan = function() {
      try {
         $cordovaBarcodeScanner.scan().then(function(imageData) {
            var id = imageData.text.substr(imageData.text.indexOf('ID=') + 3, 3);
            var object = Database.get(id);
            Database.signIn(id);
            alert("Signed in: " + object.NAME);
         }, function(error) {
            console.log("An error happened -> " + error);
         });
      } catch (e) {
         alert(e);
      }
   };

   $scope.signOutScan = function() {
      try {
         $cordovaBarcodeScanner.scan().then(function(imageData) {
            var id = imageData.text.substr(imageData.text.indexOf('ID=') + 3, 3);
            var object = Database.get(id);
            Database.signOut(id);
            alert("Signed out: " + object.NAME);
         }, function(error) {
            console.log("An error happened -> " + error);
         });
      } catch (e) {
         alert(e);
      }
   };
})

.controller('ChatsCtrl', function($scope, Database, $ionicModal, $cordovaDatePicker) {
   $scope.database = Database.all();
   $scope.searchVal = {
      data: ""
   };
   $scope.updateDatabaseView = function() {
      var tempDatabase = Database.all();
      $scope.database = [];
      for (var i = 0; i < tempDatabase.length; i++) {
         // console.log(tempDatabase[i].NAME.toLowerCase().includes($scope.searchVal.data.toLowerCase()));
         if (tempDatabase[i].NAME.toLowerCase().includes($scope.searchVal.data.toLowerCase())) {
            // console.log("Found a match: " + tempDatabase[i].NAME + ", search val : " + $scope.searchVal.data);
            $scope.database.push(Database.all()[i]);
         }
      }
   };
   $scope.calendar = {
      date: new Date(),
   };
   $scope.calendar.date.setMilliseconds(100);
   $ionicModal.fromTemplateUrl('templates/showVolunteer.html', {
      scope: $scope
   }).then(function(modal) {
      // showVolunteer is an object to manipulate the modal
      $scope.showVolunteer = {
         modal: modal,
         data: {},
         close: function() {
            $scope.showVolunteer.modal.hide();
         },
         open: function(volunteer) {
            $scope.calendar = {
               date: new Date()
            };
            $scope.calendar.date.setMilliseconds(100);
            $scope.showVolunteer.data = volunteer;
            $scope.showVolunteer.modal.show();
         }
      };
   });

   $scope.reset = function() {
      Database.reset();
      $scope.database = Database.all();
   };
   $scope.deleteSignIn = function(ID, date) {
      Database.removeSignIn(ID, date);
      $scope.database = Database.all();
   };
   $scope.deleteSignOut = function(ID, date) {
      Database.removeSignOut(ID, date);
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
