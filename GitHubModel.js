const mongoose = require('mongoose');

const GitHubSchema = mongoose.Schema({
  username: { type: String, required: true },
  quizstatus: { type: Boolean, required: true },
  score: { type: Number, required: true },
  match: { type: String, required: true },
  bio: { type: String, required: false }
});

const GitHub = mongoose.model('GitHub', GitHubSchema);

module.exports = GitHub;