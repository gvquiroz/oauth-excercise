const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const bcrypt = require('bcrypt');
const passwordUtils = require('../../app/utils/passwordUtils');

chai.use(chaiHttp);

const server = require('../../app/app');

describe("oauth-router", function () {

  describe('auth router test', function () {

    it("should tell if password is strong enough", async function () {
      let res = await chai.request(server)
        .get('/auth/verify')
        .query({password: 'Auth0B00tc@mp'});

      expect(res).to.have.status(200);

      expect(res.body.strong).to.equal(true);
    });

    it("given a password it should give me its hash", async function () {
      let res = await chai.request(server)
        .get('/auth/hash')
        .query({ password: 'Auth0B00tc@mp' });

      expect(res).to.have.status(200);
      expect(bcrypt.compareSync('Auth0B00tc@mp',res.body.hash)).to.equal(true);
    });

    it("given a password and its hash check if they match", async function () {

      let passInit = 'Auth0B00tc@mp';
      let hashInit = passwordUtils.hashPassword(passInit);

      let res = await chai.request(server)
        .get('/auth/validate')
        .query({ password: passInit, hash: hashInit});

      expect(res).to.have.status(200);
      expect(res.body.isPassword).to.equal(true);
    });

    it("should give me a random password");
  });
});