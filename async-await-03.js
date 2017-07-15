const request = require('request-promise');

(async () => {
    const users = await request.get({url: 'http://localhost:3000/users', json: true});
    const [firstUser] = users;

    const age = await request.get({url: `http://localhost:3000/users/${firstUser}/age`, json: true});
    const {userAge} = age;

    console.log('>>> Age of first user is: ' + userAge + ' <<<');
})();
