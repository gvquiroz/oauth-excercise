const chai = require('chai');
const expect = chai.expect;
const md5 = require('md5');

const passwordUtils = require('../../app/utils/passwordUtils');

describe("oauth-utils", function () {

  describe('password-utils', function () {
    it("it should return a password strength analysis", function() {

      let password = "Auth0B00tc@mp";
      let analysis = passwordUtils.verifyPassword(password);

      expect(analysis.strong).to.equal(true);
    });

    it("it should return a hashed password", function () {

      let randomPassword = "a strong password";
      let hashedPassword = passwordUtils.hashPassword(randomPassword);

      expect(md5(randomPassword)).to.equal(hashedPassword);
    });
  });
});