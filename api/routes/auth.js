const express = require("express");
const { setCookie, me, createCabinet } = require("../controllers/auth");

const router = express.Router({ mergeParams: true });

router.route("/").post(setCookie);
router.route("/cabinet").post(createCabinet);
router.route("/me").get(me);

module.exports = router;
