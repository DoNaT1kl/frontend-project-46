#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();

program
  .version('0.1.0')
  .description('Compare two configuration files and shows a difference.');

program.parse();