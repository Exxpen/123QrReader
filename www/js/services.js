angular.module('starter.services', [])

.factory('Database', function() {
   var defaultDB = [
      {"ID":1,"NAME":"first name","GENDER":"Male","SCHOOL":"Markville secondary school","AGE":17,"EMAIL":"test@gmail.com","PHONE":"1234567890","EMERGCONTACT":"name","EMERGNUMBER":"1234567890","AVAIL":"Thursday 14, Friday 15, Saturday 16, Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":2,"NAME":"first name","GENDER":"Male","SCHOOL":"Father Michael McGivney","AGE":18,"EMAIL":"test@gmail.com","PHONE":"1234567890","EMERGCONTACT":"name","EMERGNUMBER":"1234567890","AVAIL":"Friday 15;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":3,"NAME":"first name","GENDER":"Female","SCHOOL":"BAYVIEW SS","AGE":15,"EMAIL":"test@rogers.com","PHONE":"1234567890","EMERGCONTACT":"name","EMERGNUMBER":"1234567890","AVAIL":"Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":4,"NAME":"first name","GENDER":"Female","SCHOOL":"Thornlea Secondary School","AGE":19,"EMAIL":"test@gmail.com","PHONE":"1234567890","EMERGCONTACT":"name","EMERGNUMBER":"1234567890","AVAIL":"Friday 15, Saturday 16, Sunday 17","SHIRT-SIZE":"Large","IN":0,"HOURS":0}
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
      getFromEmail: function(dbEmail) {
         for (var i = 0; i < db.length; i++) {
            if (db[i].EMAIL === dbEmail) {
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
});
