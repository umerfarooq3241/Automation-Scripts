import { expect } from "chai";
import supertest from "supertest";
const request = supertest("https://api.haibooks.com/api/v2/");
import Store from "./store.js";


describe("Report", () => {
    /**
     * Should respond valid request
     */
    it("GET reports/profitandloss?from=2020-01-01&to=2020-12-31", () => {
        return request
            .get("reports/profitandloss?from=2020-01-01&to=2020-12-31")
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
    it("GET reports/profitandloss?from=2020-01-01&to=abc", () => {
        return request
            .get("reports/profitandloss?from=2020-01-01&to=abc")
            .set({ companyId:Store.companyId })
            .set('Authorization', `Bearer ${Store.token}`)
            .then((res) => {
                expect(res.statusCode).to.eq(400)
                // console.log(res.body)
            });
    });

    /**
     * Should respond valid request
     */
    it("GET reports/profitandlossmonthlystatistic?period=thismonth", () => {
        return request
            .get("reports/profitandlossmonthlystatistic?period=thismonth")
            .set({ companyId:Store.companyId})
            .set('Authorization', `Bearer ${Store.token}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });
    });

    /**
     * Should respond invalid request
     */
    it("GET reports/profitandlossmonthlystatistic?period=thismog", () => {
        return request
            .get("reports/profitandlossmonthlystatistic?period=thismog")
            .set({ companyId:Store.companyId })
            .set('Authorization', `Bearer ${Store.token}`)
            .then((res) => {
                expect(res.statusCode).to.eq(400)
                // console.log(res.body)
            });
    });

    /**
     * Should respond invalid request
     */
    it("GET reports/managementprofitandloss?date=2020-04-01&compareToPrevious=3&numberOfPreviousPeriod=", () => {
        return request
            .get("reports/managementprofitandloss?date=2020-04-01&compareToPrevious=3&numberOfPreviousPeriod=")
            .set({ companyId: Store.companyId })
            .set('Authorization', `Bearer ${Store.token}`)
            .then((res) => {
                expect(res.statusCode).to.eq(400)
                // console.log(res.body)
            });
    });
});
