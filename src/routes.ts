import Router from '@koa/router';
import HomeController from './controllers/home.js';



const unprotectedRouter = new Router();


unprotectedRouter.get('/', HomeController.index);
unprotectedRouter.get('/json', HomeController.resolve);
unprotectedRouter.get('/dns-query', HomeController.dnsQuery);


export { unprotectedRouter };



