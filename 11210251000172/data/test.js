import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 900 },  // Naik ke 50 pengguna dalam 30 detik
    { duration: '1m', target: 1000 },  // Bertahan di 100 pengguna selama 1 menit
    { duration: '0s', target: 0 },   // Turun kembali ke 0
  ],
  thresholds: {
    http_req_failed: ['rate<0.05'],   // Tes gagal jika error lebih dari 5%
  },
};

export default function () {
  // Pastikan alamat IP dan Port sesuai dengan Load Balancer (8181)
  const url = 'http://localhost:8181/';
  
  const res = http.get(url);

  check(res, {
    'status is 200': (r) => r.status === 200,
    'body contains SLiMS': (r) => r.body.includes('SLiMS'),
  });

  sleep(1);
}
