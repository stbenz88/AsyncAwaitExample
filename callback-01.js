const request = require('request');

request.get({url: 'http://localhost:3000/users', json: true}, (error, response) => {
    const [firstUser] = response.body;
   
    // Template literal string interpolation - http://es6-features.org/#StringInterpolation
    request.get({url: `http://localhost:3000/users/${firstUser}/age`, json: true}, (error, response) => {

        const {userAge} = response.body;
        console.log('>>> Age of first user is: ' + userAge + ' <<<');
    });
});