// Generated by CoffeeScript 1.4.0
/*
# Lipsum Command-line Interface

This module provides a CLI wrapper for the main module, allowing it to be
easily used via anyone's login shell.
*/

var ArgumentParser, Lipsum;

Lipsum = require('./lipsum');

ArgumentParser = require('argparse').ArgumentParser;

exports._optparser = new ArgumentParser({
  version: '1.0.0',
  description: 'The CLI for the NodeJS Lorem Ipsum Service'
});

exports._optparser.addArgument(['-s', '--start-with-lipsum'], {
  defaultValue: false,
  action: 'storeTrue',
  dest: 'start',
  help: 'Whether or not the text should start with ' + '"Lorem Ipsum dolor sit amet...".'
});

exports._optparser.addArgument(['-w', '--what'], {
  defaultValue: 'paras',
  type: String,
  choices: ['paras', 'words', 'bytes'],
  help: 'The type of each text structure that will be returned. ' + 'Choose from "paras" (paragraphs), "words", or "bytes"'
});

exports._optparser.addArgument(['-a', '--amount'], {
  defaultValue: 5,
  type: Number,
  help: 'The number of text structures that will be returned. ' + 'Defaults to 5.'
});

exports.run = function(args) {
  var argv;
  if (args == null) {
    args = [];
  }
  /*
    This will run the CLI
  
    args: {Array} The arguments that would be passed to the CLI.
          This is usually something like `process.argv.slice(2)`
  */

  argv = exports._optparser.parseArgs(args);
  return exports._run(argv);
};

exports._run = function(argv) {
  var lipsum;
  lipsum = new Lipsum();
  argv.start = argv.start ? 'yes' : 'no';
  return lipsum.getText(function(text) {
    return console.log(text);
  }, argv);
};
