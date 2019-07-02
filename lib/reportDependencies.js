const getDependencies = require("./getDependencies.js");
const generateReport = require("./generateReport.js");
const saveReport = require("./saveReport.js");

function reportDependencies() {
    const dependencies = getDependencies();

    const report = generateReport(dependencies);

    saveReport(report);
}

module.exports = reportDependencies;
