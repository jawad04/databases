var models = require('../models');

// http stuff
module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(data => {
        res.send(data);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(data => {
        res.send(data);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.messages.get(data => {
        res.send(data);
      });
    },
    post: function (req, res) {
      req.on('data', (chunk) => console.log(chunk));
      res.send(models.users.post());
    }
  }
};

