const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: String,
  tags: [String],
  img: [String],
  description: String,
  kind: String,
  date: String,
  collaborators: String,
  website: String
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});


module.exports = mongoose.model('Project', projectSchema);
