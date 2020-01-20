const express = require("express");

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.render("index");
});

app.post('/submit', (req, res) => {
  console.log('title:', req.query.title);
  console.log('subtitle:', req.query.description);
  console.log('President:', req.query.President);
  console.log('vicePresident:', req.query.vicePresident);
  console.log('Secretary:', req.query.Secretary);
  console.log('Treasurer:', req.query.Treasurer);
})

app.listen(port, () => console.log(`Zactile listening on port ${port}!`));