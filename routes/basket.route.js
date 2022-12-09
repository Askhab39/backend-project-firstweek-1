const { Router } = require("express");
const { basketController } = require("../controllers/basket.controller");
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.get("/basket/user", authMiddleware, basketController.getBusketByUser);
router.patch("/basket/:id", basketController.addProductToBasket);
router.patch("/basket/delete/:id", authMiddleware,basketController.deleteBasket);
router.patch("/basket/edit/:id",authMiddleware, basketController.editAmount);

module.exports = router;
