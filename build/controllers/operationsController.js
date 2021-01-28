"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.operationsController = void 0;
const database_1 = __importDefault(require("../database"));
class OperationsController {
    list(req, res) {
        const operations = database_1.default.query('SELECT * FROM operation ORDER BY created_at DESC', function (err, rows) {
            if (err) {
                res.status(500);
                res.send({ error: err });
            }
            else {
                res.send(rows);
            }
        });
    }
    getOne(req, res) {
        const { id } = req.params;
        const operations = database_1.default.query('SELECT * FROM operation WHERE id = ?', Number(id), function (err, operation) {
            if (err) {
                res.status(500);
                res.json({ error: err });
            }
            else {
                res.json(operation[0]);
            }
        });
    }
    create(req, res) {
        database_1.default.query('INSERT INTO operation set ?', req.body, function (err, count) {
            if (err) {
                res.status(500);
                res.json({ error: err });
            }
            else {
                res.json({ message: 'operation created.' });
            }
        });
    }
    delete(req, res) {
        const { id } = req.params;
        database_1.default.query('DELETE FROM operation WHERE id=?', id, function (err, count) {
            if (err) {
                res.status(500);
                res.json({ error: err });
            }
            else {
                res.json({ message: 'operation deleted. Id: ' + id });
            }
        });
    }
    update(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE operation set ? WHERE id=?', [req.body, id], function (err, count) {
            if (err) {
                res.status(500);
                res.json({ error: err });
            }
            else {
                res.json({ message: 'operation updated. Id: ' + id });
            }
        });
    }
}
exports.operationsController = new OperationsController();
//# sourceMappingURL=operationsController.js.map