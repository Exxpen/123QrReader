angular.module('starter.services', [])

.factory('Database', function() {
   var db = [
      {"NAME":"Alan","ID":123,"COLOUR":"blue","DATE":"Sep. 25, 2009","IN":[],"OUT":[],"ATTENDANCE":false,"HOURS":0},
      {"NAME":"Shan","ID":234,"COLOUR":"red","DATE":"Sep. 27, 2009","IN":[],"OUT":[],"ATTENDANCE":false,"HOURS":0},
      {"NAME":"John","ID":345,"COLOUR":"orange","DATE":"Sep. 29, 2009","IN":[],"OUT":[],"ATTENDANCE":false,"HOURS":0},
      {"NAME":"Minna","ID":456,"COLOUR":"teal","DATE":"Sep. 30, 2009","IN":[],"OUT":[],"ATTENDANCE":false,"HOURS":0}
   ];
   // Load db from storage, otherwise save db to storage
   if (window.localStorage.database) {
      db = JSON.parse(window.localStorage.database);
   } else {
      window.localStorage.database = JSON.stringify(db);
   }
   var sortArray = function(array) {
      return array.sort(function(a, b) {
         return a - b;
      });
   };
   var calculateHours = function(volunteer) {
      if (volunteer.IN.length === 0 || volunteer.OUT.length === 0) {
         return "Invalid number of sign in/outs";
      }
      // Deep copy of the two arrays
      var tempSignIn = JSON.parse(JSON.stringify(volunteer.IN));
      var tempSignOut = JSON.parse(JSON.stringify(volunteer.OUT));
      // Two for loops to change array values from string to int value
      for (var i = 0; i < tempSignIn.length; i++) {
         tempSignIn[i] = (new Date(tempSignIn[i])).getTime();
      }
      for (var j = 0; j < tempSignOut.length; j++) {
         tempSignOut[j] = (new Date(tempSignOut[j])).getTime();
      }
      // If the volunteer never signed out, add a sign out stamp right after their most recent sign in
      if (tempSignIn[tempSignIn.length - 1] > tempSignOut[tempSignOut.length - 1]) {
         tempSignOut.push(tempSignIn[tempSignIn.length - 1] + 1);
      }
      var hours = 0;
      var time = {
         in: tempSignIn.shift(),
         out: tempSignOut[0]
      };
      while (1) {
         do {
            time.out = tempSignOut.shift();
         } while (time.out < time.in);
         hours += (time.out - time.in)/1000/60/60;
         do {
            time.in = tempSignIn.shift();
         } while(time.out > time.in);
         if (tempSignIn.length === 0) {
            break;
         }
      }
      return hours;
   };

   return {
      reset: function() {
         db = [
            {"NAME":"Alan","ID":123,"COLOUR":"blue","DATE":"Sep. 25, 2009","IN":[],"OUT":[],"ATTENDANCE":false,"HOURS":0},
            {"NAME":"Shan","ID":234,"COLOUR":"red","DATE":"Sep. 27, 2009","IN":[],"OUT":[],"ATTENDANCE":false,"HOURS":0},
            {"NAME":"John","ID":345,"COLOUR":"orange","DATE":"Sep. 29, 2009","IN":[],"OUT":[],"ATTENDANCE":false,"HOURS":0},
            {"NAME":"Minna","ID":456,"COLOUR":"teal","DATE":"Sep. 30, 2009","IN":[],"OUT":[],"ATTENDANCE":false,"HOURS":0}
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
               if (arguments.length === 1) {
                  var currDate = new Date();
                  db[i].IN.push(currDate.getTime());
               } else {
                  db[i].IN.push(date);
               }
               db[i].IN = sortArray(db[i].IN);
               db[i].HOURS = calculateHours(db[i]);
               db[i].ATTENDANCE = true;
               window.localStorage.database = JSON.stringify(db);
            }
            return;
         }
         throw "ID not found";
      },
      // Returns whether or not signOut was successful
      signOut: function(dbID, date) {
         for (var i = 0; i < db.length; i++) {
            if (db[i].ID === parseInt(dbID)) {
               if (arguments.length === 1) {
                  var currDate = new Date();
                  db[i].OUT.push(currDate.getTime());
               } else {
                  db[i].OUT.push(date);
               }
               db[i].OUT = sortArray(db[i].OUT);
               db[i].HOURS = calculateHours(db[i]);
               db[i].ATTENDANCE = false;
               window.localStorage.database = JSON.stringify(db);
            }
            return;
         }
         throw "ID not found";
      },
      removeSignIn: function(dbID, date) {
         for (var i = 0; i < db.length; i++) {
            if (db[i].ID === parseInt(dbID)) {
               var j = db[i].IN.indexOf(date);
               if (j != -1) {
                  db[i].IN.splice(i, 1);
                  db[i].HOURS = calculateHours(db[i]);
                  window.localStorage.database = JSON.stringify(db);
                  return true;
               }
            }
         }
         return false;
      },
      removeSignOut: function(dbID, date) {
         for (var i = 0; i < db.length; i++) {
            if (db[i].ID === parseInt(dbID)) {
               var j = db[i].OUT.indexOf(date);
               if (j != -1) {
                  db[i].OUT.splice(i, 1);
                  db[i].HOURS = calculateHours(db[i]);
                  window.localStorage.database = JSON.stringify(db);
                  return;
               }
            }
         }
      }
   };
});
