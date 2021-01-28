"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const database_1 = __importDefault(require("../database"));
class UserController {
    create(req, res) {
        database_1.default.query('INSERT INTO user set?', [req.body]);
        res.json({ message: 'user created.' });
    }
    update(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE operation set? WHERE id=?', [req.body, id]);
        res.json({ message: 'operation was updated.' });
    }
}
exports.userController = new UserController();
//# sourceMappingURL=userController.js.map