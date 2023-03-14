const path = require('path');
const fs = require('node:fs');
//const core = require('@actions/core');

// C:\Users\ => C\:\\Users\\
const escapeRegExp = (s) =>
	s.replace(/[:.*+?^${}()|\/[\]\\]/g, "\\$&");


// ${{ key }}, ${{var}}, ${{ aggqq43g3qg4 }}
const variable = (key) =>
	new RegExp("\\${{\\s*?" + key + "\\s*?}}", "g");


// default value set in /action.yml
// const root = core.getInput('root', { required: false });
root = '/tmp/workspace';

const templatePath = path.join(__dirname, "gcc_matcher.jsontemplate");

const parsed = 
	fs.readFileSync(templatePath, "ascii")
		.replace(variable("BASE"), escapeRegExp(root));

const matcherPath = path.join(__dirname, "gcc_matcher.json");

fs.writeFileSync(matcherPath, parsed);

console.log('::add-matcher::' + matcherPath);

/* for testing */ 
exports.escapeRegExp = escapeRegExp
exports.variable = variable;