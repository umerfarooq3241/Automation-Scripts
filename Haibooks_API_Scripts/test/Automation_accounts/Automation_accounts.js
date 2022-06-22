import supertest from "supertest";
import { expect } from "chai";
const request = supertest("https://api.haibooks.com/api/v2/");

describe("RESGITSER USER VALID CASE ( ALL STRING UNIQUE EMAIL )", () => {
  it("POST /account/register", () => {
    const data = {
      firstName: "Nauman",
      lastName: "Sheikh",
      email: `test-${Math.floor(Math.random() * 9999)}@mail.ca`,
      phone: "1234567",
      password: "123456",
      confirmPassword: "123456",
    };

    return request
      .post("account/register")
      .send(data)
      .then((res) => {
        // expect(stat).to.eq(201);
        expect(res.body.data)
          .to.be.an.instanceof(Object)
          .that.includes.all.keys(["createdUserId"]);
        expect(res.statusCode).to.eq(200)
        // console.log(res.body)
      });
  });

  // first name should be string
  it("POST FirstName int /account/register", () => {
    const data = {
      firstName: 2,
      lastName: "Sheikh",
      email: `test-${Math.floor(Math.random() * 9999)}@mail.ca`,
      phone: "1234567",
      password: "123456",
      confirmPassword: "123456",
    };

    return request
      .post("account/register")
      .send(data)
      .then((res) => {
        // expect(stat).to.eq(201);
        expect(res.body.data)
          .to.be.an.instanceof(Object)
          .that.not.includes.all.keys(["createdUserId"]);
        expect(res.statusCode).to.not.eq(200)
        // console.log(res.body)
      });
  });

    // last name should be string
    it("POST LastName int /account/register", () => {
      const data = {
        firstName: "Umar",
        lastName: 2,
        email: `test-${Math.floor(Math.random() * 9999)}@mail.ca`,
        phone: "1234567",
        password: "123456",
        confirmPassword: "123456",
      };
  
      return request
        .post("account/register")
        .send(data)
        .then((res) => {
          // expect(stat).to.eq(201);
          expect(res.body.data)
            .to.be.an.instanceof(Object)
            .that.not.includes.all.keys(["createdUserId"]);
          expect(res.statusCode).to.not.eq(200)
          // console.log(res.body)
        });
    });

    // Error Case different password

    it("POST User Already Exists (same email) /account/register", () => {
      const data = {
        firstName: "Umar",
        lastName: "Farooq",
        email: `umars211@gmail.com`,
        phone: "1234567",
        password: "123456",
        confirmPassword: "123456",
      };
  
      return request
        .post("account/register")
        .send(data)
        .then((res) => {
          expect(res.statusCode).to.eq(400)
          expect(res.body.error.errors[0].code).to.eq(110)
       
          // console.log(res.body)
        });
    });

    // Error Case different password
    it("POST Confirm Password is not same /account/register", () => {
      const data = {
        firstName: "Umar",
        lastName: "Farooq",
        email: `test-${Math.floor(Math.random() * 9999)}@mail.ca`,
        phone: "1234567",
        password: "1234567",
        confirmPassword: "12345676",
      };
  
      return request
        .post("account/register")
        .send(data)
        .then((res) => {
          expect(res.statusCode).to.eq(400)
          expect(res.body.error.errors[0].code).to.eq(130)
       
          // console.log(res.body)
        });
    });
});
