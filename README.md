# Special-SVG-Logos

## Table Of Contents
  - [Installation](#installation)
  - [Description](#description)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Video](#video)
  - [Questions](#questions)
  - [Mock-Up](#Mock-Up)
## Installation
Steps to Install

Download or clone the repository to your local machine.
Navigate to the directory where you've saved "SVG Logo Generator."
Run 'npm install' to install the required dependencies, including Jest.


## Description
In this project, we were asked to build an SVG Logo Maker where a user answers a series of questions that will then render in the file that is auto generated by this app. The main task is to create a command-line application that dynamically generates a logo file in SVG format from a user’s input using the Inquirer package. In my application, the auto generated logo/SVG file will be created in the root directory.

It's installed with the latest Jest library to test the JavaScript by running npm install –save-dev jest. The shapes.spec.js file imports the shape classes from the shapes.js module and defines the test suite for the shape class. The test checks if each shape object can be displayed correctly by calling the render method and comparing the result to an expected SVG string.

## Usage
To use the application, the steps are:
Clone the Repo
Install the latest jest, and inquirer.
Run node index.js in your terminal
Answer all 4 questions
The logo.svg file will be generated

## Tests
Navigate to the application's directory in a terminal or command prompt.

Run 'npm test' to execute the test suite through Jest. Jest is configured to automatically find and run tests located in the project's test directories or files following naming conventions like *.test.js. The test results will be displayed in the terminal, indicating whether the tests passed or failed, along with any error messages for failures.

## Video
https://drive.google.com/file/d/1DXFwoPekBoC3xV4Aa9lSeIR-r4cE0AV3/view

## User Story
```
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```


## Mock-Up

![Image showing a green circle with white text that reads "SVG.".](./Demo%20image/10-oop-homework-demo.png)




## License
MIT License

Copyright (c) 2024 David Truong

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Questions
If you have any questions, you can reach me on GitHub: https://github.com/Davidtruong02
For additional questions, contact me via email: davidtruong134@gmail.com
