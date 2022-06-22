class Store {

    static token = null
    static companyId = null

    constructor() {
       
        this.token = null
        this.companyId = null
    }

    static setToken = (token) => {
        console.log("innn")
        console.log(token)
        this.token = token
    }

    static setCompanyID=(id)=>{
        this.companyId = id

        // console.log("from cpmpanyyy",id)
    }
}

export default Store