const { Router } = require("express");
const controllers = require("../controllers");
const routes = Router();

routes.get("/", controllers.getController);
routes.get("/:id", controllers.getByIdController);
routes.post("/", controllers.postController);
routes.put("/:id", controllers.putController);
routes.delete("/:id", controllers.deleteController);

module.exports = routes;
