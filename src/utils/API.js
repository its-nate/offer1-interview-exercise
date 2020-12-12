const Data = require('../homes.json');

module.exports = {
    listings: async () => {
        return Data;
    }
};
