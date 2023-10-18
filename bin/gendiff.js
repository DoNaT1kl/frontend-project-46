#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command('');

program
  .version('0.1.0')
  .description('Compare two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
program.parse();