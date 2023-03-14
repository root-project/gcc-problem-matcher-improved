const path = require('path');
const fs = require('node:fs');
const core = require('@actions/core');

// escapeRegExp :: string => string
// escape all characters with special meanings in regexp
const escapeRegExp = (s) =>
	s.replace(/[/\-^$*+?.()|[\]{}]/g, "\\$&");

// variable :: string => RegExp
// create regex to match ${{ key }}
const variable = (key) =>
	new RegExp("\\${{\\s*?" + key + "\\s*?}}", "g");

// templatePath :: string
const templatePath = path.join(__dirname, "gcc_matcher.jsontemplate");

// matcherPath :: string
const matcherPath = path.join(__dirname, "gcc_matcher.json");

// rootdir :: string
const rootdir = core.getInput('build-directory', {required: false});

// parse :: IO() => IO() => Error | null
const parse = (templatePath) => (matcherPath) => {
	const content = fs.readFileSync(templatePath, 'utf-8');

	const parsed = content.replace(variable("BASE"), escapeRegExp(rootdir));

	fs.writeFileSync(matcherPath, parsed);

	console.log('::add-matcher::' + matcherPath);
}

// main:
try {
	parse(templatePath)(matcherPath);
} catch (err) {
	core.setFailed(`Action failed with error ${err}`)
}


// for testing
exports.escapeRegExp = escapeRegExp
exports.variable = variable;