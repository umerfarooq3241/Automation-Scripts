import supertest from "supertest";
import { expect } from "chai";
const request = supertest("https://api.haibooks.com/api/v2/");
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ik5SaElhclpQWGh3aTJOOU5FRmRNZDlQZ2F5Y1EzUTVEIiwibmFtZWlkIjoibGwyWTJsVmttUlE9IiwibmJmIjoxNjUwMzUxOTg2LCJleHAiOjE2NTAzNTU1ODYsImlhdCI6MTY1MDM1MTk4Nn0.8RvUbUPiQbvnZHWp-8lpG4Mi5WXs1p9mZMEs0rxTAcE";

describe("Change Password", () => {
  // Happy flow getting 200 response code with empty response body

  it("POST Password Changed /profile/", () => {
    const data = {
      OldPassword: "Umar123456",
      NewPassword: "Umar12345",
    };
    return request
      .post("profile/changepassword")
      .set("Authorization", `Bearer ${TOKEN}`)
      .send(data)
      .then((res) => {
        // expect(res.body.data.success).to.eq(true)
        // expect(res.statusCode).to.eq(200)
        console.log(res.body);
        console.log(res.statusCode);
        expect(res.statusCode).to.eq(200);
        // expect(res.body.error.errors[0].code).to.eq(105)
      });
  });

  // when current and new password are same

  it("POST Old and New password are identical /profile/changepassword", () => {
    const data = {
      OldPassword: "Umar123456",
      NewPassword: "Umar123456",
    };
    return request
      .post("profile/changepassword")
      .set("Authorization", `Bearer ${TOKEN}`)
      .send(data)
      .then((res) => {
        // expect(res.body.data.success).to.eq(true)
        // expect(res.statusCode).to.eq(200)
        expect(res.statusCode).to.eq(400);
        expect(res.body.error.errors[0].code).to.eq(105);
      });
  });

  // when current password is incorrect

  it("POST Current password is incorrect /profile/changepassword", () => {
    const data = {
      OldPassword: "Umar1234",
      NewPassword: "Umar12345",
    };

    return request
      .post("profile/changepassword")
      .set("Authorization", `Bearer ${TOKEN}`)
      .send(data)
      .then((res) => {
        // expect(res.body.data.success).to.eq(true)
        // expect(res.statusCode).to.eq(200)
        expect(res.statusCode).to.eq(400);
        expect(res.body.error.errors[0].code).to.eq(130);
      });
  });

  // when both fields are empty

  it("POST Both fields empty /profile/changepassword", () => {
    const data = {
      OldPassword: "",
      NewPassword: "",
    };

    return request
      .post("profile/changepassword")
      .set('Authorization', `Bearer ${TOKEN}`)
      .send(data)
      .then((res) => {
        // expect(res.body.data.success).to.eq(true)
        // expect(res.statusCode).to.eq(200)
        expect(res.statusCode).to.eq(400)
        expect(res.body.error.errors[0].code).to.eq(105)
      });
  });

// the new password is empty. The error is handled but the error message doesnt explains the error accurately. "Please enter New password"
  it("New Password entered is Empty /profile/changepassword", () => {
    const data = {
      OldPassword: "Umar",
      NewPassword: "",
    };

    return request
      .post("profile/changepassword")
      .set('Authorization', `Bearer ${TOKEN}`)
      .send(data)
      .then((res) => {
        // expect(res.body.data.success).to.eq(true)
        // expect(res.statusCode).to.eq(200)
        expect(res.statusCode).to.eq(400)
        expect(res.body.error.errors[0].code).to.eq(131)
      });
  });

  // Old password is empty. The error is handled but the error message doesnt explains the error accurately. "Please enter Old password"
  it("POST Old Password entered is Empty  /profile/changepassword", () => {
    const data = {
      OldPassword: "",
      NewPassword: "Umar",
    };

    return request
      .post("profile/changepassword")
      .set('Authorization', `Bearer ${TOKEN}`)
      .send(data)
      .then((res) => {
        // expect(res.body.data.success).to.eq(true)
        // expect(res.statusCode).to.eq(200)
        expect(res.statusCode).to.eq(400)
        expect(res.body.error.errors[0].code).to.eq(131)
      });
  });

 
    // Only Char is entered in New Password but the error code returned is same as for empty fileds. Status code 131"
    // status message should be clear and status code should be change
    it("POST New Password entered is char /profile/changepassword", () => {
      const data = {
        OldPassword: "Umar12345",
        NewPassword: "umar",
      };
  
      return request
        .post("profile/changepassword")
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(data)
        .then((res) => {
          // expect(res.body.data.success).to.eq(true)
          // expect(res.statusCode).to.eq(200)
          expect(res.statusCode).to.eq(400)
          expect(res.body.error.errors[0].code).to.eq(131)
        });
    });

        // Only Number is entered in New Password but the error code returned is same as for empty fileds. Status code 131"
    // status message should be clear and status code should be change
    it("POST When New password entered is number /profile/changepassword", () => {
      const data = {
        OldPassword: "Umar12345",
        NewPassword: "123",
      };
  
      return request
        .post("profile/changepassword")
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(data)
        .then((res) => {
          // expect(res.body.data.success).to.eq(true)
          // expect(res.statusCode).to.eq(200)
          expect(res.statusCode).to.eq(400)
          expect(res.body.error.errors[0].code).to.eq(131)
        });
    });

            // Password entered in small cases and its accepted. 200 status code is returned
    it("POST new passwrod enter in small case /profile/changepassword", () => {
      const data = {
        OldPassword: "Umar123456",
        NewPassword: "umar12345",
      };
  
      return request
        .post("profile/changepassword")
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(data)
        .then((res) => {
      
          expect(res.statusCode).to.eq(200)
         
        });
    });
    
});
