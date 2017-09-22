const request = require('request-promise');

//Promises - http://es6-features.org/#PromiseUsage
request.get({url: 'http://localhost:3000/users', json: true})
    .then(response => {
        const [firstUser] = response;

        return request.get({url: `http://localhost:3000/users/${firstUser}/age`, json: true})
    })
    .then(response => {
        const {userAge} = response;
       
        console.log('>>> Age of first user is: ' + userAge + ' <<<');
    });