const express = require('express');
const app = express();




app.listen(3010, () => {
    console.log("SERVER listen at http://localhost:3010");
});

app.get('/hello', (req, res) => {
    res.send("<h1>Hello Express JS!</h1>")
});

app.get('/user', (req, res) => {
    const firstname = req.query.firstname || "Pritesh";
    const lastname = req.query.lastname || "Patel";

    res.send({
        "firstname": firstname,
        "lastname": lastname
    });
})

app.post('/user/:firstname/:lastname', (req, res) => {
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;

    res.send({
        "firstname": firstname,
        "lastname": lastname
    });
})