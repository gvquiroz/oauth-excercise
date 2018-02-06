const chai = require('chai');
const expect = chai.expect;
const bcrypt = require('bcrypt');

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

      expect(bcrypt.compareSync(randomPassword,hashedPassword)).to.equal(true);
    });
  });
});