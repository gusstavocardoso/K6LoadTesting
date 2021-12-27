export function dataCreateUser() {

    const createUser = JSON.stringify({
        name: "Joe Satriani",
        job: "Guitarrist",
        age: 65,
        instrument: "Ibanez JS"
    })

    return createUser;
}

export function dataUpdateUser() {

    const updateUser = JSON.stringify({
        name: "Yngwie Malmsteen",
        job: "Guitarrist",
        age: 57,
        instrument: "Fender Stratocaster"
    })
    
    return updateUser;
}

export function registerSucess() {

    const registerUser = JSON.stringify({
        email: "eve.holt@reqres.in",
        password: "pistol"
    })

    return registerUser;
}

export function loginSucess() {

    const loginUser = JSON.stringify({
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    })

    return loginUser;
}




