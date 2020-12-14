const data = require("../data/homes.json");

// a quick search in place of a db/orm
const find = (id) => {
  for (let i = 0; i < data.length; i++) {
    if (parseInt(id) === parseInt(data[i].id)) {
      return data[i];
    }
  }
};

module.exports = {
  getListings: function (req, res) {
    res.json(data).catch((err) => res.status(422).json(err));
  },
  getListing: function (req, res) {
    res.json(find(req.params.id)).catch((err) => res.status(422).json(err));
  },
};
