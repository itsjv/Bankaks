const should = require("chai").should();
const supertest = require("supertest");
const api = supertest("http://localhost:3000");

describe("Ping", function () {
  it("returns the success message", function (done) {
    api
      .get("/")
      .expect("Content-Type", /json/)
      .end(function (err, res) {
        if (err) return done(err);
        res.body.should.have.property("message").and.to.equal("Server is Up");
        done();
      });
  });
});

describe("Get All Cars", function () {
  it("returns the list of all the cars", function (done) {
    api
      .get("/cars")
      .expect("Content-Type", /json/)
      .end(function (err, res) {
        if (err) return done(err);
        res.body.should.have.property("data").and.be.instanceof(Array);
        done();
      });
  });
});

describe("Get a car by ID", function () {
  it("should return the car with the given ID", function (done) {
    api.get("/cars/JHk290Xj").expect(
      {
        status: "success",
        message: "",
        data: {
          id: "JHk290Xj",
          make: "Ford",
          model: "F-10",
          package: "Base",
          color: "Silver",
          year: "2010",
          category: "Truck",
          mileage: "120123",
        },
      },
      done
    );
  });
});
