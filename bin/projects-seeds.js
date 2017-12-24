const Project = require('../models/project');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/notcalpi');
// mongoose.connect('process.env.MLAB_DB');




const projects = [
  {name: 'test',
    tags: ['test', 'test', 'test'],
    img: 'test',
    description: 'test',
    kind: 'test',
    date: 'test'
  }
];




Project.create(projects, (err, projects) => {
    if (err) { throw (err); }
    console.log('Success', projects);
    mongoose.connection.close();
  });
