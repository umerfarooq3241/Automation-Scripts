import { expect } from "chai";
import supertest from "supertest";
const request = supertest("https://api.haibooks.com/api/v2/");
import Store from "./store.js";


describe("Mileage", () => {
    /**
     * Should respond valid request
     */
    it("GET mymoney/list/all?page=1", () => {
        return request
            .get("mymoney/list/all?page=1")
            .set({ companyId: Store.companyId})
            .set('Authorization', `Bearer ${Store.token}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });
    });

    /**
     * Should respond invalid request
     */
    it("GET mymoney/list/all?page=", () => {
        return request
            .get("mymoney/list/all?page=")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${Store.token}`)
            .then((res) => {
                expect(res.statusCode).to.eq(400)
                // console.log(res.body)
            });
    });

    /**
     * Should respond Bad Request - Wrong companyId
     */
    it("GET mymoney", () => {
        return request
            .get("mymoney/list/all?page=")
            .set({ companyId: Store.companyId})
            .set('Authorization', `Bearer ${Store.token}`)
            .then((res) => {
                expect(res.statusCode).to.eq(403)
                // console.log(res.body)
            });
    });

    /**
     * Should respond valid
     */
    it("GET mymoney/list/paid?page=1", () => {
        return request
            .get("mymoney/list/paid?page=1")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${Store.token}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });
    });

    /**
     * Should respond valid
     */
    it("GET mymoney/list/unpaid?page=1", () => {
        return request
            .get("mymoney/list/paid?page=1")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${Store.token}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });
    });

    /**
     * Should respond valid
     */
    it("GET mymoney/list/partiallypaid?page=1", () => {
        return request
            .get("mymoney/list/paid?page=1")
            .set({ companyId: Store.companyId})
            .set('Authorization', `Bearer ${Store.token}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });
    });

    /**
     * Should respond valid
     */
    it("GET mymoney/list/overpaid?page=1", () => {
        return request
            .get("mymoney/list/paid?page=1")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${Store.token}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });
    });

    /**
     * Should respond valid
     */
    it("GET mymoney/list/drafts?page=1", () => {
        return request
            .get("mymoney/list/paid?page=1")
            .set({ companyId:Store.companyId})
            .set('Authorization', `Bearer ${Store.token}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });
    });

    /**
     * Response should contain the data with staff name that contains `umer`
     * It should fail even if there is one element with staff name that doesn't contain umer
     */
    it("GET mymoney/list/search?page=1&pagesize=20&search=umer", () => {
        return request
            .get("mymoney/list/search?page=1&pagesize=20&search=umer")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${Store.token}`)
            .then((res) => {
                let valid = true
                res.body.data.items.map((item) => {
                    if (!item.staff.includes('umer')) {
                        if (!item.staff.includes('Umer')) {
                            valid = false
                        }
                    }
                })
                expect(valid).to.eq(true)
            });
    });

    /**
     * Response should contain the data with staff name that contains `smer`
     * It should fail even if there is one element with staff name that doesn't contain smer
     */
    it("GET mymoney/list/search?page=1&pagesize=20&search=smer", () => {
        return request
            .get("mymoney/list/search?page=1&pagesize=20&search=smer")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${Store.token}`)
            .then((res) => {
                let valid = true
                res.body.data.items.map((item) => {
                    if (!item.staff.includes('umer')) {
                        if (!item.staff.includes('Umer')) {
                            valid = false
                        }

                    }

                })
                expect(valid).to.eq(false)
            });
    });

    /**
     * Should respond valid
     */
    it("GET mymoney/list/search?page=1&pagesize=20&search=", () => {
        return request
            .get("mymoney/list/search?page=1&pagesize=20&search=")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${Store.token}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });
    });

    /**
     * Should give datatype validation error
     */
    it("POST mymoney/expense", () => {
        const data = {
            "items": [
                {
                    "chartOfAccountId": "3416216",
                    "description": "asdasd",
                    "quantity": "12",
                    "unitCost": "123",
                    "vatTaxId": "1"
                }
            ],
            "companyId": "55153",
            "filesIds": [],
            "issueDate": 1638196657,
            "NOTES": [
            ],
            "paidBy": {
                "name": "naz tekin",
                "staffId": "55603"
            }
        }

        return request
            .post("mymoney/list/search?page=1&pagesize=20&search=")
            .set({ companyId: Store.companyId})
            .send(data)
            .set('Authorization', `Bearer ${Store.token}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });
    });
});
