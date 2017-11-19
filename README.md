# reversal-learning-task

This app will be used to test reversal learning and extinction in human child participants

## How to use this app
* Make sure you have <a href="https://git-scm.com/download/">git</a>, <a href="https://nodejs.org/en/">Node.js, and npm installed</a>
* Open Terminal on Mac or Linux (or CMD on Windows)
* Type `cd Desktop` in the Terminal to go into your Desktop (may differ on Windows)
 * Type `git clone https://github.com/nancybee/reversal-learning-task/` Wait for it to finish downloading.
 * After it finishes downloading, you will have a folder called reversal-learning-task on your Desktop
 * Enter the reversal-learning-task folder by typing `cd reversal-learning-task` in Terminal
* Type `npm install` in the terminal, and wait for the installation to finish
* Type `npm start` in the terminal
* Go to http://localhost:3000

The experiment is set to run for 10 trials. To change this number, go to the `js` folder and find `trial.js`. Line 27 of that file is the number of trials.

__After each experiment, the test results will be in the `/results` folder as .txt files__
