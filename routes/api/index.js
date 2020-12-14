const router = require("express").Router();
const listingsRoutes = require("./listings");

// Listings routes
router.use("/listings", listingsRoutes);

module.exports = router;
