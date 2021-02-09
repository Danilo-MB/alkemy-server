"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesController = void 0;
const database_1 = __importDefault(require("../database"));
class CategoriesController {
    list(req, res) {
        const categories = database_1.default.query('SELECT * FROM categories', function (err, rows) {
            if (err) {
                res.status(500);
                res.send({ error: err });
            }
            else {
                res.send(rows);
            }
        });
    }
}
exports.categoriesController = new CategoriesController();
//# sourceMappingURL=categoriesController.js.map