# reversal-learning-task

This app will be used to test reversal learning and extinction in human child participants

## How to use this app
* Make sure you have <a href="https://git-scm.com/download/">git</a>, <a href="https://nodejs.org/en/">Node.js, and npm installed</a>
* Open Terminal on Mac or Linux (or CMD on Windows)
 * Type `git clone https://github.com/nancybee/reversal-learning-task/` Wait for it to finish downloading.
 * Enter the reversal-learning-task folder by typing `cd reversal-learning-task`
* Type `npm install` in the terminal, and wait for the installation to finish
* Type `npm start` in the terminal
* Go to http://localhost:3000

By default, the trial runs 10 times. If you want to change the number of trials, go into app.js and look for `limit: 10` at the top of the file. Replace `10` with the number of trials you want to run.

__After each experiment, the test results will be in reversal-learning-task/results as .txt files__
