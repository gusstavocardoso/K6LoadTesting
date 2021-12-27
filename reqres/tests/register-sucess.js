import http from 'k6/http';
import { check } from 'k6';
import { urlBase } from '../helpers/url-base.js';
import { registerSucess } from '../helpers/user.js';

export const options = {
    vus: 10,
    duration: '10s',
}

export default function () {

    const pathUrl = '/api/register';

    const payload = registerSucess();

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const registerUser = http.post(`${urlBase()}${pathUrl}`, payload, params);

    check(registerUser, {
        'O status deve ser 200': (r) => r.status === 200,
    });

    const resBody = registerUser.body;
    console.log(resBody);
}
