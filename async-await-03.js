const request = require('request-promise');

//https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9
(async () => {
    const users = await request.get({url: 'http://localhost:3000/users', json: true});

    const [firstUser] = users;

    const age = await request.get({url: `http://localhost:3000/users/${firstUser}/age`, json: true});
    
    const {userAge} = age;

    console.log('>>> Age of first user is: ' + userAge + ' <<<');
})();
