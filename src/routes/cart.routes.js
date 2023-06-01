import { Router ,json } from "express";
import { cartController } from "../controller/carts.controller.js";
import { checkRole } from "../middlewares/checkRole.js";

let cartsRouter = Router()
cartsRouter.use(json())

cartsRouter.post("/", cartController.add_Cart)

cartsRouter.get("/:cid", cartController.get_Cart)

cartsRouter.post("/:cid/products/:pid", checkRole (["user"]) ,cartController.add_ProductInCart)

cartsRouter.put("/:cid", cartController.add_ArrayToCart)

cartsRouter.put("/:cid/products/:pid", cartController.put_QuantityUpdated)

cartsRouter.delete("/:cid/products/:pid", cartController.delete_ProductInCart)

cartsRouter.delete("/:cid", cartController.delet_AllProductsInCart)

cartsRouter.post ("/:cid/purchase", cartController.get_Purchase)

export default cartsRouter