import Koa from 'koa';
import cors from '@koa/cors';
import koaBody from "koa-body";

import {  logger } from './logger';
import { unprotectedRouter } from './routes';
// 初始化 Koa 应用实例
const app = new Koa();

// 注册中间件
app.use(logger());
app.use(cors());
app.use(koaBody());

app.use(unprotectedRouter.routes()).use(unprotectedRouter.allowedMethods());

// 运行服务器
app.listen(18000);
