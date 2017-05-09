import 'whatwg-fetch';
import { checkStatus, parseJSON } from '../request';

const res = {
  body: null,
  headers: null,
  json: () => 'Hello',
  ok: true,
  status: 200,
  statusText: '',
  url: '',
};

export default function request(url, options) {
  return new Promise((resolve, reject) => {
    // res.url = url;
    // Object.assign(res, options);
    process.nextTick(() => {
      return resolve(parseJSON(checkStatus(res)));
    });
  });
}
