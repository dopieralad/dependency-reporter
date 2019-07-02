const columns = [
    {
        name: "Component Group",
        formatter: "JavaScript"
    }, {
        name: "Component Name",
        accessor: dependency => dependency.name,
        formatter: name => `{{${name}}}`
    }, {
        name: "Component Version",
        accessor: dependency => dependency.version,
        formatter: version => `{{${version}}}`
    }, {
        name: "Component Type",
        accessor: "JavaScript library"
    }, {
        name: "License",
        accessor: dependency => dependency.license,
        formatter: license => `[${license}|https://opensource.org/licenses/${license}]`
    }, {
        name: "Origin",
        formatter: (ignored, dependency) => `[NPM registry|https://www.npmjs.com/package/${dependency.name}/v/${dependency.version}]`
    }, {
        name: "Binding",
        accessor: "Dynamically linked"
    }, {
        name: "Additional Information",
        accessor: "-"
    }
];

function generateReport(dependencies) {
    const header = generateHeader();

    const rows = generateRows(dependencies);

    return [header, ...rows].join("\n");
}

function generateHeader() {
    const header = columns
        .map(column => column.name)
        .join("||");

    return `||${header}||`;
}

function generateRows(dependencies) {
    return dependencies.map(generateRow);
}

function generateRow(dependency) {
    const row = columns
        .map(column => {
            const value = evaluate(column.accessor, dependency);
            const text = evaluate(column.formatter, value, dependency);
            return text || " ";
        })
        .join("|");

    return `|${row}|`;
}

function evaluate(evaluator, object, parentObject) {
    if (typeof evaluator === "string") {
        return evaluator;
    } else if (typeof evaluator === "function") {
        return evaluator(object, parentObject);
    } else if (typeof evaluator === "undefined") {
        return object;
    } else {
        throw `Unknown evaluator: "${evaluator}"!`;
    }
}

module.exports = generateReport;
