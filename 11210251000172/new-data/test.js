import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 100 },
    { duration: '2m', target: 500 },
    { duration: '1m', target: 0 },
  ],
};

export default function () {
  const res = http.get('http://172.17.0.1:8080/index.php');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'halaman utama muncul': (r) => r.body.includes('Senayan'),
  });

  sleep(1);
}
