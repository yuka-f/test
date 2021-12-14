const express = require('express');
const app = express();

// ---ルーティング----
app.get('/',(req,res) => {
  res.render('top.ejs');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);