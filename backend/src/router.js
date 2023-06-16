const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
// const user = require("./user.route");

// router.use("/user", user);
router.get("/", userControllers.getAll);
// router.get('/:id', userController.getOne);
router.post("/", userControllers.addOne);
router.put("/:id", userControllers.updateOne);
// router.delete('/:id', userController.deleteOne);

module.exports = router;
