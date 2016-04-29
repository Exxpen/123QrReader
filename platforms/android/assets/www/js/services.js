angular.module('starter.services', [])

.factory('Database', function() {
   var db = [
      {"NAME":"Alan","ID":123,"COLOUR":"blue","DATE":"Sep. 25, 2009","IN":[],"OUT":[]},
      {"NAME":"Shan","ID":234,"COLOUR":"red","DATE":"Sep. 27, 2009","IN":[],"OUT":[]},
      {"NAME":"John","ID":345,"COLOUR":"orange","DATE":"Sep. 29, 2009","IN":[],"OUT":[]},
      {"NAME":"Minna","ID":456,"COLOUR":"teal","DATE":"Sep. 30, 2009","IN":[],"OUT":[]}
   ];

   // Load db from storage, otherwise save db to storage
   if (window.localStorage.database) {
      db = JSON.parse(window.localStorage.database);
   } else {
      window.localStorage.database = JSON.stringify(db);
   }

   return {
      reset: function() {
         db = [
            {"NAME":"Alan","ID":123,"COLOUR":"blue","DATE":"Sep. 25, 2009","IN":[],"OUT":[]},
            {"NAME":"Shan","ID":234,"COLOUR":"red","DATE":"Sep. 27, 2009","IN":[],"OUT":[]},
            {"NAME":"John","ID":345,"COLOUR":"orange","DATE":"Sep. 29, 2009","IN":[],"OUT":[]},
            {"NAME":"Minna","ID":456,"COLOUR":"teal","DATE":"Sep. 30, 2009","IN":[],"OUT":[]}
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
            if (db[i].ID === parseInt(dbID) && arguments.length === 1) {
               var currDate = new Date();
               db[i].IN.push(currDate.getTime());
               window.localStorage.database = JSON.stringify(db);
               return true;
            } else if (db[i].ID === parseInt(dbID) && arguments.length === 2) {
               db[i].IN.push(date);
               window.localStorage.database = JSON.stringify(db);
               return true;
            }
         }
         return false;
      },
      // Returns whether or not signOut was successful
      signOut: function(dbID, date) {
         for (var i = 0; i < db.length; i++) {
            if (db[i].ID === parseInt(dbID) && arguments.length === 1) {
               var currDate = new Date();
               db[i].OUT.push(currDate.getTime());
               window.localStorage.database = JSON.stringify(db);
               return true;
            } else if (db[i].ID === parseInt(dbID) && arguments.length === 2) {
               db[i].OUT.push(date);
               window.localStorage.database = JSON.stringify(db);
               return true;
            }
         }
         return false;
      }
   };
});
