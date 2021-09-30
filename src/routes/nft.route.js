const router = require("express").Router();
// const auth = require('../middleware/auth')

const { nft, get_meta_data } = require("../controllers/nft.controller");

router.post("/create", nft);
router.get("/metadata/:id", get_meta_data);

// router.get(
//     "/:id",
//     get_nft
// );

module.exports = router;
