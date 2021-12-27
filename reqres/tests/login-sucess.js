import http from 'k6/http';
import { check } from 'k6';
import { urlBase } from '../helpers/url-base.js';
import { loginSucess } from '../helpers/user.js';

export const options = {
    vus: 10,
    duration: '10s',
}

export default function () {

    const pathUrl = '/api/register';

    const payload = loginSucess();

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const loginUser = http.post(`${urlBase()}${pathUrl}`, payload, params);

    check(loginUser, {
        'O status deve ser 200': (r) => r.status === 200,
    });

    const resBody = loginUser.body;
    console.log(resBody);
}



