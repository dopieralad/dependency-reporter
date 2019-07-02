# Dependency reporter &middot; [![LICENSE](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/dopieralad/dependency-reporter/blob/master/LICENSE) [![NPM](https://img.shields.io/npm/v/dependency-reporter.svg?style=flat)](https://www.npmjs.com/package/dependency-reporter)
                
Dependency reporter is a lightweight reporting tool for your NPM-based projects.
        
## Installation
        
Dependency reporter can be installed in two ways:
  1. Locally in a project (recommended):  
     `npm install --save-dev dependency-reporter`  
     or  
     `yarn add --dev dependency-reporter`
  2. Globally:  
     `npm install --global dependency-reporter`  
     or  
     `yarn global add dependency-reporter`

## Usage

To use dependency reporter you should navigate to any directory containing
an NPM-based project. This assumes `package.json` and `node_modules` exist.

To generate a dependency report you should run one of the following commands:
  1. `yarn dependency-reporter` for local installation,
  2. `dependency-reporter` for global installation.
  
After the reporter finishes its work you can find the report in
`./report/dependency-report`.

## Caveats

Currently, dependency reporter is only capable of working inside of an NPM-based
project and produces one format of the report -  the [Confluence Wiki format](https://confluence.atlassian.com/doc/confluence-wiki-markup-251003035.html).

Also, the reporter assumes all packages come from the main NPM registry. There's
no support for self-hosted repositories yet.

All license links lead to the [Open Source Initiative](https://opensource.org)
definitions and there's no way of configuring it at the moment.

## Future
  1. Add more formats:
     - Markdown
     - JSON
     - ...
  2. Add configuration options:
     - Custom `package.json` location
     - Custom `node_modules` location
     - Dependency overriding
     - License warnings and errors
  3. Support for self-hosted repositories
  4. ...
