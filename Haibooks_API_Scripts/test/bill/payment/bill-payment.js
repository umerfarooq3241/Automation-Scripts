import { expect } from "chai";
import supertest from "supertest";
import Store from "../../store";
const request = supertest("https://api.haibooks.com/api/v2/");
const TOKEN = Store.token

describe("Bill Payment", () => {
    it("GET accounts/bill/payment/metadata?id=453133", () => {
        return request
            .get("accounts/bill/payment/metadata?id=453133")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    it("GET accounts/bill/payment/metadata?id=abc", () => {
        return request
            .get("accounts/bill/payment/metadata?id=abc")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(403)
            });
    });

    it("GET accounts/bill/creditnote/payment/metadata?id=453133", () => {
        return request
            .get("accounts/bill/creditnote/payment/metadata?id=453133")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    it("GET accounts/bill/creditnote/payment/metadata?id=abc", () => {
        return request
            .get("accounts/bill/creditnote/payment/metadata?id=abc")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(403)
            });
    });

    it("POST accounts/bill/payment", () => {
        const body = {
            "documentId": "370645",
            "date": 1630419122,
            "paymentMethodId": "1",
            "bankAccountId": "3408855",
            "amount": 3,
            "excludedFee": 0,
            "description": "tesssssst",
            "userDescription": "userDescription test"
        }

        return request
            .post("accounts/bill/payment")
            .set({ companyId: Store.companyId })
            .send(body)
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(403)
            });
    });

    /**
     * Description: string is sent as integer
     */
    it("POST accounts/bill/payment", () => {
        const body = {
            "documentId": "123",
            "date": 1630419122,
            "paymentMethodId": "1",
            "bankAccountId": "3408855",
            "amount": 3,
            "excludedFee": 0,
            "description": 123,
            "userDescription": "userDescription test"
        }

        return request
            .post("accounts/bill/payment")
            .set({ companyId: Store.companyId })
            .send(body)
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(500)
            });
    });

    it("DELETE accounts/bill/payment/delete?paymentId=283", () => {
        return request
            .delete("accounts/bill/payment/delete?paymentId=238")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    it("DELETE accounts/bill/payment/delete?paymentId=abc", () => {
        return request
            .delete("accounts/bill/payment/delete?paymentId=abc")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(403)
            });
    });

});
