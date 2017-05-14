const res = {
  json: () => new Promise(() => 'Hello'),
  status: 200,
  statusText: '',
};

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

export default function request(url, options) {
  return res.json();
}
