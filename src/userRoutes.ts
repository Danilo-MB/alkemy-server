import { Router } from 'express';
import { userController } from './controllers/userController';

class UserRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.post('/', userController.create);
        this.router.get('/', userController.list);
    }



}

const userRoutes = new UserRoutes();
export default userRoutes.router;