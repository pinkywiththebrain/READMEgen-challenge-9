//Function that returns info link of chosen license
function renderLicenseLink(license) {
    let licenseLink = ""
    if (license === "MIT") {
        licenseLink = "https://opensource.org/licenses/MIT"
    } else if (license === "APACHE2.0") {
        licenseLink = "https://www.apache.org/licenses/LICENSE-2.0"
    } else if (license === "GPL3.0") {
        licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html"
    } else if (license === "BSD3") {
        licenseLink = "https://opensource.org/licenses/BSD-3-Clause"
    } else {
        return("No license provided")
    }
    return(licenseLink)
};

// Function that creates markdown of README
function generateMarkdown(data) {
  return `![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
  # ${data.title} 

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Contact](#contact)

  ## Description
  ${data.description}
  
  ## Installation Instructions
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License Information Link
  ${renderLicenseLink(data.license)}
  
  ## Contribution
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Contact
  If you have any further questions:\n
  Read through the documentation on <a href=github.com/${data.github}>my github</a>\n
  Or contact me directly at ${data.email}`;
}

module.exports = generateMarkdown;