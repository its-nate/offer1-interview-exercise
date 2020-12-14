const router = require("express").Router();
const listingsController = require("../../controller/listingsController");

// Matches with "/api/listings"
router.route("/").get(listingsController.getListings);

// Matches with "/api/listings/:id"
router.route("/:id").get(listingsController.getListing);

module.exports = router;
