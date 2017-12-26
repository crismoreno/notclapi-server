const Project = require('../models/project');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/notcalpi');
// mongoose.connect();



const projects = [
  {name: 'Comunication & Design',
    tags: ['Photography', 'Design', 'Comunication', 'Website', 'Digital Marketing', 'Social Media'],
    img: ['-'],
    cover: '-',
    description: `Cansaladeries Medrán is a small chain of 4 stores located in Sabadell (Barcelona).
    The customer wanted visibility on social networks such as Instagram and Facebook. Graphic content had to be done on a regular basis while promoting it using Facebook Adds.
    The customer asked for special Christmas Campaing so a website was developed from scratch using Wordpress and a marketing plan was followed. This marketing plan consisted of a 
    lucky draw, Google Adwords campaing, Facebook Adds campaing and Google Analytics for tracking it.`,
    customer: 'Cansaladeries Medrán',
    date: '2015',
    collaborators: ['Nordic Websites - https://nordicwebsites.com/'],
    website: 'http://cansaladeriesmedran.com/'
  },
  {name: 'VideoClip',
  tags: ['Video', 'Design'],
  img: ['-'],
  cover: '-',
  description: `We were asked to do a video clip. Using audiovisual resources and techniques from this field, we had to come up with a concept that could follow the song rythm and melody. 
  (Song: The Hunt | Artist: Ex-Guru)`,
  customer: 'Personal Project',
  date: '2013',
  collaborators: ['Own project'],
  website: 'https://vimeo.com/85111459'
},
{name: 'TEST',
tags: ['TEST'],
img: ['TEST'],
cover: 'TEST',
description: `TEST`,
customer: 'TEST',
date: 'TEST',
collaborators: ['TEST'],
website: 'TEST'
}
];

function deleteAllProjects () {
  return Project.remove({})
    .then(() => {
      console.log('Deleted all projects');
    })
    .catch((err) => {
      console.log('Failed to delete all projects');
      return Promise.reject(err);
    });
}

deleteAllProjects();


Project.create(projects, (err, projects) => {
  if (err) { throw (err); }
  console.log('Success', projects);
  mongoose.connection.close();
});
