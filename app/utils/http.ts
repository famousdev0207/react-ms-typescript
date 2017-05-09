import request from './request';

export function get(url, options) {
  return request(url, Object.assign({
    compress: true,
    method: 'GET',
  }, options));
}

export function post(url, options) {
  return request(url, Object.assign({
    compress: true,
    method: 'POST',
  }, options));
}
