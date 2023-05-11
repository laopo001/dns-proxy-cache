import { Context } from 'koa';
import { log } from '../logger';
import fetch from 'isomorphic-fetch'
var crypto = require('crypto');

const fs = require('fs');


export default class HomeController {
  public static async index(ctx: Context) {
    ctx.body = 'hi, egg2';
  }
  public static async resolve(ctx: Context) {
    ctx.status = 200;
    ctx.body = { text: 'hi, egg' };
  }
  public static async dnsQuery(ctx: Context) {

  }
}

module.exports = HomeController;
