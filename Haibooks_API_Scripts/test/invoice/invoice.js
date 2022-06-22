

import supertest from "supertest";
import { expect } from "chai";
import Store from "../../store";
const request = supertest("https://api.haibooks.com/api/v2/");
const TOKEN = Store.token
describe("Get Statistics", () => {

    // No period given, so should give 400 BAD Request
    it("GET accounts/invoice/statistic?period=", () => {
        return request
            .get("accounts/invoice/statistic?period=")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(400)
            });
    });

    // Should work okay.
    it("GET /accounts/invoice/new", () => {
        return request
            .get("accounts/invoice/new")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    // No id given, so should give 400 BAD Request
    it("GET /accounts/invoice/filedetails/:id", () => {
        return request
            .get("accounts/invoice/filedetails/")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(400)
            });
    });

    // Should work okay.
    it("GET /accounts/invoice/details/:id", () => {
        return request
            .get("accounts/invoice/details/370756")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    // Should work okay.
    it("GET /accounts/invoice/documentcountsbystatus", () => {
        return request
            .get("accounts/invoice/documentcountsbystatus")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    // Null id given, so should give 400 BAD Request
    it("GET /accounts/invoice/draftmeta?documentId=null", () => {
        return request
            .get("accounts/invoice/documentcountsbystatus")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(400)
            });
    });

    // Should work properly
    it("POST /mail/email", () => {
        const body = {
            "DocumentId": "370698",
            "Address": "adrestest",
            "Subject": "subject test",
            "Message": "message test",
            "Addresses": [
                "ozan.cakin@haibooks.com",
                "ozancakin@outlook.com"
            ],
            "IsCreditNote": true
        }
        return request
            .post("mail/email")
            .set({ companyId: Store.companyId })
            .send(body)
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    // Should not ork properly. Query params not valid
    it("GET /mail/meta?documentId=SID&isCreditNote=TRUE", () => {
        return request
            .get("mail/meta?documentId=xxx&isCreditNote=true")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(400)
            });
    });

    // Should not ork properly. Query params not valid
    it("GET /mail/meta?documentId=SID&isCreditNote=TRUE", () => {
        return request
            .get("mail/meta?documentId=xxx&isCreditNote=true")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(400)
            });
    });

    // Should work properly
    it("POST accounts/invoice/", () => {
        const body = {
            "items": [
                {
                    "chartOfAccountId": "3408639",
                    "description": "ozan postman test",
                    "quantity": "1",
                    "unitCost": "12.00",
                    "vatTaxId": "1"
                }
            ],
            "companyId": "45121",
            "contactId": "160434",
            "dueDate": 1629862528,
            "filesIds": ["16036"],
            "issueDate": 1629862528,
            "notes": [

                {
                    "title": "apitest invoice title",
                    "note": "apitest invoice note"
                }
            ]
        }
        return request
            .post("accounts/invoice/")
            .set({ companyId: Store.companyId })
            .send(body)
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    // Should work properly
    it("POST accounts/invoice/asdraft", () => {
        const body = {
            "items": [
                {
                    "chartOfAccountId": "3408639",
                    "description": "ozan postman test",
                    "quantity": "1",
                    "unitCost": "12.00",
                    "vatTaxId": "1"
                }
            ],
            "companyId": "45121",
            "contactId": "160434",
            "dueDate": 1629862528,
            "filesIds": ["16036"],
            "issueDate": 1629862528,
            "notes": [

                {
                    "title": "apitest invoice title",
                    "note": "apitest invoice note"
                }
            ]
        }
        return request
            .post("accounts/invoice/asdraft")
            .set({ companyId: Store.companyId })
            .send(body)
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    // Should work properly
    it("POST accounts/invoice/archive", () => {
        const body = {
            "items": [
                {
                    "chartOfAccountId": "3408639",
                    "description": "ozan postman test",
                    "quantity": "1",
                    "unitCost": "12.00",
                    "vatTaxId": "1"
                }
            ],
            "companyId": "45121",
            "contactId": "160434",
            "dueDate": 1629862528,
            "filesIds": ["16036"],
            "issueDate": 1629862528,
            "notes": [

                {
                    "title": "apitest invoice title",
                    "note": "apitest invoice note"
                }
            ]
        }
        return request
            .post("accounts/invoice/archive")
            .set({ companyId: Store.companyId })
            .send(body)
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    // Should work properly
    it("POST accounts/invoice/sendforapprove", () => {
        const body = {
            "items": [
                {
                    "chartOfAccountId": "3408639",
                    "description": "ozan postman test",
                    "quantity": "1",
                    "unitCost": "12.00",
                    "vatTaxId": "1"
                }
            ],
            "companyId": "45121",
            "contactId": "160434",
            "dueDate": 1629862528,
            "filesIds": ["16036"],
            "issueDate": 1629862528,
            "notes": [

                {
                    "title": "apitest invoice title",
                    "note": "apitest invoice note"
                }
            ]
        }
        return request
            .post("accounts/invoice/sendforapprove")
            .set({ companyId: Store.companyId })
            .send(body)
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    // Should work properly
    it("DELETE accounts/invoice/delete?documentId=123", () => {
        return request
            .delete("accounts/invoice/delete?documentId=123")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

});
