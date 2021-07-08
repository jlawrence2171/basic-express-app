module.exports = (app) => {
let express = require('express');
let router = express.Router();
let controllers = require("../controllers/blogposts.controller");

router.get("/", controllers.findall)
router.get("/:id", controllers.findbyid)
app.use("/api/blogposts", router)
}