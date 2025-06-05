const productController = require("../controllers/productController");
const userController = require("../controllers/userController");

describe("Controller exports", () => {
  it("should export getAllProducts", () => {
    expect(typeof productController.getAllProducts).toBe("function");
  });

  it("should export registerUser", () => {
    expect(typeof userController.registerUser).toBe("function");
  });
});
