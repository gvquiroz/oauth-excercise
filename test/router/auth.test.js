const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

const server = require('../../app/app');

describe("oauth-excercise", function () {

  describe('auth router test', function () {

    it("should tell if password is strong enough", function (done) {
      chai.request(server)
        .get('/auth/verify')
        .query({password: 'Auth0B00tc@mp'})
        .end((err, res) => {
          expect(err).to.be.a('null');
          expect(res).to.have.status(200);

          expect(res.body.strong).to.equal(true);
          done();
        });
    });

    it("given a password it should give me its hash");

    it("given a password and its hash check if they match");

    it("should give me a random password");
  });
});