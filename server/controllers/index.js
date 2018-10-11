var models = require('../models');

// http stuff
module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(data => {
        res.send(data);
      });
    }, // a function which handles a get request for all messages


     // if (err) {
     //            res.redirect('/');
     //        }
     //        res.render('index.ejs', {
     //            title: "Welcome to Socka | View Players"
     //            ,players: result
     //        });
    post: function (req, res) {
      models.messages.post(req.body, data => {
        res.send(data);      
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(data => {
        res.send(data);
      });
    },
    post: function (req, res) {
        models.users.post(req.body, data => {
        console.log('DATA: ' + data);
        res.send(data);      
      });
    }
  }
};

