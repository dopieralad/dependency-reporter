const path = require("path");
const fs = require("fs");

function saveReport(report) {
    const reportDirectory = path.resolve("report");

    if (!fs.existsSync(reportDirectory)) {
        fs.mkdirSync(reportDirectory);
    }

    const reportFile = path.resolve(reportDirectory, "dependency-report");

    fs.writeFileSync(reportFile, report);
}

module.exports = saveReport;
