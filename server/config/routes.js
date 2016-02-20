/**
 * Created by Niertis on 2/20/2016.
 */
module.exports = function(app) {
    app.get('*', function (req, res) {
        res.render('index');
    });

};