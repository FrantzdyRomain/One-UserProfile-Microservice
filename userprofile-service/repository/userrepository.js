var mongoose = require('mongoose');
var User = mongoose.model('User');

var UserRepository = {
    findByEmail: function(email) {
        return User.findAll({
            where: {
                email: email
            }
        })
    },

    findUserByUsername: function(username){
        return User.findById(username);
    }
}

module.exports = Usersepository;