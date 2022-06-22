

import supertest from "supertest";
import { expect } from "chai";
const request = supertest("https://api.haibooks.com/api/v2/");
import Store from "./store.js";




describe("My Expense", () => {
  it("GET mymoney/expense/list/all", () => {

    return request
    .get("mymoney/expense/list/all")
    .set({companyId: Store.companyId})
    .set('Authorization', `Bearer ${Store.token}`)
    .then((res) => {
      expect(res.statusCode).to.eq(200)
      // console.log(res.body)
    });

  });


  it("GET mymoney/expense/list/paid", () => {

    return request
    .get("mymoney/expense/list/paid")
    .set({companyId: Store.companyId})
    .set('Authorization', `Bearer ${Store.token}`)
    .then((res) => {
      expect(res.statusCode).to.eq(200)
      // console.log(res.body)
    });

  });

  it("GET mymoney/expense/list/unpaid", () => {

    return request
    .get("mymoney/expense/list/unpaid")
    .set({companyId: Store.companyId})
    .set('Authorization', `Bearer ${Store.token}`)
    .then((res) => {
      expect(res.statusCode).to.eq(200)
      // console.log(res.body)
    });

  });

  it("GET mymoney/expense/list/partiallypaid", () => {

    return request
    .get("mymoney/expense/list/partiallypaid")
    .set({companyId: Store.companyId})
    .set('Authorization', `Bearer ${Store.token}`)
    .then((res) => {
      expect(res.statusCode).to.eq(200)
      // console.log(res.body)
    });

    
  });

  it("GET mymoney/expense/list/overpaid", () => {

    return request
    .get("mymoney/expense/list/overpaid")
    .set({companyId: Store.companyId})
    .set('Authorization', `Bearer ${Store.token}`)
    .then((res) => {
      expect(res.statusCode).to.eq(200)
      // console.log(res.body)
    });

    
  });

  it("GET mymoney/expense/list/drafts", () => {

    return request
    .get("mymoney/expense/list/drafts")
    .set({companyId: Store.companyId})
    .set('Authorization', `Bearer ${Store.token}`)
    .then((res) => {
      expect(res.statusCode).to.eq(200)
      // console.log(res.body)
    });

    
  });

});
