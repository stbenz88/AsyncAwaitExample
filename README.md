# Async Await Example
An illustrative example of the async await pattern in JavaScript, compared to Promises and callbacks.

This repository provides three different approaches for solving one particular task, i.e. fetching a set of user and then fetch the age of the first user in the set.

The first one `callback-01.js` solves the task using callback functions.

The second one `promise-01.js` solves the task using promises to make the code more readable by avoiding the callback hell.

The third one `async-await-03.js` solves the task using the async await pattern to make even more readable code

# Preparation

In order to run the code, make sure to have `nodeJS 7.6` (https://nodejs.org/en/) or higher and `Yarn` (https://yarnpkg.com/lang/en/docs/install/) installed.

# Start

* Checkout the repository
* run `yarn`
* start the server by running `node server.js`
* run the script by running `node callback-01.js`, `node promise-02.js` and `node async-await-03.js`