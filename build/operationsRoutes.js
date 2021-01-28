"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const operationsController_1 = require("./controllers/operationsController");
class OperacionesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', operationsController_1.operationsController.list);
        this.router.get('/:id', operationsController_1.operationsController.getOne);
        this.router.post('/', operationsController_1.operationsController.create);
        this.router.delete('/:id', operationsController_1.operationsController.delete);
        this.router.put('/:id', operationsController_1.operationsController.update);
    }
}
const operacionesRoutes = new OperacionesRoutes();
exports.default = operacionesRoutes.router;
//# sourceMappingURL=operationsRoutes.js.map