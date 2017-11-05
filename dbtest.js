const Agenda = require('agenda');
const MONGODBUSER = "nodejs";
const MONGODBPASS = "lalarala";

var mongoConnectionString = `mongodb://${MONGODBUSER}:${MONGODBPASS}@ds249325.mlab.com:49325/titoteavisadb`;
var agenda = new Agenda({db: {address: mongoConnectionString}});

agenda.on('ready', function() {
  agenda.start();
  console.log("agenda started");
});