const GitHub = require('./GitHubModel');

const gitHubController = {

  createGitHub(req, res) {
    console.log('boo');
    console.log(req.body);
    GitHub.create(req.body)
    .then((doc) => res.status(200).send(doc))
    .catch((err) => res.status(418).send());
  },

  getGitHubs(req, res) {
    console.log("TRYING TO GET");
    GitHub.find(req.query, (err, found) => {
      if (found) {
        res.send(found);
      } else {
        console.log("error get");
        res.send(err);
      }
    });
  },

  updateGitHub(req, res) {
    GitHub.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then((updatedDoc) => {
        if(!updatedDoc) res.status(418).send('NotFound');
        res.status(200).send(updatedDoc);
      })
      .catch((err) => res.status(418).send());
    },

};

module.exports = gitHubController;
