import { Request, Response } from 'express';
import pool from '../database';

class OperationsController {

    public list(req: Request, res: Response){
        const operations = pool.query ('SELECT * FROM operation ORDER BY created_at DESC', function (err, rows) {
            if(err){
                res.status(500);
                res.send({error: err});
            }else{
                res.send(rows);
            }
        }); 
    }

    public getOne(req: Request, res: Response){
        const { id } = req.params;
        const operations = pool.query('SELECT * FROM operation WHERE id = ?', Number(id), function (err, operation) {
            if(err){
                res.status(500);
                res.json({error: err});
            }else{
                res.json(operation[0]);
            }
        });
    }

    public create(req: Request, res: Response){
        pool.query('INSERT INTO operation set ?', req.body, function (err, count) {
            if(err){
                res.status(500);
                res.json({error: err});
            }else{
                res.json({message: 'operation created.'});
            }
        });
    }

    public delete(req: Request, res: Response){
        const { id } = req.params;
        pool.query('DELETE FROM operation WHERE id=?', [id], function (err, count) {
            if(err){
                res.status(500);
                res.json({error: err});
            }else{
                res.json({message: 'operation deleted. Id: ' + id});
            }
        });

    }

    public update(req: Request, res: Response){
        const { id } = req.params;
        pool.query('UPDATE operation set ? WHERE id=?', [req.body, id], function (err, count) {
            if(err){
                res.status(500);
                res.json({error: err});
            }else{
                res.json({message: 'operation updated. Id: ' + id});
            }
        });
    }

}

export const operationsController = new OperationsController();