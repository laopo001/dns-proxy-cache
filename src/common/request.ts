import fetch from 'isomorphic-fetch'
import { log } from '../logger.js';


export function request(url: string, options = {}, type: string = 'json', timeout: number = 3000): Promise<any> {
    let res = fetch(url, options).then((response: any) => {
        if (type == 'text') {
            return response.text();
        } else {
            return response.json();
        }

    }).catch(err => {

    })
    var timeoutPromise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            reject(new Error("超时 & fetch timeout"))
        }, timeout)
    });
    return Promise.race([res, timeoutPromise])
}