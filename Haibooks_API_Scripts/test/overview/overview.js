


import { expect } from "chai";
import supertest from "supertest";
import Store from "../store";
const request = supertest("https://api.haibooks.com/api/v2/");
const TOKEN = Store.token

describe("Overview", () => {
    // Should work fine - 200 OK Request
    it("GET settings/company/getoverview", () => {
        return request
            .get("settings/company/getoverview")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    // Should work fine - 200 OK Request
    it("POST settings/company/update", () => {
        const body = {
            "companyName": "Berkul",
            "businessName": "Berkul",
            "businessTypeId": 2,
            "businessSector": 15,
            "region": "England",
            "countryCode": "GB",
            "contactPerson": "cp",
            "telephone": "12321",
            "mobile": "1233",
            "website": "qwe",
            "fax": "12321",
            "postcode": "testcode"
        }

        return request
            .post("settings/company/update")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .send(body)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });
});
