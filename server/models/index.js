var db = require('../db');

//db.connect();
//db stuff
//console.log(db);

module.exports = {
  messages: {
    get: function (callback) {  
      var query = "SELECT * FROM messages;";
      db.query(query, function(error, results) {
        if (error) {
          callback(error);
        } else {
          callback(results);
        }
      });

    }, // a function which produces all the messages
    post: function (reqBody, callback) {
    //   //dbConnection.query(queryString, queryArgs, function(err, results) {
      console.log('AT MESSAGES POST');
      var username = reqBody.username;
      var text = reqBody.message;
      var roomname = reqBody.roomname;
      var query = `INSERT INTO messages (username, text, roomname) VALUES (?, ?, ?);`;
      
      console.log(query);
      db.query(query, [username, text, roomname], function(error, results) {
        if (error) {
          callback(error);
        }
          callback(results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var query = "SELECT * from users;";

      db.query(query, function(error, results) {
        if (error) {
          callback(error);
        } else {
          callback(results);
        }
      });

    },
    post: function (reqBody, callback) {
      var query = "INSERT INTO users (username) values (?);";   
      var username = reqBody.username;
      
      db.query(query, username, function(error, results) {
        if (error) {
          callback(error);
        } else {
          callback(results);
        }
      });
    }
  }
};

module.exports.messages.get((result) => console.log('RESULTS: ', result));