const Product = require("../models/Product");
const User = require("../models/User");

describe("Model sanity", () => {
  it("should define Product model", () => {
    expect(Product).toBeDefined();
  });

  it("should define User model", () => {
    expect(User).toBeDefined();
  });
});
