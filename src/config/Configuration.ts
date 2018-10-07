import BasicAuthorization from "./BasicAuthorization"

class Configuration {
    basicAuth: BasicAuthorization
    constructor(basicAuth: BasicAuthorization) {
        this.basicAuth = basicAuth
    }
}

export default Configuration
