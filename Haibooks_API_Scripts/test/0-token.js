import { expect } from "chai";
import supertest from "supertest";
import Store from "./store";
var session = require('express-session')
const request = supertest("https://api.haibooks.com/api/v2/");
var TOKEN;

describe("Get Token", () => {
  /**
   * Should respond valid request
   */
  it("token", () => {
    const data = {
      username: "umernoip090@gmail.com",
      password: "Umar12345",

    };

    return request
      .post("/token")
      .send(data)
      .then((res) => {
        console.log(res.body.data)
        // expect(stat).to.eq(201);
        expect(res.body.data.token)
        TOKEN = res.body.data.token

        Store.setToken(TOKEN)
        // Store.setCompanyID("nauman")

    
        expect(res.statusCode).to.eq(200)
        // console.log(res.body)
      });
  });


  it("profile/company/last", () => {
    

    return request
      .get("profile/company/last")
      .set('Authorization', `Bearer ${Store.token}`)
      

      .then((res) => {
       
  
        Store.setCompanyID(res.body.data.id)
      });
  });



});

// module.exports = { TOKEN }


