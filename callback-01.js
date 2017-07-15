const request = require('request');

request.get({ url: 'http://localhost:3000/users', json: true }, (error, response) => {
    const [firstUser] = response.body;
   
    request.get({url: 'http://localhost:3000/users/' + firstUser + '/age'}, (error, response) => {

        const {userAge} = JSON.parse(response.body);
        console.log('>>> Age of first user is: ' + userAge + ' <<<');
    });
});