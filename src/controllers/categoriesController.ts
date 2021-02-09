import { Request, Response } from 'express';
import pool from '../database';

class CategoriesController {

    public list(req: Request, res: Response){
        const categories = pool.query('SELECT * FROM categories', function (err, rows) {
            if(err){
                res.status(500);
                res.send({error: err});
            }else{
                res.send(rows);
            }
        }); 
    }

}

export const categoriesController = new CategoriesController();