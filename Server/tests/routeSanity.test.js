const productRoutes = require("../routes/productRoutes");
const userRoutes = require("../routes/userRoutes");

describe("Route modules", () => {
  it("should load product routes", () => {
    expect(productRoutes).toBeDefined();
  });

  it("should load user routes", () => {
    expect(userRoutes).toBeDefined();
  });
});
