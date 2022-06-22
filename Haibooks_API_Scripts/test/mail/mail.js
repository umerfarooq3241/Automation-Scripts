

import { expect } from "chai";
import supertest from "supertest";
import Store from "../../store";
const request = supertest("https://api.haibooks.com/api/v2/");
const TOKEN = Store.token

describe("Mail", () => {
    // Should work okay. Return 200 - OK
    it("GET /mail/meta?documentId=453133", () => {
        return request
            .get("/mail/meta?documentId=453133")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    })

    // Should work okay. Return 200 - OK
    it("POST /mail/email", () => {
        const body = {
            "documentId": 188509,
            "address": "ugur.aldanmaz@haibooks.com",
            "addresses": ["ugur.aldanmaz@haibooks.com"],
            "subject": "test-subject",
            "message": "test-message",
            "isCreditNote": true
        }

        return request
            .post("/mail/email")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .send(body)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    })
});
