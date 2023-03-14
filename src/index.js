const path = require('path');
const fs = require('node:fs');
const core = require('@actions/core');

// escapeRegExp :: string => string
// escape all characters with special meanings in regexp
const escapeRegExp = (s) =>
	s.replace(/[:.*+?^${}()|\/[\]\\]/g, "\\$&");

// variable :: string => RegExp
// create regex to match ${{ key }}
const variable = (key) =>
	new RegExp("\\${{\\s*?" + key + "\\s*?}}", "g");

// templatePath :: string
const templatePath = path.join(__dirname, "gcc_matcher.jsontemplate");

// matcherPath :: string
const matcherPath = path.join(__dirname, "gcc_matcher.json");

// parse :: IO => IO => Error | null
const parse = (templatePath) => (matcherPath) => {
	fs.readFile(templatePath, 'utf-8', (err, content) => {
		if (err) throw err;

		const root = core.getInput('root', { required: false });

		const parsed = content.replace(variable("BASE"), escapeRegExp(root));

		fs.writeFile(matcherPath, parsed, (err) => {
			if (err) throw err;

			console.log('::add-matcher::' + matcherPath);
		});
	});
}

// main:
parse(templatePath)(matcherPath);


// for testing
exports.escapeRegExp = escapeRegExp
exports.variable = variable;