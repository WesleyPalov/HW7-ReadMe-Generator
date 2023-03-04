// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
      `;
    } else {
      return ' ';
    }
}

 // Function that returns license in table of contents
 // If there is no license, return an empty string
 function renderLicenseTOC(license) {
  if (license !== 'no license') {
  return `
  * [License](#license)
    `;
  } else {
    return ' ';
  }
 }
// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
  return `
  ## [License](#table-of-contents)
  The application is covered under the following license:
  ${renderLicenseLink(license)}
    `;
  } else {
    return ' ';
  }
 }




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tutorial](#tutorial)
   ${renderLicenseTOC(data.license)}
  * [Tests](#tests)
  * [Questions](#questions)
  * [Email](#email)
  
  ## [Description](#table-of-contents)
  ${data.description}
  ## [Installation](#table-of-contents)
  ${data.installation}
  [GitHub](https://github.com/WesleyPalov/HW7-ReadMe-Generator)

  ## [Usage](#table-of-contents)
  ${data.usage}

  ## [Tutorial](#table-of-contents)
  For more information on how to add screenshots for examples, visit the following website:
  
  [Mark Down Tutorial](https://www.selecthub.com/resources/how-to-take-a-screenshot/#4)
  
  ${renderLicenseSection(data.license)}

  ## [Tests](#table-of-contents)
  ${data.test}
  ## [Questions](#table-of-contents)
  Please contact me using the following link:
  [GitHub](https://github.com/${data.githubUsername})

  ## [Email](#table-of-contents)
  Please contact me via email:
  [Email: ${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
