
const expect = require('chai').expect,
      _ = require('underscore');

const redis = require('../server/db'),
      Gambler = require('../lib/gambler');

process.env.NODE_ENV = 'test'

describe('A degenerate gambler', function() {
  var tex = new Gambler({ name: 'Tex "Nashville" Williams' });

  after(function() {
    // use whatever number db and flushdb
    // eff it for now..
    redis.flushdb()
  });

  it('exists to gamble', function() {
    expect(Gambler).to.exist;
  });

  it('has a name', function() {
    expect(tex).to.have.property('name')
      .that.is.a('string');
  });

  it('has a chip count', function() {
    expect(tex).to.have.property('chipCount')
      .that.is.a('number');
  });

  it('starts out flat broke', function() {
    expect(tex.chipCount).to.equal(0);
  });

  describe('save', function() {
    it('can be saved for later gambling', function() {
      expect(Gambler).to.respondTo('save');
    });

    it('creates a new gambler', function(done) {
      var jerome = new Gambler({ email: 'jeromec711@hotmail.com', name: 'Jerome Cardan' });

      // this feels unecessary...but it gets the job done
      _.defer(function() {
        Gambler.find(jerome.email, function(err, gambler) {
          expect(gambler).to.deep.equal(jerome);
          done();
        });
      })

      jerome.save(function() { });
    });
  });

  describe('find', function() {
    it('can be found, even if she may not want to be!!', function() {
      expect(Gambler).itself.to.respondTo('find');
    });

    it('may not be found', function(done) {
      Gambler.find('kenny-rogers', function(err, gambler) {
        expect(err).to.be.null;
        expect(gambler).to.be.null;
        done();
      });
    }) 
  });
});

