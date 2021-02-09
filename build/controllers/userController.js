"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt = __importStar(require("bcryptjs"));
const jwt = __importStar(require("jsonwebtoken"));
class UserController {
    list(req, res) {
        // const users = pool.query ('SELECT * FROM user ORDER BY created_at DESC', function (err, rows) {
        //     if(err){
        //         res.status(500);
        //         res.send({error: err});
        //     }else{
        //         res.send(rows);
        //     }
        // }); 
    }
    create(req, res) {
        let user = req.body;
        user.pass = bcrypt.hashSync(user.pass, 10); // es la longitud de la salt que se genera aleatoriamente
        database_1.default.query('INSERT INTO user set ?', user, function (err, count) {
            if (err) {
                res.status(500);
                res.json({ error: err });
            }
            else {
                res.json({ message: 'user created.' });
            }
        });
    }
    login(req, res) {
        const email = req.body.email;
        database_1.default.query('SELECT * FROM user WHERE email = ?', email, function (err, rows) {
            if (err) {
                res.status(500);
                res.json({ error: err });
            }
            else {
                if (rows.length > 0 && bcrypt.compareSync(req.body['pass'], rows[0].pass)) {
                    res.json({ token: jwt.sign({ email }, "secreto", { expiresIn: "2 min" }) }); // "secreto" debería ser un string random generado que no debe ser compartido
                }
                else {
                    res.status(401);
                    res.json({ error: "credenciales inválidas" });
                }
            }
        });
    }
}
exports.userController = new UserController();
//# sourceMappingURL=userController.js.map