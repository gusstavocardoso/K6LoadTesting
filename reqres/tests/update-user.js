import http from 'k6/http';
import { check } from 'k6';
import { urlBase } from '../helpers/url-base.js';
import { dataUpdateUser } from '../helpers/user.js';

export const options = {
    vus: 10,
    duration: '10s',
}

export default function () {

    const pathUrl = '/api/users';

    const payload = dataUpdateUser();

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const updateUser = http.put(`${urlBase()}${pathUrl}/2`, payload, params);

    check(updateUser, {
        'O status deve ser 200': (r) => r.status === 200,
    });

    const resBody = JSON.parse(updateUser.body)['name'];
    console.log(resBody);
}
