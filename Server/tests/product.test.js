const request = require("supertest");
const app = require("../server");

describe("Health check", () => {
  it("should return 200 OK on /", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("Backend is running");


  });
});
