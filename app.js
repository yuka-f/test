const express = require('express');
const e = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

// ---ルーティング----
app.get('/',(req,res) => {
  res.render('top.ejs');
});

app.listen(3000);