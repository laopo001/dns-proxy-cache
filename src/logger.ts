import log4js from 'log4js';
import moment from 'moment';

log4js.configure({
  appenders: { bot: { type: "file", filename: `bot-${moment().format('YYYY-MM-DD')}.log` } },
  categories: { default: { appenders: ["bot"], level: "trace" } }
});

export const log = log4js.getLogger("bot") as {
  info: Function,
  error: Function
};

import { Context } from 'koa';

export function logger() {
  return async (ctx: Context, next: () => Promise<void>) => {
    const start = Date.now();
    await next().catch(e => {
      const ms = Date.now() - start;
      console.log(`${ctx.method} ${ctx.url} - ${ms}ms error: `, e);
      log.error(`${ctx.method} ${ctx.url} - ${ms}ms error: `, e);
      // throw e;
    });
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} ${ctx.status} - ${ms}ms`);
    log.info(`${ctx.method} ${ctx.url} ${ctx.status} - ${ms}ms`);
  };
}


