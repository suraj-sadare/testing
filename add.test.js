
const request = require("supertest");
const app = require('./add');
describe("GET / ", () => {
    test("It should respond with an array of students", async () => {
      const response = await request(app).get("/");
      expect(response.body).toEqual(30);
      expect(response.statusCode).toBe(200);
    });
  });