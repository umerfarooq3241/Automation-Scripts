

import supertest from "supertest";
import { expect } from "chai";
import Store from "../../store";
const request = supertest("https://api.haibooks.com/api/v2/");
const TOKEN = Store.token

describe("List Bill", () => {
    it("GET accounts/bill/list/all", () => {

        return request
            .get("accounts/bill/list/all")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });
    });

    it("GET accounts/bill/list/paid", () => {

        return request
            .get("accounts/bill/list/paid")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });
    });

    it("GET accounts/bill/list/unpaid", () => {
        return request
            .get("accounts/bill/list/unpaid")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });
    });

    it("GET accounts/bill/list/partiallypaid", () => {
        return request
            .get("accounts/bill/list/partiallypaid")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });
    });

    it("GET accounts/bill/list/overpaid", () => {
        return request
            .get("accounts/bill/list/overpaid")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });
    });

    it("GET accounts/bill/list/drafts", () => {
        return request
            .get("accounts/bill/list/drafts")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });
    });
});
