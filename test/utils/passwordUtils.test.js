const chakram = require('chakram'),
      expect = chakram.expect;

const md5 = require('md5');

const passwordUtils = require('../../app/utils/passwordUtils')

describe("oauth-excercise", function () {

  describe('password-utils', function () {
    it("it should return a hashed password", function () {

      randomPassword = "a strong password"
      hashedPassword = passwordUtils.hashPassword(randomPassword)

      expect(md5(randomPassword)).to.equal(hashedPassword);
    });
  });
});