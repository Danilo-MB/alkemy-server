"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = __importDefault(require("./keys"));
const mysql_1 = __importDefault(require("mysql"));
//import mysql from 'promise-mysql';
const pool = mysql_1.default.createPool(keys_1.default.database);
pool.getConnection((err, conn) => {
    conn.query('SELECT * FROM operation');
    conn.release();
    console.log("Database is connected");
});
exports.default = pool;
