const express = require('express');

const userAges = new Map();

userAges.set('Daniela', 50)
    .set('Stefan', 29)
    .set('Andrea', 26)
    .set('Adrian', 33)
    .set('Nadine', 23)
    .set('Oliver', 36)
    .set('Roy', 30);

const app = express();

app.get('/users', (request, response) => {
    const users = Array.from(userAges.keys());

    response.send(users);
})

app.get('/users/:user/age', (request, response) => {
    const {user} = request.params;
    const userAge = userAges.get(user);

    response.send({userAge});
})

app.listen(3000);