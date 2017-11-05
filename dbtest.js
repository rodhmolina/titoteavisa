const Agenda = require('agenda');

var mongoConnectionString = 'mongodb://nodejs:lalarala@ds249325.mlab.com:49325/titoteavisadb';
var agenda = new Agenda({db: {address: mongoConnectionString}});

agenda.on('ready', function() {
  agenda.start();
  console.log("agenda started");
});