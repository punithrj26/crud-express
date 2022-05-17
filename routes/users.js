const { getAllUser,createUser, deleteUser } = require("../controller");
const router = require("express").Router();

router.get("/all-users", (req, res) => {
    res.send("hello");
});

//? Get all users
router.route("/all").get(getAllUser);
router.route("/all-two").post();

//?Create users
router.route("/create-user").post(createUser);

//?Delete users
router.route("/delete-user/:id").delete(deleteUser);

//?Update users
router.route("/:id").put();

module.exports = router;
