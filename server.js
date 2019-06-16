const express = require('express');
const people = require('./people.json');
const app = express();
// ...
app.set('view engine', 'pug');

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));
// ...
app.get('/', (req, res) => {
  res.render('index', {
  title: 'Homepage',
  people: people.profiles
});
});
app.get('/about', (req, res) => {
  res.render('about', {
  title: 'About Us'
});
});
app.get('/skills', (req, res) => {
  res.render('skills', {
  title: 'My skills'
});
});
app.get('/education', (req, res) => {
  res.render('education', {
  title: 'my Education'
});
});
app.get('/experience', (req, res) => {
  res.render('experience', {
  title: 'My Work experience'
});
});
app.get('/work', (req, res) => {
  res.render('work', {
  title: 'My Work'
});
});
app.get('/profile', (req, res) => {
  const person = people.profiles.find(p => p.id === req.query.id);
  res.render('profile', {
    title: `About ${person.firstname} ${person.lastname}`,
    person,
  });
});
app.get('/contact', (req, res) => {
  res.render('contact', {
  title: 'Contact Us'
});
});

const server = app.listen(app.get('port'));
