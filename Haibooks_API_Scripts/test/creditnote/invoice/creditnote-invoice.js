

import { expect } from "chai";
import supertest from "supertest";
import Store from "../../store";
const request = supertest("https://api.haibooks.com/api/v2/");
const TOKEN = Store.token

describe("Credit Note Invoice", () => {

    // Should work okay. Return 200 - OK
    it("POST accounts/invoice/creditnote/add", () => {
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
            "documentNumber": "4",
            "documentStatus": "unpaid",
            "netAmount": "123.00",
            "vatTotal": "0.00",
            "total": "123.00",
            "isEditable": true,
            "isArchivable": true,
            "items": [
                {
                    "chartOfAccountId": "3416210",
                    "chartOfAccountName": "Turnover",
                    "description": "item desc test mobile",
                    "quantity": "2.0000",
                    "unitCost": "123",
                    "vatRateValue": "0.0000",
                    "netAmount": "246.00",
                    "totalAmount": "246.00",
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
            .post("accounts/invoice/creditnote/add")
            .set({ companyId: Store.companyId })
            .send(body)
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    })

    // Should work okay. Return 200 - OK
    it("POST accounts/invoice/creditnote/add", () => {
        const body = {
            "documentId": "157526",
            "date": 1638800496,
            "paymentMethodId": "1",
            "bankAccountId": "3416279",
            "amount": 5,
            "excludedFee": 0,
            "description": "postman api creditnote test",
            "userDescription": "postman api creditnote userDescription test"
        }

        return request
            .post("accounts/invoice/creditnote/addpayment")
            .set({ companyId: Store.companyId })
            .send(body)
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    })

    // documentID is null in the request body payload. Should return 400 - BAD REQUEST
    it("POST accounts/invoice/creditnote/addpayment", () => {
        const body = {
            "documentId": null,
            "date": 1638800496,
            "paymentMethodId": "1",
            "bankAccountId": "3416279",
            "amount": 5,
            "excludedFee": 0,
            "description": "postman api creditnote test",
            "userDescription": "postman api creditnote userDescription test"
        }

        return request
            .post("accounts/invoice/creditnote/addpayment")
            .set({ companyId: Store.companyId })
            .send(body)
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(400)
            });
    })

    // Should work fine -  200 - OK
    it("POST accounts/invoice/creditnote/update", () => {
        const body = {
            "id": "157526",
            "files": [],
            "notes": [
                {
                    "note": "apitest invoice note",
                    "title": "apitest invoice title"
                }
            ],
            "contactId": "160555",
            "contactName": "test",
            "issueDate": 1638662400,
            "emailSent": true,
            "documentNumber": "6",
            "documentStatus": "unpaid",
            "netAmount": "320.00",
            "vatTotal": "0.00",
            "total": "320.00",
            "isEditable": true,
            "isArchivable": true,
            "items": [
                {
                    "id": "294767",
                    "chartOfAccountId": "3416210",
                    "chartOfAccountName": "Turnover",
                    "description": "item desc test mobile",
                    "quantity": "1.0000",
                    "unitCost": "320",
                    "vatRateValue": "0.0000",
                    "netAmount": "320.00",
                    "totalAmount": "320.00",
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
});
