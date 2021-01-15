import chai from "chai";
import request from "supertest";
import api from "../../../../index";  // Express API application 

const expect = chai.expect;
const currentNowplayingmovieId = 553604;
const currentNowplayingmovieTitle = "Honest Thief";
let token;

describe('Nowplaying endpoint',  function (){
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
  
    describe("GET /nowplayingmovies ", () => {
        it("should check token and return the 20 nowplayingmovies", (done) => {
            request(api)
            .get("/api/nowplaying")
            .set("Accept", "application/json")
            .set("Authorization", token)
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.be.a("array");
                expect(res.body.length).to.equal(20);
              done();
            });
          });
        });
        describe("GET /nowplaying/:id", () => {
          describe("when the id is valid", () => {
            it("should return the matching nowplayingmovie", () => {
              return request(api)
                .get(`/api/nowplaying/${currentNowplayingmovieId}`)
                .set("Accept", "application/json")
                .set("Authorization", token)
                .expect("Content-Type", /json/)
                .expect(200)
                .then((res) => {
                  expect(res.body).to.have.property("title", currentNowplayingmovieTitle);
                });
            });
          });
          describe("when the id is invalid", () => {
            it("should return the NOT found message", () => {
              return request(api)
                .get("/api/nowplaying/1234567")
                .set("Accept", "application/json")
                .set("Authorization", token)
                .expect("Content-Type", /json/)
                .expect({
                  message: "Unable to find nowplayingmovie with id: 1234567.",
                  status: 404,
                });
            });
        });
    });  
});