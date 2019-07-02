const path = require("path");

function getDependencies() {
    const dependencyNames = getDependencyNames();

    return dependencyNames.map(getDependency);
}

function getDependencyNames() {
    const packageJson = require(path.resolve("./package.json"));
    return Object.keys(packageJson.dependencies);
}

function getDependency(dependencyName) {
    const dependencyPackageJsonPath = path.resolve("./node_modules", dependencyName, "package.json");
    return require(dependencyPackageJsonPath);
}

module.exports = getDependencies;
