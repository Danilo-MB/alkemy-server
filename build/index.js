"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./indexRoutes"));
const operationsRoutes_1 = __importDefault(require("./operationsRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const categoriesRoutes_1 = __importDefault(require("./categoriesRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/operations', operationsRoutes_1.default);
        this.app.use('/user', userRoutes_1.default);
        this.app.use('/categories', categoriesRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on port " + this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
//# sourceMappingURL=index.js.map