"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriesController_1 = require("./controllers/categoriesController");
class CategoriesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', categoriesController_1.categoriesController.list);
    }
}
const categoriesRoutes = new CategoriesRoutes();
exports.default = categoriesRoutes.router;
//# sourceMappingURL=categoriesRoutes.js.map