const connectDB = require("../config/db");

describe("DB Config", () => {
  it("should export connectDB function", () => {
    expect(typeof connectDB).toBe("function");
  });
});
