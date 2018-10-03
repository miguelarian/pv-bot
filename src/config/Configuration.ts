
// Basic auth credentials are received as env variables.

let  basicAuthCredentials = {
    user: 'f#ck1Ng',
    password: 'f1gHt3r'
}

if(process.env.NODE_ENV === 'production') {
    basicAuthCredentials = {
        user: process.env.BASIC_USERNAME,
        password: process.env.BASIC_PASSWORD
    }
}

export {
    basicAuthCredentials
}
