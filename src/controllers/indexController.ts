import { Request, Response } from 'express';

class IndexController {

    public index(req: Request, res: Response){
        res.send('Server OKKKK');
    }

}

export const indexController = new IndexController();