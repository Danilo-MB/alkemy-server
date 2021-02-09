import { Request, Response } from 'express';
import pool from '../database';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

class UserController {


    public list(req: Request, res: Response){
        // const users = pool.query ('SELECT * FROM user ORDER BY created_at DESC', function (err, rows) {
        //     if(err){
        //         res.status(500);
        //         res.send({error: err});
        //     }else{
        //         res.send(rows);
        //     }
        // }); 
    }

    public create(req: Request, res: Response){
        let user = req.body;
        user.pass = bcrypt.hashSync(user.pass, 10); // es la longitud de la salt que se genera aleatoriamente
        pool.query('INSERT INTO user set ?', user, function (err, count) {
            if(err){
                res.status(500);
                res.json({error: err});
            }else{
                res.json({message: 'user created.'});
            }
        });
    }

    public login(req: Request, res: Response){
        const email = req.body.email;
        pool.query('SELECT * FROM user WHERE email = ?', email, function (err, rows) {
            if(err){
                res.status(500);
                res.json({error: err});
            }else{
                if(rows.length > 0 && bcrypt.compareSync(req.body['pass'], rows[0].pass)){
                    res.json({token: jwt.sign({ email }, "secreto", { expiresIn: "2 min" } )}); // "secreto" debería ser un string random generado que no debe ser compartido
                }else{
                    res.status(401);
                    res.json({error: "credenciales inválidas"});
                }
            }
        });
    }


    // public update(req: Request, res: Response){
    //     const { id } = req.params;
    //     pool.query('UPDATE operation set ? WHERE id=?', [req.body, id]);
    //     res.json({message: 'operation was updated.'});
    // }

}

export const userController = new UserController();