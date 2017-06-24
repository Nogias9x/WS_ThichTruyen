'use strict';

var express = require('express'),
    appModel = require('./appModel.js');
//     md5 = require('md5'),
//     q = require('q'),
//     constants = require('../constants.js'),
//     superString = require('../_public/assests/superString.js'),
//     myUtil = require('../_public/assests/myUtil.js'),
//     fs = require('fs');

var router = express.Router();

router.get('/', function(req, res) {
	
    res.end('hello world 3333 !!!');
});

//localhost:12491/getAllBooksList
// lấy ds tất cả các sách
router.get('/getAllBooksList', function(req, res) {
    appModel.getAllBooksList().then(function (books) {
        // console.log(books);

        var responseJson = JSON.stringify({ 
            books: books
        });
        res.set({ 'content-type': 'application/json; charset=utf-8' })
        res.statusCode = 200;

        res.end(responseJson);
    }).catch(function (error) {
        console.log('<<ERROR>> GET /getAllBooksList:' + error);
        res.statusCode = 500;
        res.end(error);
    });
});


//localhost:12491/getChapterOfBook?bookId=1111[&chapterIndex=2222]
// lấy ds tất cả các chap của 1 truyện HOẶC 1 chapter nào đó
router.get('/getChapterOfBook', function(req, res) {
    console.log('req.query :' + JSON.stringify(req.query));
    if(req.query.bookId){
        appModel.getChapterOfBook(req.query.bookId, req.query.chapterIndex).then(function (chapters) {
            // console.log(chapters);

            var responseJson = JSON.stringify({ 
                chapters: chapters
            });
            res.set({ 'content-type': 'application/json; charset=utf-8' })
            res.statusCode = 200;

            res.end(responseJson);
        }).catch(function (error) {
            console.log('<<ERROR>> GET /getAllChaptersOfBook:' + error);
            res.statusCode = 500;
            res.end(error);
        });
    } else {
        console.log('<<ERROR>> GET /getAllChaptersOfBook: cannot get parameter bookId');
        res.statusCode = 500;
        res.end(error);
    }
});


module.exports = router;