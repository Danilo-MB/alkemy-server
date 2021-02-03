"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const database_1 = __importDefault(require("../database"));
class UserController {
    list(req, res) {
        const users = database_1.default.query('SELECT * FROM user ORDER BY created_at DESC', function (err, rows) {
            if (err) {
                res.status(500);
                res.send({ error: err });
            }
            else {
                res.send(rows);
            }
        });
    }
    create(req, res) {
        database_1.default.query('INSERT INTO user set ?', req.body, function (err, count) {
            if (err) {
                res.status(500);
                res.json({ error: err });
            }
            else {
                res.json({ message: 'user created.' });
            }
        });
    }
}
exports.userController = new UserController();
//# sourceMappingURL=userController.js.map