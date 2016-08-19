var Parser = require('./lib/parser');

module.exports = {
  parse: function(str, opts) {
    var parser = new Parser(opts);
    return parser.parse(str);
  }
}
