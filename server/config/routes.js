/**
 * Created by Niertis on 2/20/2016.
 */
module.exports = function(app) {
    app.get('/partials/*', function (req, res) {
        res.render('../../public/app/' + req.params[0]);
    });

    app.get('*', function (req, res) {
        res.render('index');
    });

};