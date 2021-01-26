import { Request, Response } from 'express';
import pool from '../database';

class OperationsController {

    public list(req: Request, res: Response){
        const operations = pool.query ('SELECT * FROM operation', function (err, rows) {res.send (rows);}); 
        //console.log(operations);
    }

    public getOne(req: Request, res: Response){
        const { id } = req.params;
        const operations = pool.query('SELECT FROM operation WHERE id =?', [id]);
        res.json({text: "operation found."})
    }

    public create(req: Request, res: Response){
        pool.query('INSERT INTO operation set?', [req.body]);
        res.json({message: 'operation created.'});
    }

    public delete(req: Request, res: Response){
        const { id } = req.params;
        pool.query('DELETE FROM operation WHERE id=?', [id]);
        res.json({message: 'operation deleted. Id: ' + id});
    }

    public update(req: Request, res: Response){
        const { id } = req.params;
        pool.query('UPDATE operation set? WHERE id=?', [req.body, id]);
        res.json({message: 'operation was updated.'});
    }

}

export const operationsController = new OperationsController();