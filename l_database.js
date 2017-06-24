var mysql = require('mysql'),
    q = require('q');

var _HOST = 'sql12.freemysqlhosting.net', 
    _USER = 'sql12181872',
    _PWD = 'WsH12t5FgN',
    _DB = 'sql12181872';


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
