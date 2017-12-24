const Project = require('../models/project');
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/notcalpi');
mongoose.connect('mongodb://heroku_44lrps0v:9kv4pvoov6dpra1m72sho7802v@ds139197.mlab.com:39197/heroku_44lrps0v');




const projects = [
  {name: 'Comunication & Design',
    tags: ['Photography', 'Design', 'Comunication', 'Website', 'Digital Marketing', 'Social Media'],
    img: 'test',
    description: `Cansaladeries Medrán is a small chain of 4 stores located in Sabadell (Barcelona).
    The customer wanted visibility on social networks such as Instagram and Facebook. Graphic content had to be done on a regular basis while promoting it using Facebook Adds.
    The customer asked for special Christmas Campaing so a website was developed from scratch using Wordpress and a marketing plan was followed. This marketing plan consisted of a 
    lucky draw, Google Adwords campaing, Facebook Adds campaing and Google Analytics for tracking it.`,
    customer: 'Cansaladeries Medrán',
    date: '2015',
    collaborators: 'Nordic Websites - https://nordicwebsites.com/',
    website: 'http://cansaladeriesmedran.com/'
  },
  {name: 'VideoClip',
  tags: ['Video', 'Design'],
  img: '-',
  description: `We were asked to do a video clip. Using audiovisual resources and techniques from this field, we had to come up with a concept that could follow the song rythm and melody. 
  (Song: The Hunt | Artist: Ex-Guru)`,
  date: '2013',
  collaborators: '-',
  website: 'https://vimeo.com/85111459'
}
];




Project.create(projects, (err, projects) => {
  if (err) { throw (err); }
  console.log('Success', projects);
  mongoose.connection.close();
});
