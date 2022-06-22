

import { expect } from "chai";
import supertest from "supertest";
import Store from "../store";
const request = supertest("https://api.haibooks.com/api/v2/");
const TOKEN = Store.token

describe("Bank", () => {
    // No payment method given, so should give 400 - BAD Request
    it("GET bank/accounts?paymentMethod=", () => {
        return request
            .get("bank/accounts?paymentMethod=")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(400)
            });
    });

    // Valid payment method given, so should return 200 - OK
    it("GET bank/accounts?paymentMethod=1", () => {
        return request
            .get("bank/accounts?paymentMethod=1")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(400)
            });
    });

    // Should return 200 - OK
    it("GET bank/accounts/all", () => {
        return request
            .get("bank/accounts/all")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    // Should return 200 - OK
    it("GET /bank/accounts/balancedetails?bankAccountId=2434568", () => {
        return request
            .get("/bank/accounts/balancedetails?bankAccountId=2434568")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    // No payment method given, so should return 400 - BAD REQUEST
    it("GET /bank/accounts/balancedetails?bankAccountId=", () => {
        return request
            .get("/bank/accounts/balancedetails?bankAccountId=")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });
});
