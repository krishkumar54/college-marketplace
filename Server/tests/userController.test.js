const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../server");
const User = require("../models/User");

const MONGO_URI = process.env.MONGO_URI || "your-fallback-mongo-uri";

const testUser = {
  fullName: "Test User",
  email: "login@example.com",
  password: "test1234",
  phoneNo: "1234567890",
  address: "Test Street",
  city: "Test City",
  state: "Test State",
  zipCode: "123456",
  collegeId: "TEST123",
  college: "Test University",
};

beforeAll(async () => {
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await User.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("User Controller", () => {
  it("should register a new user", async () => {
    const res = await request(app)
      .post("/api/users/register")
      .send(testUser);

    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("User registered successfully");
  }, 10000);

  it("should not register user with existing email", async () => {
    const res = await request(app)
      .post("/api/users/register")
      .send(testUser);

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Email already exists");
  }, 10000);

  it("should login a registered user", async () => {
    const res = await request(app)
      .post("/api/users/login")
      .send({
        email: testUser.email,
        password: testUser.password,
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
    expect(res.body.user.email).toBe(testUser.email);
  }, 10000);
});
