let User = require('../models').users;
let jwt = require('jsonwebtoken');
let jwt_secret = "djsbhfDSBF93BF9b94r946BFbf0487Rbf0s";

module.exports = {
    signup(req, res) {
        let user = req.body;

        User.create(user)
            .then(function (newPost) {
                res.status(200).json(newPost);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },
    authenticate(req, res) {
        
        console.log(req);
        let data = {
            username: req.body.username,
            password: req.body.password
        };

        User.findOne({
            where: {
                'username': data.username
            }
        })
            .then(function (user) {
                if (!user) {
                    return res.status(404).json({'message': 'User not found!'});
                }

                if (user.password === password) {
                    return done(null, user);
                }

                console.log(user);

                let token = jwt.sign(user, jwt_secret, {
                    expiresIn: '1h' // expires in 1 hour
                });

                res.json({error: false, token: token});
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },
    listAll(req, res) {
        User.findAll({})
            .then(function (users) {
                res.status(200).json(users);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },
    show(req, res){
        User.findById(req.params.id, {})
            .then(function (user) {
                res.status(200).json(user);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },
    create(req, res){
        User.create(req.body)
            .then(function (newPost) {
              res.status(200).json(newPost);
            })
            .catch(function (error) {
              res.status(500).json(error);
            });
    },
    update(req, res){
    
        console.log(req.body);
        console.log(req.params.id);
    
        User.update(req.body, {
            where: {
                id: req.params.id
            }
        })
            .then(function (updatedRecords) {
                res.status(200).json(updatedRecords);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },
    delete(req, res){
        console.log(req.body);
        console.log(req.params.id);
        req.body.isDeleted = true;
        User.update(req.body, {
            where: {
                id: req.params.id
            }
        })
            .then(function (updatedRecords) {
              res.status(200).json(updatedRecords);
            })
            .catch(function (error) {
              res.status(500).json(error);
            });
    },
    destroy(req, res){
        User.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (deletedRecords) {
              res.status(200).json(deletedRecords);
            })
            .catch(function (error) {
              res.status(500).json(error);
            });
    }
};

