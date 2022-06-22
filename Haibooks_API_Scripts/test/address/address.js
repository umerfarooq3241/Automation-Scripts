

import { expect } from "chai";
import supertest from "supertest";
import Store from "../store";
const request = supertest("https://api.haibooks.com/api/v2/");
const TOKEN = Store.token

describe("Address", () => {
    // Should work fine - 200 OK Request
    it("GET address/contacts", () => {
        return request
            .get("address/contacts")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    // Should work fine - 200 OK Request
    it("GET address/countries", () => {
        return request
            .get("address/countries")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    // Should work fine - 200 OK Request
    it("GET address/search?search=test", () => {
        return request
            .get("address/search?search=test")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    // Search query param is null. Should not work fine - 400 BAD Request
    it("GET address/search?search=", () => {
        return request
            .get("address/search?search=")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    // Should work fine - 200 OK Request
    it("GET address/searchforitems?search=test", () => {
        return request
            .get("address/search?search=test")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    // Search query param is null. Should not work fine - 400 BAD Request
    it("GET address/searchforitems?search=", () => {
        return request
            .get("address/searchforitems?search=")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    // Should work fine - 200 OK Request
    it("GET address/details?contactId=192871", () => {
        return request
            .get("address/details?contactId=192871")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    // contactId query param is null. Should not work fine - 400 BAD Request
    it("GET address/details?contactId=", () => {
        return request
            .get("address/details?contactId=")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    // Should work fine. 200 OK Request
    it("POST address/contact", () => {
        const body = {
            "id": "192871",
            "companyName": "string",
            "vatNumber": "string",
            "mobile": "string",
            "phone": "string",
            "fax": "string",
            "website": "string",
            "email": "string",
            "createdDate": 0,
            "street": "string",
            "countryId": "string",
            "countyId": "string",
            "countryName": "string",
            "countyName": "string",
            "building": "string",
            "city": "string",
            "postCode": "string",
            "contactPerson": "string"
        }

        return request
            .post("address/contact")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .send(body)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });
});
