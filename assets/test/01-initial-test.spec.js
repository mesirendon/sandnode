import { expect } from "chai"
import { hi } from "../index"

describe('Index test', () => {
  describe('Greeting', () => {
    it('should say Hello World!', () => {
      expect(hi()).to.equal("Hello World!");
    });
  });
});
