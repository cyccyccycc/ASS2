import chai from "chai";
import request from "supertest";
import api from "../../../../index";  // Express API application 

const expect = chai.expect;
const currentMovieId = 464052;
const currentMovieTitle = "Wonder Woman 1984";
let token;

describe('Movies endpoint',  function (){
    this.timeout(5000)
    before((done)=>{
        setTimeout(()=>{
           done();
        },4500)
    })
    before( (done)=>{
        request(api)
        .post("/api/users")
        .send({
          "username":"user1",
          "password":"test1"
        })
        .end((err,res)=>{
          token = res.body.token;
          console.log(token);
          done()
        });
      });
  
    describe("GET /movies ", () => {
      describe("when the token is valid", () => {
        it("should check token and return the 20 movies", (done) => {
          request(api)
          .get("/api/movies")
          .set("Accept", "application/json")
          .set("Authorization", token)
          .expect("Content-Type", /json/)
          .expect(201)
          .end((err, res) => {
              expect(res.body).to.be.a("array");
              expect(res.body.length).to.equal(20);
            done();
          });
        });
      });
      describe("when the token is invalid", () => {
        it("should return 401 and Unauthorized", (done) => {
           request(api)
          .get("/api/movies")
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .end((err, res)=>{
            expect(res.status).to.equal(401);
            done();
          });

            });
          });
        });
        describe("GET /movies/:id", () => {
          describe("when the id is valid", () => {
            it("should return the matching movie", () => {
              return request(api)
                .get(`/api/movies/${currentMovieId}`)
                .set("Accept", "application/json")
                .set("Authorization", token)
                .expect("Content-Type", /json/)
                .expect(200)
                .then((res) => {
                  expect(res.body).to.have.property("title", currentMovieTitle);
                });
            });
          });
          describe("when the id is invalid", () => {
            it("should return the NOT found message", () => {
              return request(api)
                .get("/api/movies/999")
                .set("Accept", "application/json")
                .set("Authorization", token)
                .expect("Content-Type", /json/)
                .expect({
                  message: "Unable to find movie with id: 999.",
                  status: 404,
                });
            });
        });
    });  
    describe("Delete /movies/:id",()=>{
      describe("when the movie's id invild",()=>{
        it("should return 200 and delete successfully",()=>{
            return request(api)
              .delete(`/api/movies/${currentMovieId}`)
              .set("Accept", "application/json")
              .set("Authorization", token)
              .expect(200)
              .expect('delete successfully');
          });
          it("should should show that movie do not exist in database",() => {
            return request(api)
              .get(`/api/movies/${currentMovieId}`)
              .set("Authorization", token)
              .expect(404)
              .expect({
                message: `Unable to find movie with id: ${currentMovieId}.`,
                status: 404,
          });
        });
      });
      describe("when the movie's id invild",()=>{
        it("should return the message the id is invild and can not be found",()=>{
          return request(api)
            .delete(`/api/movies/9999999999`)
            .set("Accept", "application/json")
            .set("Authorization", token)
            .expect("can't find the moive wanted to delete");
        });
    });
  });
});