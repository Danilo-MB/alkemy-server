import { Request, Response } from 'express';

class IndexController {

    public index(req: Request, res: Response){
        res.send('Server OK');
    }

}

export const indexController = new IndexController();