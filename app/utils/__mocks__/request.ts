const res = {
  json: () => new Promise(() => 'Hello'),
  status: 200,
  statusText: '',
};

export default function request(url, options) {
  return res.json();
}
