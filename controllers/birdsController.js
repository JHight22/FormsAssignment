

exports.post_create_bird = function(req, res) {
      
    let newBird = {
        species: req.body.species,
        nickname: req.body.nickname,
        status: req.body.status
    }

    console.log(newBird);

    res.redirect('../birds/confirmation');
};  
