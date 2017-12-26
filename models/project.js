const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: String,
  tags: [String],
  img: [String],
  cover: String,
  description: String,
  customer: String,
  date: String,
  collaborators: String,
  website: String
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});


module.exports = mongoose.model('Project', projectSchema);
