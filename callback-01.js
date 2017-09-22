const request = require('request');

//Request.get work with callback functions
request.get({url: 'http://localhost:3000/users', json: true}, (error, response) => {
    //Array Destrcuturing
    const [firstUser] = response.body;
   
    // Template literal string interpolation - http://es6-features.org/#StringInterpolation
    request.get({url: `http://localhost:3000/users/${firstUser}/age`, json: true}, (error, response) => {

        //Object Destructuring
        const {userAge} = response.body;
        console.log('>>> Age of first user is: ' + userAge + ' <<<');
    });
});