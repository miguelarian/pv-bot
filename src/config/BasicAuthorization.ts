/*
 *Basic auth credentials are received as env variables.
 *Default credentias for non-production environments.
 */
const BASIC_USERNAME = 'f#ck1Ng'
const BASIC_PASSWORD = 'f1gHt3r'
class BasicAuthorization {
    user: string
    password: string
    constructor() {
        const credentials = this.getCredentials()
        this.user = credentials.user
        this.password = credentials.password
    }
    private getCredentials() {
        let basicAuthCredentials = {
            user: BASIC_USERNAME,
            password: BASIC_PASSWORD,
        }
        if (process.env.NODE_ENV.trim() == 'production') {
            basicAuthCredentials = {
                user: process.env.BASIC_USERNAME,
                password: process.env.BASIC_PASSWORD,
            }
        }

        return basicAuthCredentials
    }
}

export default BasicAuthorization
