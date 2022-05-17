const {getAllProviderDetail,deleteProviderDetail, createProviderDetail} = require("../controller")
const router = require("express").Router();

router.get("/all-users", (req, res) => {
    res.send("hello");
});

//? Get all providers
router.route("/all").get(getAllProviderDetail);
router.route("/all-two").post();

//?Create providers
router.route("/create-provider-details").post(createProviderDetail);

//?Delete Providers
router.route("/delete-provider-details/:id").delete(deleteProviderDetail);

//?Update Providers
router.route("/:id").put();

module.exports = router;
