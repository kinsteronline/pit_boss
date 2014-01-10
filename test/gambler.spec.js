
const expect = require('chai').expect;

const gambler = require('../lib/gambler');

describe('A degenerate gambler', function() {
  var tex = gambler({ name: 'Tex "Nashville" Williams' });

  it('exists to gamble', function() {
    expect(gambler).to.exist;
  });

  it('has a name', function() {
    expect(tex).to.have.property('name')
      .that.is.a('string');
  });

  it('has a chip count', function() {
    expect(tex).to.have.property('chipCount')
      .that.is.a('number');
  });
});

