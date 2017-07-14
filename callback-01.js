const request = require('request');

request.get({ url: 'http://localhost:3000/users', json: true }, (error, response, body) => {
    if (error) {
        console.error(error)
    }

    const [firstUser] = body;
   
    request.get({url: 'http://localhost:3000/users/' + firstUser + '/age'}, (error, response, body) => {
        if (error) {
            console.error(error)
        }

        const {age} = body;
        console.log('>>> Age of first user is: ' + age);
    });
});