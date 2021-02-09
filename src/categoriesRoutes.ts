import { Router } from 'express';
import { categoriesController } from './controllers/categoriesController';

class CategoriesRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', categoriesController.list);
    }

}

const categoriesRoutes = new CategoriesRoutes();
export default categoriesRoutes.router;