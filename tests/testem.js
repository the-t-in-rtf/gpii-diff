// A testem configuration file in which complete coverage is the expected result.
/* eslint-env node */
"use strict";
var fluid = require("infusion");
var gpii  = fluid.registerNamespace("gpii");

fluid.require("%gpii-testem");

require("./js/lib/harness");

var testemComponent = gpii.testem({
    sourceDirs:  ["src"],
    serveDirs:   ["src"],
    testPages:   [
        "tests/static/tests-arraysEqual.html",
        "tests/static/tests-calculateTightness.html",
        "tests/static/tests-combineDiff.html",
        "tests/static/tests-compare.html",
        "tests/static/tests-compareArrays.html",
        "tests/static/tests-compareMarkdown.html",
        "tests/static/tests-compareObjects.html",
        "tests/static/tests-compareStrings.html",
        "tests/static/tests-equals.html",
        "tests/static/tests-extractSegments.html",
        "tests/static/tests-hasChanged.html",
        "tests/static/tests-longestCommonSequence.html",
        "tests/static/tests-longestCommonSequences.html",
        "tests/static/tests-objectsEqual.html",
        "tests/static/tests-singleValueDiff.html",
        "tests/static/tests-sort.html",
        "tests/static/tests-templates-browser.html",
        "tests/static/tests-timeouts.html"
    ],
    instrumentSource: true,
    generateCoverageReport: false, // We will need to generate this ourselves once the entire run is finished...
    coveragePort: 7015,
    coverageDir: "%gpii-diff/coverage",
    components: {
        coverageExpressInstance: {
            type: "gpii.tests.diff.harness"
        }
    }
});

module.exports = testemComponent.getTestemOptions();
