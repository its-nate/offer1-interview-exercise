const axios = require("axios");

module.exports = {
    listings: async () => {
        return axios.get("/api/listings");
    },
    listing: (id) => {
        return axios.get(`/api/listings/${id}`)
    }
};