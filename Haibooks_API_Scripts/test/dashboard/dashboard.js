import supertest from "supertest";
import { expect } from "chai";
const request = supertest("https://api.haibooks.com/api/v2/");
import Store from "./store.js";


// GET api to get all the data of dashboard. 200 if data is returned otherwise fail.
describe("Dashboard", () => {
  // it("GET Dashboard Data returend /dashboard", () => {

  //   return request
  //     .get("dashboard")
  //     .set({companyId: '2611181'})
  //     .set('Authorization', `Bearer ${Store.token}`)
  //     .then((res) => {
  //       expect(res.statusCode).to.eq(200)

  //       // console.log(res.body)
  //     });
  // });

// GET api to get all the data of dashboard for this month. 200 if data is returned otherwise fail.

  it("GET Dashboard Data returend for this month /dashboard", () => {
   
    return request
      .get("dashboard/?period=thismonth")
      .set({companyId: Store.companyId})
      .set('Authorization', `Bearer ${Store.token}`)
      .then((res) => {
        expect(res.statusCode).to.eq(200)
   
        // console.log(res.body)
      });
  });



// GET api to get all the data of dashboard for important dates. 200 if data is returned otherwise fail.

  it("GET Dashboard Data returend for Important Dates /dashboard", () => {
   
    return request
      .get("dashboard/importantdates")
      .set({companyId: Store.companyId})
      .set('Authorization', `Bearer ${Store.token}`)
      .then((res) => {
        expect(res.statusCode).to.eq(200)

        // console.log(res.body)
      });
  });

  it("GET Dashboard Data /dashboard", (done) => {
   request.get(`dashboard`).set({companyId: Store.companyId}).set('Authorization', `Bearer ${Store.token}`).end((err, res) => {
     console.log(res.body)
     expect(res.statusCode).to.eq(200)
      done();
    });
    return request

      // .get("dashboard")
      // .set({companyId: '2611181'})
      // .set('Authorization', `Bearer ${Store.token}`)
      // .then((res) => {
      //   // console.log(res)
      //   expect(res.statusCode).to.eq(200)
      //   done()
      //   // console.log(res.body)
      // });
  });
});
