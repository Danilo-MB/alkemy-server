"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class OperacionesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send("Operaciones"));
    }
}
const operacionesRoutes = new OperacionesRoutes();
exports.default = operacionesRoutes.router;
