import { Router } from 'express';

class OperacionesRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => res.send("Operaciones"));
    }



}

const operacionesRoutes = new OperacionesRoutes();
export default operacionesRoutes.router;