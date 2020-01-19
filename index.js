const express = require("express");

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.render("index");
});

app.post('/login', (req, res) => {
  console.log('request:', req.query.firstName + req.query.lastName);
})

app.listen(port, () => console.log(`Zactile listening on port ${port}!`));