const express = require('express');
const app = express();

// Map datastructure -https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Map
const userAges = new Map();
userAges.set('Daniela', 50)
    .set('Stefan', 29)
    .set('Andrea', 26)
    .set('Adrian', 33)
    .set('Nadine', 23)
    .set('Oliver', 36)
    .set('Roy', 30);

app.get('/users', (request, response) => {
    //New Map datastructure - https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    const users = Array.from(userAges.keys());

    response.send(users);
});

app.get('/users/:user/age', (request, response) => {
    //Destructuring assignment - http://es6-features.org/#ObjectMatchingShorthandNotation
    const {user} = request.params;

    const userAge = userAges.get(user);

    response.send({userAge});
});

app.listen(3000);