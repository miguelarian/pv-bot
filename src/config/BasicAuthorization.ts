
// Basic auth credentials are received as env variables.
class BasicAuthorization {
    user: string
    password: string
    constructor() {
        const credentials = this.getCredentials()
        this.user = credentials.user
        this.password = credentials.password
    }

    private getCredentials() {
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

        return basicAuthCredentials
    }
}

export default BasicAuthorization
