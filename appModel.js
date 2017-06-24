'use strict';

var db = require('./l_database.js'),
    mustache = require('mustache'),
    q = require('q');
//     constants = require('../constants.js'),
//     myUtil = require('../_public/assests/myUtil.js'),
//     md5 = require('md5');


// lấy ds tất cả các sách
exports.getAllBooksList = function() {
    var sqlSelect = 'SELECT * FROM t_book';
    return db.select(sqlSelect);
}

// lấy ds tất cả các chap của 1 truyện
exports.getChapterOfBook = function(bookId, chapterIndex) {
    var sqlSelect = 'SELECT * FROM t_chapter WHERE mBookId = '+ bookId;
    if(chapterIndex){
        sqlSelect += ' AND mChapterIndex = ' + chapterIndex;
    }
    // console.log('sqlSelect :' + sqlSelect);
    return db.select(sqlSelect);
}
////////////////////////////////////////////

// exports.login = function(username, password) {
// 	var params = {
//             mUsername: username,
//             mPassword: md5(password)
//         }
//     var defer = q.defer();
// 	var sql = mustache.render('SELECT mUserId, mUsername, mRoleId FROM t_user WHERE mUsername = "{{mUsername}}" AND mPassword = "{{mPassword}}" AND mRoleId = 1', params);

// 	db.select(sql).then(function(rows){
// 		if(rows.length === 0) defer.resolve(null);
// 		else defer.resolve(rows[0]);
// 	}).catch(function (error) {
// 		console.log('login: ' + error);
// 		defer.reject(error);
// 	});

//     return defer.promise;
// }

