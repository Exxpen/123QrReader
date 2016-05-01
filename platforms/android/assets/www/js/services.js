angular.module('starter.services', [])

.factory('Database', function() {
   var db = [
      {"NAME":"Alan","ID":123,"COLOUR":"blue","DATE":"Sep. 25, 2009","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
      {"NAME":"Shan","ID":234,"COLOUR":"red","DATE":"Sep. 27, 2009","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
      {"NAME":"John","ID":345,"COLOUR":"orange","DATE":"Sep. 29, 2009","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
      {"NAME":"Minna","ID":456,"COLOUR":"teal","DATE":"Sep. 30, 2009","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
   ];
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
         db = [
            {"NAME":"Alan","ID":123,"COLOUR":"blue","DATE":"Sep. 25, 2009","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
            {"NAME":"Shan","ID":234,"COLOUR":"red","DATE":"Sep. 27, 2009","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
            {"NAME":"John","ID":345,"COLOUR":"orange","DATE":"Sep. 29, 2009","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
            {"NAME":"Minna","ID":456,"COLOUR":"teal","DATE":"Sep. 30, 2009","IN":0,"HOURS":0,"SHIRT":false,"WAIVER":false},
         ];
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
      signIn: function(dbID, date) {
         for (var i = 0; i < db.length; i++) {
            if (db[i].ID === parseInt(dbID)) {
               if (db[i].IN === 0) {
                  db[i].IN = (new Date()).getTime();
                  window.localStorage.database = JSON.stringify(db);
               } else {
                  throw "Volunteer is already signed in";
               }
            }
            return;
         }
         throw "ID not found";
      },
      // Returns whether or not signOut was successful
      signOut: function(dbID, date) {
         for (var i = 0; i < db.length; i++) {
            if (db[i].ID === parseInt(dbID)) {
               if (db[i].IN === 0) {
                  throw "Volunteer has not yet signed in";
               } else {
                  calculateHours(db[i]);
                  db[i].IN = 0;
                  window.localStorage.database = JSON.stringify(db);
               }
            }
            return;
         }
         throw "ID not found";
      },
      addHours: function(dbID, hours) {
         for (var i = 0; i < db.length; i++) {
            if (db[i].ID === parseInt(dbID)) {
               db[i].HOURS += hours;
               window.localStorage.database = JSON.stringify(db);
            }
            return;
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
               db[i].SHIRT = !db[i].SHIRT;
               window.localStorage.database = JSON.stringify(db);
            }
            return;
         }
         throw "ID not found";
      },
      updateWaiver: function(dbID) {
         for (var i = 0; i < db.length; i++) {
            if (db[i].ID === parseInt(dbID)) {
               db[i].WAIVER = !db[i].WAIVER;
               window.localStorage.database = JSON.stringify(db);
            }
            return;
         }
         throw "ID not found";
      }
   };
});
