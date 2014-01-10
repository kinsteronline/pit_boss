//
// A degenerate gambler
//
// Still not 100% on this. Considering going back to
// the function Gambler() { ... } tradition.
//
function factory(options) {

  var gambler = {
    name: options.name || 'Anonymous Gambler',
    chipCount: 0.0
  };
 
  return Object.create(gambler);
}
module.exports = factory;

