angular.module('starter.services', [])

.factory('Database', function() {
   var defaultDB = [
      {"ID":1,"FNAME":"Alexander","LNAME":"Yeung","PHONE":4161234567,"AGE":20,"EMAIL":"test@123domain.com","SCHOOL":"Lawrence Park CI","ADDRESS":"123 Warden Ave.","CITY":"Scarborough",
      "POSTALCODE":"A12B3C","EMERGCONTACT":"John Doe","EMERGNUMBER":4161234567,"EMERGRELATION":"Father","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
      {"ID":2,"FNAME":"Jen","LNAME":"Chan","PHONE":4161234567,"AGE":15,"EMAIL":"test@123domain.com","SCHOOL":"Agincourt CI","ADDRESS":"123 Warden Ave.","CITY":"Scarborough",
      "POSTALCODE":"A12B3C","EMERGCONTACT":"John Doe","EMERGNUMBER":4161234567,"EMERGRELATION":"Father","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
      {"ID":3,"FNAME":"Mark","LNAME":"Choi","PHONE":4161234567,"AGE":17,"EMAIL":"test@123domain.com","SCHOOL":"Pierre Elliot Trudeau HS","ADDRESS":"123 Warden Ave.","CITY":"Scarborough",
      "POSTALCODE":"A12B3C","EMERGCONTACT":"John Doe","EMERGNUMBER":4161234567,"EMERGRELATION":"Father","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
      {"ID":4,"FNAME":"David","LNAME":"Lin","PHONE":4161234567,"AGE":18,"EMAIL":"test@123domain.com","SCHOOL":"Agincourt CI","ADDRESS":"123 Warden Ave.","CITY":"Scarborough",
      "POSTALCODE":"A12B3C","EMERGCONTACT":"John Doe","EMERGNUMBER":4161234567,"EMERGRELATION":"Father","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
      {"ID":5,"FNAME":"Matthew","LNAME":"Smith","PHONE":4161234567,"AGE":15,"EMAIL":"test@123domain.com","SCHOOL":"Agincourt CI","ADDRESS":"123 Warden Ave.","CITY":"Scarborough",
      "POSTALCODE":"A12B3C","EMERGCONTACT":"John Doe","EMERGNUMBER":4161234567,"EMERGRELATION":"Father","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
      {"ID":5,"FNAME":"Mark","LNAME":"Smith","PHONE":4161234567,"AGE":15,"EMAIL":"test@123domain.com","SCHOOL":"Agincourt CI","ADDRESS":"123 Warden Ave.","CITY":"Scarborough",
      "POSTALCODE":"A12B3C","EMERGCONTACT":"John Doe","EMERGNUMBER":4161234567,"EMERGRELATION":"Father","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
      {"ID":6,"FNAME":"Dan","LNAME":"Chan","PHONE":4161234567,"AGE":15,"EMAIL":"test@123domain.com","SCHOOL":"Agincourt CI","ADDRESS":"123 Warden Ave.","CITY":"Scarborough",
      "POSTALCODE":"A12B3C","EMERGCONTACT":"John Doe","EMERGNUMBER":4161234567,"EMERGRELATION":"Father","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
      {"ID":7,"FNAME":"Avery","LNAME":"Wu","PHONE":4161234567,"AGE":15,"EMAIL":"test@123domain.com","SCHOOL":"Agincourt CI","ADDRESS":"123 Warden Ave.","CITY":"Scarborough",
      "POSTALCODE":"A12B3C","EMERGCONTACT":"John Doe","EMERGNUMBER":4161234567,"EMERGRELATION":"Father","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
      {"ID":8,"FNAME":"Tom","LNAME":"Cruise","PHONE":4161234567,"AGE":15,"EMAIL":"test@123domain.com","SCHOOL":"Agincourt CI","ADDRESS":"123 Warden Ave.","CITY":"Scarborough",
      "POSTALCODE":"A12B3C","EMERGCONTACT":"John Doe","EMERGNUMBER":4161234567,"EMERGRELATION":"Father","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
      {"ID":9,"FNAME":"Matt","LNAME":"Damon","PHONE":4161234567,"AGE":15,"EMAIL":"test@123domain.com","SCHOOL":"Agincourt CI","ADDRESS":"123 Warden Ave.","CITY":"Scarborough",
      "POSTALCODE":"A12B3C","EMERGCONTACT":"John Doe","EMERGNUMBER":4161234567,"EMERGRELATION":"Father","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
      {"ID":10,"FNAME":"Ryan","LNAME":"Reynolds","PHONE":4161234567,"AGE":15,"EMAIL":"test@123domain.com","SCHOOL":"Agincourt CI","ADDRESS":"123 Warden Ave.","CITY":"Scarborough",
      "POSTALCODE":"A12B3C","EMERGCONTACT":"John Doe","EMERGNUMBER":4161234567,"EMERGRELATION":"Father","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
      {"ID":11,"FNAME":"Jason","LNAME":"Statham","PHONE":4161234567,"AGE":15,"EMAIL":"test@123domain.com","SCHOOL":"Agincourt CI","ADDRESS":"123 Warden Ave.","CITY":"Scarborough",
      "POSTALCODE":"A12B3C","EMERGCONTACT":"John Doe","EMERGNUMBER":4161234567,"EMERGRELATION":"Father","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
      {"ID":12,"FNAME":"Arnold","LNAME":"Schwarzenegger","PHONE":4161234567,"AGE":15,"EMAIL":"test@123domain.com","SCHOOL":"Agincourt CI","ADDRESS":"123 Warden Ave.","CITY":"Scarborough",
      "POSTALCODE":"A12B3C","EMERGCONTACT":"John Doe","EMERGNUMBER":4161234567,"EMERGRELATION":"Father","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
      {"ID":13,"FNAME":"Sylvester","LNAME":"Stallone","PHONE":4161234567,"AGE":15,"EMAIL":"test@123domain.com","SCHOOL":"Agincourt CI","ADDRESS":"123 Warden Ave.","CITY":"Scarborough",
      "POSTALCODE":"A12B3C","EMERGCONTACT":"John Doe","EMERGNUMBER":4161234567,"EMERGRELATION":"Father","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
      {"ID":14,"FNAME":"Barrack","LNAME":"Obama","PHONE":4161234567,"AGE":16,"EMAIL":"test@123domain.com","SCHOOL":"Mary Ward CSS","ADDRESS":"123 Warden Ave.","CITY":"Scarborough",
      "POSTALCODE":"M2N7A2","EMERGCONTACT":"John Doe","EMERGNUMBER":4161234567,"EMERGRELATION":"Father","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
      {"ID":15,"FNAME":"Kobe","LNAME":"Bryant","PHONE":4161234567,"AGE":16,"EMAIL":"test@123domain.com","SCHOOL":"Mary Ward CSS","ADDRESS":"123 Warden Ave.","CITY":"Scarborough",
      "POSTALCODE":"M2N7A2","EMERGCONTACT":"John Doe","EMERGNUMBER":4161234567,"EMERGRELATION":"Father","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
      {"ID":16,"FNAME":"Jessica","LNAME":"Alba","PHONE":4161234567,"AGE":16,"EMAIL":"test@123domain.com","SCHOOL":"Mary Ward CSS","ADDRESS":"123 Warden Ave.","CITY":"Scarborough",
      "POSTALCODE":"M2N7A2","EMERGCONTACT":"John Doe","EMERGNUMBER":4161234567,"EMERGRELATION":"Father","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
      {"ID":17,"FNAME":"Brad","LNAME":"Pitt","PHONE":4161234567,"AGE":16,"EMAIL":"test@123domain.com","SCHOOL":"Mary Ward CSS","ADDRESS":"123 Warden Ave.","CITY":"Scarborough",
      "POSTALCODE":"M2N7A2","EMERGCONTACT":"John Doe","EMERGNUMBER":4161234567,"EMERGRELATION":"Father","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
      {"ID":18,"FNAME":"James","LNAME":"Dean","PHONE":4161234567,"AGE":16,"EMAIL":"test@123domain.com","SCHOOL":"Mary Ward CSS","ADDRESS":"123 Warden Ave.","CITY":"Scarborough",
      "POSTALCODE":"M2N7A2","EMERGCONTACT":"John Doe","EMERGNUMBER":4161234567,"EMERGRELATION":"Father","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
      {"ID":19,"FNAME":"Daniel","LNAME":"Radcliffe","PHONE":4161234567,"AGE":16,"EMAIL":"test@123domain.com","SCHOOL":"Mary Ward CSS","ADDRESS":"123 Warden Ave.","CITY":"Scarborough",
      "POSTALCODE":"M2N7A2","EMERGCONTACT":"John Doe","EMERGNUMBER":4161234567,"EMERGRELATION":"Father","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
      {"ID":20,"FNAME":"Keira","LNAME":"Knightley","PHONE":4161234567,"AGE":16,"EMAIL":"test@123domain.com","SCHOOL":"Mary Ward CSS","ADDRESS":"123 Warden Ave.","CITY":"Scarborough",
      "POSTALCODE":"M2N7A2","EMERGCONTACT":"John Doe","EMERGNUMBER":4161234567,"EMERGRELATION":"Father","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
      {"ID":21,"FNAME":"Meghan","LNAME":"Fox","PHONE":4161234567,"AGE":16,"EMAIL":"test@123domain.com","SCHOOL":"Mary Ward CSS","ADDRESS":"123 Warden Ave.","CITY":"Scarborough",
      "POSTALCODE":"M2N7A2","EMERGCONTACT":"John Doe","EMERGNUMBER":4161234567,"EMERGRELATION":"Father","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
      {"ID":22,"FNAME":"Nicolas","LNAME":"Cage","PHONE":4161234567,"AGE":16,"EMAIL":"test@123domain.com","SCHOOL":"Mary Ward CSS","ADDRESS":"123 Warden Ave.","CITY":"Scarborough",
      "POSTALCODE":"M2N7A2","EMERGCONTACT":"John Doe","EMERGNUMBER":4161234567,"EMERGRELATION":"Father","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false}
   ];
   var db = defaultDB;
   // Load db from storage, otherwise save db to storage
   if (window.localStorage.database) {
      db = JSON.parse(window.localStorage.database);
   } else {
      window.localStorage.database = JSON.stringify(db);
   }
   var calculateHours = function(volunteer) {
      if (volunteer.IN !== 0) {
         var time = ((new Date()).getTime() - volunteer.IN)/1000/60/60;
         volunteer.HOURS += time;
      }
   };
   return {
      reset: function() {
         db = defaultDB;
         window.localStorage.database = JSON.stringify(db);
      },
      all: function() {
         return db;
      },
      // Returns null if not found, otherwise returns object
      get: function(dbID) {
         for (var i = 0; i < db.length; i++) {
            if (db[i].ID === parseInt(dbID)) {
               return db[i];
            }
         }
         return null;
      },
      // Returns whether or not signIn was successful
      signIn: function(dbID) {
         for (var i = 0; i < db.length; i++) {
            if (db[i].ID === parseInt(dbID)) {
               if (db[i].IN === 0) {
                  db[i].IN = (new Date()).getTime();
                  window.localStorage.database = JSON.stringify(db);
                  return;
               } else {
                  throw "Volunteer is already signed in";
               }
            }
         }
         throw "ID not found";
      },
      // Returns whether or not signOut was successful
      signOut: function(dbID) {
         for (var i = 0; i < db.length; i++) {
            if (db[i].ID === parseInt(dbID)) {
               if (db[i].IN === 0) {
                  throw "Volunteer has not yet signed in";
               } else {
                  calculateHours(db[i]);
                  db[i].IN = 0;
                  window.localStorage.database = JSON.stringify(db);
                  return;
               }
            }
         }
         throw "ID not found";
      },
      addHours: function(dbID, hours) {
         for (var i = 0; i < db.length; i++) {
            if (db[i].ID === parseInt(dbID)) {
               db[i].HOURS += hours;
               window.localStorage.database = JSON.stringify(db);
               return;
            }
         }
         throw "ID not found";
      },
      removeVolunteer: function(dbID) {
         for (var i = 0; i < db.length; i++) {
            if (db[i].ID === parseInt(dbID)) {
               db.splice(i,1);
               window.localStorage.database = JSON.stringify(db);
               return;
            }
         }
         throw "ID not found";
      },
      addVolunteer: function(volunteer) {
         db.push(volunteer);
         window.localStorage.database = JSON.stringify(db);
      },
      updateShirt: function(dbID) {
         for (var i = 0; i < db.length; i++) {
            if (db[i].ID === parseInt(dbID)) {
               if (db[i].SHIRT === "true") {
                  db[i].SHIRT = false;
               } else if (db[i].SHIRT === "false") {
                  db[i].SHIRT = true;
               }
               window.localStorage.database = JSON.stringify(db);
               return;
            }
         }
         throw "ID not found";
      },
      updateWaiver: function(dbID) {
         for (var i = 0; i < db.length; i++) {
            if (db[i].ID === parseInt(dbID)) {
               if (db[i].WAIVER === "true") {
                  db[i].WAIVER = false;
               } else if (db[i].WAIVER === "false") {
                  db[i].WAIVER = true;
               }
               window.localStorage.database = JSON.stringify(db);
               return;
            }
         }
         throw "ID not found";
      }
   };
})

.service('showVolunteerModal', function($ionicModal, $rootScope) {
   return function($scope) {
      $scope = $scope || $rootScope.$new();

      return $ionicModal.fromTemplateUrl('templates/showVolunteer.html', {
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
   };

});
