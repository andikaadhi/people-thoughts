const Service = require("../services");

const controllers = {
  getThoughts: async (req, res, next) => {
    try {
        const response = await Service.getThoughts();
        res.send(response);
    } catch (err) {
      next(err);
    }
  },

  addThought: async (req, res, next) => {
    try {
      const { author, content } = req.body;
      const response = await Service.addThought(author, content);
      if (response) req.app.io.emit('new-thought', response);
      res.send(response);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = controllers;
