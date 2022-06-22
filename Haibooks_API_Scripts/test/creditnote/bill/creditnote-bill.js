

import { expect } from "chai";
import supertest from "supertest";
import Store from "../../store";
const request = supertest("https://api.haibooks.com/api/v2/");
const TOKEN = Store.token

describe("Credit Note Bill", () => {
    // Should work fine - 200 OK
    it("POST accounts/bill/creditnote/add", () => {
        const body = {
            "files": [],
            "notes": [
                {
                    "title": "apitest invoice title",
                    "note": "apitest invoice note"
                }
            ],
            "id": "117824",
            "contactId": "160555",
            "contactName": "NASA",
            "issueDate": 1638713945,
            "emailSent": true,
            "documentStatus": "unpaid",
            "netAmount": "1665.00",
            "vatTotal": "0.00",
            "total": "1665.00",
            "isEditable": true,
            "isArchivable": true,
            "items": [
                {
                    "chartOfAccountId": "3416216",
                    "chartOfAccountName": "Turnover",
                    "description": "purchase postman test ozan",
                    "quantity": "3.0000",
                    "unitCost": "555",
                    "vatRateValue": "0.0000",
                    "netAmount": "1665.00",
                    "totalAmount": "1665.00",
                    "vatTotal": "0.00",
                    "vatTaxId": "1",
                    "vatRateName": "No VAT"
                }
            ],
            "payments": {
                "totalPaid": "0",
                "items": []
            },
            "canDelete": true,
            "customerNotificationStatus": 0
        }
        return request
            .post("accounts/bill/creditnote/add")
            .set({ companyId: Store.companyId })
            .send(body)
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    // id in the request body payload is null .Should not work fine - 400 BAD Request
    it("POST accounts/bill/creditnote/add", () => {
        const body = {
            "files": [],
            "notes": [
                {
                    "title": "apitest invoice title",
                    "note": "apitest invoice note"
                }
            ],
            "id": null,
            "contactId": "160555",
            "contactName": "NASA",
            "issueDate": 1638713945,
            "emailSent": true,
            "documentStatus": "unpaid",
            "netAmount": "1665.00",
            "vatTotal": "0.00",
            "total": "1665.00",
            "isEditable": true,
            "isArchivable": true,
            "items": [
                {
                    "chartOfAccountId": "3416216",
                    "chartOfAccountName": "Turnover",
                    "description": "purchase postman test ozan",
                    "quantity": "3.0000",
                    "unitCost": "555",
                    "vatRateValue": "0.0000",
                    "netAmount": "1665.00",
                    "totalAmount": "1665.00",
                    "vatTotal": "0.00",
                    "vatTaxId": "1",
                    "vatRateName": "No VAT"
                }
            ],
            "payments": {
                "totalPaid": "0",
                "items": []
            },
            "canDelete": true,
            "customerNotificationStatus": 0
        }
        return request
            .post("accounts/bill/creditnote/add")
            .set({ companyId: Store.companyId })
            .send(body)
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(400)
            });
    });

    // Should work fine -  200 - OK
    it("POST accounts/bill/creditnote/update", () => {
        const body = {
            "files": [],
            "notes": [],
            "id": "157529",
            "contactId": "160555",
            "contactName": "test",
            "issueDate": 1638662400,
            "emailSent": true,
            "documentStatus": "unpaid",
            "netAmount": "500.00",
            "vatTotal": "0.00",
            "total": "500.00",
            "isEditable": true,
            "isArchivable": true,
            "items": [
                {
                    "id": "294770",
                    "chartOfAccountId": "3416216",
                    "chartOfAccountName": "Purchases",
                    "description": "purchase postman test ozan",
                    "quantity": "1.0000",
                    "unitCost": "500",
                    "vatRateValue": "0.0000",
                    "netAmount": "500.00",
                    "totalAmount": "500.00",
                    "vatTotal": "0.00",
                    "vatRateId": "1",
                    "vatRateName": "No VAT"
                }
            ],
            "payments": {
                "totalPaid": "0",
                "items": []
            },
            "canDelete": true,
            "customerNotificationStatus": 0
        }

        return request
            .post("accounts/invoice/creditnote/update")
            .set({ companyId: Store.companyId })
            .send(body)
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    })
    
    // Should work fine -  200 - OK
    it("POST accounts/bill/creditnote/addpayment", () => {
        const body = {
            "documentId": "157529",
            "date": 1638800496,
            "paymentMethodId": "1",
            "bankAccountId": "3416279",
            "amount": 20,
            "excludedFee": 0,
            "description": "postman api bill creditnote test",
            "userDescription": "postman api creditnote userDescription test"
          }

        return request
            .post("accounts/bill/creditnote/addpayment")
            .set({ companyId: Store.companyId })
            .send(body)
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    })

    // Should work fine -  200 - OK
    it("GET accounts/bill/creditnote/details/157529", () => {
        return request
            .post("accounts/bill/creditnote/details/157529")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    })


});
