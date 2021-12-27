import http from 'k6/http';
import { check } from 'k6';
import { urlBase } from '../helpers/url-base.js';

export const options = {
    vus: 10,
    duration: '30s',
}

export default function () {
    const listUsers = http.get(`${urlBase()}/api/users?page=1`);

    check(listUsers, {
        'O status deve ser 200': (r) => r.status === 200,
    });
}
