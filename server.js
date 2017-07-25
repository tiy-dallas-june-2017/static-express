const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/youmadeit', function(req, res) {
  res.send('You made it! Congratulations!');
});

app.get('/failinstyle', function(req, res) {
  console.log('you got here');

  setTimeout(function() {
    res.send('You got something but it was slow, so your website stinks.');
  }, 17000);

});

app.listen(51234, function() {
  console.log('Yay I created a web on port 51234.');
});
