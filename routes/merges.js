const { mergeProvider,mergeRequest } = require("../controller/merge");

const router = require("express").Router();

router.route("/all").get(mergeProvider);

router.route("/merge-request").post(mergeRequest);

module.exports = router;