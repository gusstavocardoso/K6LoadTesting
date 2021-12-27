import http from 'k6/http';
import { check } from 'k6';
import { urlBase } from '../helpers/url-base.js';
import { dataCreateUser } from '../helpers/user.js';

export const options = {
    vus: 10,
    duration: '10s',
}

export default function () {

    const pathUrl = '/api/users';

    const payload = dataCreateUser();

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const createUser = http.post(`${urlBase()}${pathUrl}`, payload, params);

    check(createUser, {
        'O status deve ser 201': (r) => r.status === 201,
    });

    const resBody = JSON.parse(createUser.body)['name'];
    console.log(resBody);
}
