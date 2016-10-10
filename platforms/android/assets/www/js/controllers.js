angular.module('starter.controllers', ['ionic', 'ngCordova'])
.controller('RootCtrl', function($scope, $ionicModal, $cordovaBarcodeScanner, Database) {
   // Keeps $scope.database view consistent with search result via ng-change
   $scope.database = Database.all();
   $scope.updateDatabaseView = function(searchVal) {
      var tempDatabase = Database.all();
      $scope.database = [];
      if (searchVal.toLowerCase() == "(s)") {
         // Look for volunteers signed in
         tempDatabase.forEach(function(element, index, array) {
            if (element.IN !== 0) {
               $scope.database.push(element);
            }
         });
      } else {
         // Filter volunteers by searchVal
         tempDatabase.forEach(function(element, index, array) {
            if (searchVal.length <= element.NAME.length &&
               element.NAME.toLowerCase().indexOf(searchVal.toLowerCase()) > -1 ) {
               $scope.database.push(element);
            }
         });
      }
   };

   $scope.history = [];
   if (window.localStorage.history) {
      $scope.history = JSON.parse(window.localStorage.history);
   } else {
      window.localStorage.history = JSON.stringify($scope.history);
   }

   // addVolunteer Modal
   $ionicModal.fromTemplateUrl('templates/addVolunteer.html', {
      scope: $scope
   }).then(function(modal) {
      $scope.addVolunteer = {
         modal: modal,
         data: {},
         close: function() {
            $scope.addVolunteer.modal.hide();
         },
         open: function(volunteer) {
            $scope.addVolunteer.data = {
               "ID": $scope.getNewID(), "NAME":"", "PHONE":"", "AGE":"", "SCHOOL":"", "EMERGCONTACT":"",
               "EMERGNUMBER":"", "IN":0,"HOURS":0, "SHIRT":false,"WAIVER":false
            };
            $scope.addVolunteer.modal.show();
         },
         add: function() {
            Database.addVolunteer($scope.addVolunteer.data);
            $scope.history.push($scope.addVolunteer.data.NAME + ": added new volunteer");
            window.localStorage.history = JSON.stringify($scope.history);
            $scope.addVolunteer.close();
         }
      };
   });
   // showVolunteer Modal
   $ionicModal.fromTemplateUrl('templates/showVolunteer.html', {
      scope: $scope
   }).then(function(modal) {
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
   // Returns better formatted strings for view
   $scope.toTime = {
      date: function(date) {
         if (date === 0)
         return "Not Signed In";
         else
         return new Date(date);
      },
      hour: function(time) {
         return Math.floor(time);
      },
      minute: function(time) {
         var val = Math.floor((time - Math.floor(time))*60);
         if (val === 0)
         return "00";
         else if (val < 10)
         return "0" + val.toString();
         else
         return val;
      }
   };
   $scope.signIn = function(ID) {
      Database.signIn(ID);
      $scope.history.push(Database.get(ID).NAME + ": signed in");
      window.localStorage.history = JSON.stringify($scope.history);
   };
   $scope.signOut = function(ID) {
      Database.signOut(ID);
      $scope.history.push(Database.get(ID).NAME + ": signed out");
      window.localStorage.history = JSON.stringify($scope.history);
   };
   $scope.addHours = function(ID, hours) {
      Database.addHours(ID, hours);
      $scope.history.push(Database.get(ID).NAME + ": added " + hours + " hours");
      window.localStorage.history = JSON.stringify($scope.history);
   };
   $scope.updateShirt = function(ID) {
      Database.updateShirt(ID);
      $scope.history.push(Database.get(ID).NAME + ": changed shirt value to " + Database.get(ID).SHIRT);
      window.localStorage.history = JSON.stringify($scope.history);
   };
   $scope.updateWaiver = function(ID) {
      Database.updateWaiver(ID);
      $scope.history.push(Database.get(ID).NAME + ": changed waiver value to " + Database.get(ID).WAIVER);
      window.localStorage.history = JSON.stringify($scope.history);
   };
   $scope.deleteVolunteer = function(ID) {
      var sign = prompt("Type \"continue\" to confirm deletion of volunteer");
      if (sign && sign.toLowerCase() === "continue") {
         $scope.history.push(Database.get(ID).NAME + ": deleted from database");
         window.localStorage.history = JSON.stringify($scope.history);
         Database.removeVolunteer(ID);
         $scope.showVolunteer.close();
      }
   };
   $scope.signInScan = function() {
      try {
         $cordovaBarcodeScanner.scan().then(function(imageData) {
            var volunteer = Database.getFromEmail(imageData.text);
            Database.signIn(volunteer.ID);
            $scope.showVolunteer.open(volunteer);
            $scope.history.push(volunteer.NAME + ": signed in");
            window.localStorage.history = JSON.stringify($scope.history);
            alert("Signed in: " + volunteer.NAME);
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
            var volunteer = Database.getFromEmail(imageData.text);
            Database.signOut(volunteer.ID);
            $scope.showVolunteer.open(volunteer);
            $scope.history.push(volunteer.NAME + ": signed out");
            window.localStorage.history = JSON.stringify($scope.history);
            alert("Signed out: " + volunteer.NAME);
         }, function(error) {
            console.log("An error happened -> " + error);
         });
      } catch (e) {
         alert(e);
      }
   };
   $scope.isSignedIn = function(volunteer) {
      if (volunteer.IN !== 0) {
         return "(S)";
      } else {
         return "";
      }
   };

   // Code to consistently generate ID numbers without overlap
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


   $scope.reset = function() {
      Database.reset();
      $scope.database = Database.all();
   };
   $scope.debug = function() {
      console.log($scope.database);
   };
});
