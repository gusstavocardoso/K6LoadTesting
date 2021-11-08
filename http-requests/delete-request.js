import http from 'k6/http';

const url = 'https://httpbin.test.k6.io/delete';

export default function () {
  const params = { headers: { 'X-MyHeader': 'k6test' } };
  http.del(url, null, params);
}
