var fs = require('fs');
var selleck = require('../lib/selleck');

var template = fs.readFileSync('test/templates/blog.html', 'utf8');
var context = require('./contexts/blog').context;
var partials = {
  comment: fs.readFileSync('test/templates/comment.html', 'utf8'),
  addcomment: fs.readFileSync('test/templates/addcomment.html', 'utf8')
};

var rendered = selleck.render(template, context, partials);
console.log(rendered);
