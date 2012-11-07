// Generated by CoffeeScript 1.3.3
/*
# Lipsum Command-line Interface
*/

var Lipsum;

Lipsum = require('./lipsum');

exports.run = function(args) {
  var argv;
  if (args == null) {
    args = [];
  }
  exports._optparser = require('optimist');
  argv = exports._optparser.parse(args).usage('Lorem Ipsum Service for nodeJS.\n' + 'Usage: $0 [-s, --start_with_lipsum] ' + '[-w, --what {paras, words, bytes}] ' + '[-a, --amount AMT] ' + '[-h, --help]').options('start_with_lipsum', {
    "default": false,
    alias: 's',
    boolean: true,
    describe: 'Whether or not the text should start with ' + '"Lorem Ipsum dolor sit amet...". Defaults to true.'
  }).options('what', {
    "default": 'paras',
    alias: 'w',
    string: true,
    describe: 'The type of each text structure that will be returned. ' + 'Choose from "paras" (paragraphs), "words", or "bytes"'
  }).options('amount', {
    "default": 5,
    alias: 'a',
    describe: 'The number of text structures that will be returned. ' + 'Defaults to 5.'
  }).check(function(args) {
    var amt_format, is_valid_amt, is_valid_what, what_choices;
    what_choices = /^(paras|words|bytes?)$/g;
    is_valid_what = args.what.search(what_choices) >= 0;
    amt_format = /^([0-9]+?)$/g;
    is_valid_amt = args.amt.search(amt_format);
    return is_valid_what && is_valid_amt;
  });
  if (argv.help) {
    exports._optparser.help();
    return;
  }
  return exports._run(argv);
};

exports._run = function(argv) {
  var lipsum;
  lipsum = new Lipsum();
  argv.start_with_lipsum = argv.start_with_lipsum ? 'yes' : 'no';
  return lipsum.getText(function(text) {
    return console.log(text);
  }, argv);
};