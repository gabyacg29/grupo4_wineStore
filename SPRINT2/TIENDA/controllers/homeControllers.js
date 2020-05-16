var home = {
    inicio: function(req, res) {
        res.render('index');
    },
    principal: function(req, res) {
        res.render('home');
    }

};
module.exports = home;