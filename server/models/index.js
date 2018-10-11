var db = require('../db');

//db.connect();
//db stuff
//console.log(db);

module.exports = {
  messages: {
    get: function (callback) {  
      var query = "SELECT * FROM messages";
      db.query(query, function(error, results) {
        if (error) {
          callback(error);
        } else {
          callback(results);
        }
      });

    }, // a function which produces all the messages
    post: function (callback) {
    //   //dbConnection.query(queryString, queryArgs, function(err, results) {
      var query = "INSERT INTO messages (id, username, text, roomname)";
      
      db.query(query, function(error, results) {
        if (error) {
          console.log('error encountered');
          return;
        }
        return results;
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var query = "SELECT * from users";

      db.query(query, function(error, results) {
        if (error) {
          callback(error);
        } else {
          callback(results);
        }
      });

    },
    post: function (callback) {
      var query = "INSERT INTO users (username) values ('JJ')";

      db.query(query, function(error, results) {
        if (error) {
          callback(error);
        } else {
          callback(results);
        }
      });
    }
  }
};

module.exports.messages.get((result) => console.log(result));