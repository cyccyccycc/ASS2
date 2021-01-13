import chai from "chai";
import request from "supertest";
import api from "../../../../index";  // Express API application 

const expect = chai.expect;
const currentActorId = 1253360;
const currentActorName = "Pedro Pascal";
let token;

describe('Actors endpoint',  function (){
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
  
    describe("GET /actors ", () => {
        it("should check token and return the 20 actors", (done) => {
            request(api)
            .get("/api/actor")
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
        describe("GET /actors/:id", () => {
          describe("when the id is valid", () => {
            it("should return the matching actor", () => {
              return request(api)
                .get(`/api/actor/${currentActorId}`)
                .set("Accept", "application/json")
                .set("Authorization", token)
                .expect("Content-Type", /json/)
                .expect(200)
                .then((res) => {
                  expect(res.body).to.have.property("name", currentActorName);
                });
            });
          });
    });  
});