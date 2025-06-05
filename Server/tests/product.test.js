const request = require("supertest");
const app = require("../server"); // Ensure this exports the Express app and not the listen() call

describe("Health check", () => {
  it("should return 200 OK on /", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("Backend is running");
  });
});
