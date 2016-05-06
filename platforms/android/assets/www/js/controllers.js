angular.module('starter.controllers', ['ionic', 'ngCordova'])

.controller('DashCtrl', function($scope, $cordovaBarcodeScanner, Database, $ionicModal) {
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
   var currID = 500;
   if (window.localStorage.currID) {
      currID = JSON.parse(window.localStorage.currID);
   } else {
      window.localStorage.currID = JSON.stringify(currID);
   }
   $scope.getNewID = function() {
      currID++;
      window.localStorage.currID = JSON.stringify(currID);
      return currID;
   };
   $ionicModal.fromTemplateUrl('templates/addVolunteer.html', {
      scope: $scope
   }).then(function(modal) {
      // showVolunteer is an object to manipulate the modal
      $scope.addVolunteer = {
         modal: modal,
         data: {},
         close: function() {
            $scope.addVolunteer.modal.hide();
         },
         open: function(volunteer) {
            $scope.addVolunteer.data = {
               "ID": $scope.getNewID(),
               "FNAME":"",
               "LNAME":"",
               "PHONE":"",
               "AGE":"",
               "SCHOOL":"",
               "ADDRESS":"",
               "POSTALCODE":"",
               "EMERGCONTACT":"",
               "EMERGNUMBER":"",
               "IN":0,"HOURS":0,
               "SHIRT":false,"WAIVER":false
            };
            $scope.addVolunteer.modal.show();
         },
         add: function() {
            Database.addVolunteer($scope.addVolunteer.data);
            $scope.addVolunteer.close();
         }
      };
   });
})

.controller('VolunteersCtrl', function($scope, Database, $ionicModal, $cordovaDatePicker) {
   $scope.database = Database.all();
   $scope.searchVal = {
      data: ""
   };
   $scope.hours = {
      data: 0
   };
   $scope.addHours = function(dbID) {
      Database.addHours(dbID, $scope.hours.data);
      $scope.hours.data = 0;
   };
   $scope.updateDatabaseView = function() {
      var tempDatabase = Database.all();
      $scope.database = [];
      tempDatabase.forEach(function(element, index, array) {
         if ($scope.searchVal.data.length < (element.LNAME.length + element.FNAME.length + 2)) {
            var search = $scope.searchVal.data.toLowerCase();
            var name = element.FNAME.toLowerCase() + " " + element.LNAME.toLowerCase();
            for (var i = 0; i < (name.length - search.length); i++) {
               if (name.substr(i, search.length) === search) {
                  $scope.database.push(element);
                  break;
               }
            }
         }
      });
   };
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
            $scope.showVolunteer.data = volunteer;
            $scope.showVolunteer.modal.show();
         }
      };
   });

   $scope.reset = function() {
      Database.reset();
      $scope.database = Database.all();
   };
   $scope.debug = function() {
      console.log($scope.database);
   };
   $scope.toDate = function(date) {
      if (date === 0) {
         return "False";
      }
      return new Date(date);
   };
   $scope.toTime = {
      hour: function(time) {
         return Math.floor(time);
      },
      minute: function(time) {
         var val = Math.floor((time - Math.floor(time))*60);
         if (val === 0) {
            return "00";
         } else if (val < 10) {
            return "0" + val.toString();
         } else {
            return val;
         }
      }
   };
   $scope.signIn = function(ID, date) {
      try {
         if (arguments.length === 1) {
            Database.signIn(ID);
         } else {
            Database.signIn(ID, date);
         }
      } catch (e) {
         alert(e);
      }
   };
   $scope.signOut = function(ID, date) {
      try {
         if (arguments.length === 1) {
            Database.signOut(ID);
         } else {
            Database.signOut(ID, date);
         }
      } catch (e) {
         alert(e);
      }
   };
   $scope.updateShirt = function(ID) {
      Database.updateShirt(ID);
      $scope.database = Database.all();
   };
   $scope.updateWaiver = function(ID) {
      Database.updateWaiver(ID);
      $scope.database = Database.all();
   };
   $scope.deleteVolunteer = function(ID) {
      var sign = prompt("Type \"continue\" to confirm deletion of volunteer");
      if (sign && sign.toLowerCase() === "continue") {
         Database.removeVolunteer(ID);
         $scope.updateDatabaseView();
         $scope.showVolunteer.close();
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
