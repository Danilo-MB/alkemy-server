"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.operationsController = void 0;
const database_1 = __importDefault(require("../database"));
class OperationsController {
    list(req, res) {
        const operations = database_1.default.query('SELECT * FROM operation', function (err, rows) { res.send(rows); });
        //console.log(operations);
    }
    getOne(req, res) {
        const { id } = req.params;
        const operations = database_1.default.query('SELECT FROM operation WHERE id =?', [id]);
        res.json({ text: "operation found." });
    }
    create(req, res) {
        database_1.default.query('INSERT INTO operation set?', [req.body]);
        res.json({ message: 'operation created.' });
    }
    delete(req, res) {
        const { id } = req.params;
        database_1.default.query('DELETE FROM operation WHERE id=?', [id]);
        res.json({ message: 'operation deleted. Id: ' + id });
    }
    update(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE operation set? WHERE id=?', [req.body, id]);
        res.json({ message: 'operation was updated.' });
    }
}
exports.operationsController = new OperationsController();
