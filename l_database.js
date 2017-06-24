var mysql = require('mysql'),
    q = require('q');

var _HOST = '127.0.0.1',
    _USER = 'root',
    _PWD = '',
    _DB = 'db_thich_truyen';


// DATABASE
exports.select = function(sql) {
    var defer = q.defer();
    var connection = mysql.createConnection({
        host: _HOST,
        user: _USER,
        password: _PWD,
        database: _DB
    });

    connection.connect();

    connection.query(sql, function(error, rows, fields) {
        if (error){
            defer.reject(error);
        } else {
            defer.resolve(rows);
        }
    });

    connection.end();
    return defer.promise;
}

exports.insert = function(sql) {
    var defer = q.defer();
    var connection = mysql.createConnection({
        host: _HOST,
        user: _USER,
        password: _PWD,
        database: _DB
    });
    connection.connect();

    connection.query(sql, function(error, data) {
        if (error) {
            defer.reject(error);
        } else {
            defer.resolve(data.insertId);
        }
    });

    connection.end();
    return defer.promise;
}

exports.update = function(sql) {
    var defer = q.defer();
    var connection = mysql.createConnection({
        host: _HOST,
        user: _USER,
        password: _PWD,
        database: _DB
    });
    connection.connect();

    connection.query(sql, function(error, results, fields) {
        if (error) {
            defer.reject(error);
        } else {
            defer.resolve(results.changedRows);
        }
    });

    connection.end();
    return defer.promise;
}

exports.delete = function(sql) {
    var defer = q.defer();
    var connection = mysql.createConnection({
        host: _HOST,
        user: _USER,
        password: _PWD,
        database: _DB
    });
    connection.connect();

    connection.query(sql, function(error, result, fields) {
        if (error) {
            defer.reject(error);
        } else {
            defer.resolve(result.affectedRows);
        }
    });

    connection.end();
    return defer.promise;
}
