const { getAllProvider,createProvider,deleteProvider,updateProvider, } = require('../controller');

const router = require('express').Router();


router.get("/all-provider", (req,res) => {
    res.send("hello")
})

//? Get all providers
router.route("/all").get(getAllProvider);

//?Create providers
router.route("/create-provider").post(createProvider);

//?Delete Providers
router.route("/delete-provider/:id").delete(deleteProvider);

//?Update Providers
router.route("update-provider/:id").put(updateProvider);


module.exports = router;