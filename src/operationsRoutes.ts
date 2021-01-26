import { Router } from 'express';
import { operationsController } from './controllers/operationsController'

class OperacionesRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', operationsController.list);
        this.router.get('/:id', operationsController.getOne);
        this.router.post('/', operationsController.create);
        this.router.delete('/:id', operationsController.delete);
        this.router.put('/:id', operationsController.update);
    }



}

const operacionesRoutes = new OperacionesRoutes();
export default operacionesRoutes.router;