module.exports = function(req, res) {
    res.statusCode = 404;
    res.end('ERROR 404: PAGE NOT FOUND!');
}