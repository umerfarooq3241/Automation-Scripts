

import supertest from "supertest";
import { expect } from "chai";
import Store from "../../store";
const request = supertest("https://api.haibooks.com/api/v2/");
const TOKEN = Store.token

describe("List Invoice", () => {
    it("GET accounts/invoice/list/all", () => {

        return request
            .get("accounts/invoice/list/all")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });
    });

    it("GET accounts/invoice/list/paid", () => {

        return request
            .get("accounts/invoice/list/paid")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });
    });

    it("GET accounts/invoice/list/unpaid", () => {
        return request
            .get("accounts/invoice/list/unpaid")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });
    });

    it("GET accounts/invoice/list/partiallypaid", () => {
        return request
            .get("accounts/invoice/list/partiallypaid")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });
    });

    it("GET accounts/invoice/list/overpaid", () => {
        return request
            .get("accounts/invoice/list/overpaid")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });
    });

    it("GET accounts/invoice/list/drafts", () => {
        return request
            .get("accounts/invoice/list/drafts")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });
    });
});
