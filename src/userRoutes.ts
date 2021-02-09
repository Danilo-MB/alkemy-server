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
        this.router.post('/login', userController.login);
    }



}

const userRoutes = new UserRoutes();
export default userRoutes.router;