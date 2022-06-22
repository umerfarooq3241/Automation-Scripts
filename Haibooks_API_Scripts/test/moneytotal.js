

import supertest from "supertest";
import { expect } from "chai";
const request = supertest("https://api.haibooks.com/api/v2/");
import Store from "./store.js";


describe("My Money", () => {
  it("GET /mymoney/moneytotal/allexpenses?search=", () => {

    return request
    .get("mymoney/moneytotal/allexpenses?search=")
    .set({companyId: Store.companyId})
    .set('Authorization', `Bearer ${Store.token}`)
    .then((res) => {
      expect(res.statusCode).to.eq(200)
      // console.log(res.body)
    });

  });

  it("GET /mymoney/moneytotal/expenses", () => {

    return request
    .get("mymoney/moneytotal/expenses")
    .set({companyId: Store.companyId})
    .set('Authorization', `Bearer ${Store.token}`)
    .then((res) => {
      expect(res.statusCode).to.eq(200)
      // console.log(res.body)
    });

  });

  it("GET mymoney/moneytotal/mileages", () => {

    return request
    .get("mymoney/moneytotal/mileages")
    .set({companyId: Store.companyId})
    .set('Authorization', `Bearer ${Store.token}`)
    .then((res) => {
      expect(res.statusCode).to.eq(200)
      // console.log(res.body)
    });

  });

  it("GET /mymoney/moneytotal/invoices", () => {

    return request
    .get("mymoney/moneytotal/invoices")
    .set({companyId: Store.companyId})
    .set('Authorization', `Bearer ${Store.token}`)
    .then((res) => {
      expect(res.statusCode).to.eq(200)
      // console.log(res.body)
    });

  });


  it("GET /mymoney/moneytotal/bills", () => {

    return request
    .get("mymoney/moneytotal/bills")
    .set({companyId: Store.companyId})
    .set('Authorization', `Bearer ${Store.token}`)
    .then((res) => {
      expect(res.statusCode).to.eq(200)
      // console.log(res.body)
    });

  });
  
  it("GET   /mymoney/moneytotal/documentcountsbystatus", () => {

    return request
    .get("mymoney/moneytotal/documentcountsbystatus")
    .set({companyId: Store.companyId})
    .set('Authorization', `Bearer ${Store.token}`)
    .then((res) => {
      expect(res.statusCode).to.eq(200)
      // console.log(res.body)
    });
  
  });

});
