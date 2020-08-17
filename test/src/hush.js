const expect = require('chai').expect;
const { readSecret } = require('../../src/hush');

describe('hush', () => {
  describe('readSecret', () => {
    it('should read the secret in a secret file', async () => {
      const secret = readSecret('SECRET_ENV', './test/mocks/');

      expect(secret).to.equal('SECRETENVVALUE\n');
    });
  });
  it('should return null in an empty secret file', async () => {
    const secret = readSecret('EMPTY_SECRET', './test/mocks/');

    expect(secret).to.equal(null);
  });
  it('should return null in an non existing secret file', async () => {
    const secret = readSecret('NON_EXISTING_FILE', './test/mocks/');

    expect(secret).to.equal(null);
  });
});
