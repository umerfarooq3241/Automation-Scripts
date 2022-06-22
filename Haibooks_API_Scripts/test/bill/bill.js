

import { expect } from "chai";
import supertest from "supertest";
import Store from "../../store";
const request = supertest("https://api.haibooks.com/api/v2/");
const TOKEN = Store.token

describe("Bill Tests", () => {

    // No period given, so should give 400 BAD Request
    it("GET accounts/bill/statistic?period=", () => {
        return request
            .get("accounts/bill/statistic?period=")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(400)
            });
    });

    // Should work okay.
    it("GET /accounts/bill/new", () => {
        return request
            .get("accounts/bill/new")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    // No id given, so should give 400 BAD Request
    it("GET /accounts/bill/filedetails/:id", () => {
        return request
            .get("accounts/bill/filedetails/")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(400)
            });
    });

    // Should work okay.
    it("GET /accounts/bill/details/:id", () => {
        return request
            .get("accounts/bill/details/370756")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    // Should work okay.
    it("GET /accounts/bill/documentcountsbystatus", () => {
        return request
            .get("accounts/bill/documentcountsbystatus")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    // Null id given, so should give 400 BAD Request
    it("GET /accounts/bill/draftmeta?documentId=null", () => {
        return request
            .get("accounts/bill/documentcountsbystatus")
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
    it("POST accounts/bill/", () => {
        const body = {
            "contactId": "137792",
            "issueDate": 1632230880,
            "items": [
              {
                "id": "",
                "unitCost": "20",
                "quantity": "1",
                "chartOfAccountId": "2435197",
                "vatTotal": "4",
                "total": "24",
                "netTotal": "20",
                "vatTaxId": "1",
                "description": "demo",
                "uniqueId": "B753410A-40E6-46FF-9411-999847646391"
              }
            ],
            "filesIds": [],
            "id": "",
            "totalAmount": "24",
            "netTotal": "20",
            "vatTotal": "4",
            "dueDate": 1633008480,
            "currency": "GBP",
            "NOTES":[]
          }
        return request
            .post("accounts/bill/")
            .set({ companyId: Store.companyId })
            .send(body)
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    // Should work properly
    it("POST accounts/bill/asdraft", () => {
        const body = {
            "contactId": "137792",
            "issueDate": 1632230880,
            "items": [
              {
                "id": "",
                "unitCost": "20",
                "quantity": "1",
                "chartOfAccountId": "2435197",
                "vatTotal": "4",
                "total": "24",
                "netTotal": "20",
                "vatTaxId": "1",
                "description": "demo",
                "uniqueId": "B753410A-40E6-46FF-9411-999847646391"
              }
            ],
            "filesIds": [],
            "id": "",
            "totalAmount": "24",
            "netTotal": "20",
            "vatTotal": "4",
            "dueDate": 1633008480,
            "currency": "GBP",
            "NOTES":[]
          }
        return request
            .post("accounts/bill/asdraft")
            .set({ companyId: Store.companyId })
            .send(body)
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    // Should work properly
    it("POST accounts/bill/archive", () => {
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
                    "title": "apitest bill title",
                    "note": "apitest bill note"
                }
            ]
        }
        return request
            .post("accounts/bill/archive")
            .set({ companyId: Store.companyId })
            .send(body)
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    // Should work properly
    it("POST accounts/bill/sendforapprove", () => {
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
                    "title": "apitest bill title",
                    "note": "apitest bill note"
                }
            ]
        }
        return request
            .post("accounts/bill/sendforapprove")
            .set({ companyId: Store.companyId })
            .send(body)
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    // Should work properly
    it("DELETE accounts/bill/delete?documentId=123", () => {
        return request
            .delete("accounts/bill/delete?documentId=123")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

});
