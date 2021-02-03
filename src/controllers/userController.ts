import { Request, Response } from 'express';
import pool from '../database';

class UserController {


    public list(req: Request, res: Response){
        const users = pool.query ('SELECT * FROM user ORDER BY created_at DESC', function (err, rows) {
            if(err){
                res.status(500);
                res.send({error: err});
            }else{
                res.send(rows);
            }
        }); 
    }

    public create(req: Request, res: Response){
        pool.query('INSERT INTO user set ?', req.body, function (err, count) {
            if(err){
                res.status(500);
                res.json({error: err});
            }else{
                res.json({message: 'user created.'});
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