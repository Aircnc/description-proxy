var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var port = 3000;

app.use(bodyParser());
app.use('/listings/:id', express.static(path.join(__dirname, '../public')));

app.get('/listings/:id/description', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://3.16.13.208/listings/${id}/description`);
});

app.get('/listings/:id/reservations', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://13.57.206.173/listings/${id}/reservations`);
});

app.get('/listings/:id/reviews', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://18.191.158.244/listings/${id}/reviews`);
});

app.get('/listings/:id/listings', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://18.191.158.244/listings/${id}/listings`);
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});