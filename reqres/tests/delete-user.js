import http from 'k6/http';
import { check } from 'k6';
import { urlBase } from '../helpers/url-base.js';

export const options = {
    vus: 10,
    duration: '10s',
}


export default function () {
    const pathUrl = '/api/users';

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    
    const deleteUser = http.del(`${urlBase()}${pathUrl}/2`, null, params);

    check(deleteUser, {
        'O status deve ser 204': (r) => r.status === 204,
    });

    

    const resBody = deleteUser.body;
    console.log(resBody);
}


