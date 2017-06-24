// var wnumb = require('wnumb');


// // "Ngày dd/mm/yyy"
// exports.getDateTimeShortString =  function(date){
// 	return ('0' + date.getDate()).slice(-2) + '/'+ ('0' + (date.getMonth() + 1)).slice(-2) + '/'+ date.getFullYear();
// }

// // "hh:mm:ss dd/mm/yyy"
// exports.getDateTimeString = function(date){
// 	return ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + ' ngày '+ ('0' + date.getDate()).slice(-2) + '/'+ ('0' + (date.getMonth() + 1)).slice(-2) + '/'+ date.getFullYear();
// }
// // "yyyy-mm-dd hh:mm:ss"
// exports.getDateTimeDataBaseString = function(date){
// 	return date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-'+ ('0' + date.getDate()).slice(-2) + ' '+ ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2);
// }

// // "xx phút trước"
// // "xx giờ trước"
// // "xx ngày trước"
// // "xx tháng trước"
// // "xx năm trước"
// exports.getDateDistanceString = function(date){
// 	var now = new Date().getTime();
// 	var distance = (now - date.getTime())/1000;
// 	if(distance >= 31104000){ // years
// 		return Math.floor(distance/31104000) + " năm trước"
// 	}
// 	if(distance >= 2592000){ // month
// 		return Math.floor(distance/2592000) + " tháng trước"
// 	}
// 	if(distance >= 86400){ // days
// 		return Math.floor(distance/86400) + " ngày trước"
// 	}
// 	if(distance >= 3600){ // hours
// 		return Math.floor(distance/3600) + " giờ trước"
// 	}
// 	if(distance >= 60){ // mins
// 		return Math.floor(distance/60) + " phút trước"
// 	}
// 	return Math.floor(distance/2592000) + " giây trước"
// }

// // "hh:mm:ss"
// exports.getTimeStringFromDate = function(date){
// 	return ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
// }
// exports.encodeUsername = function(username) {
// 	username = username.toString();
//     return username.substr(0, 3) + '**' + username.substr(5, username.length+1);
// }


// exports.renderNotAuthPage = function(res){
//     res.statusCode = 401;
//     res.end('//TODO: not authenticated!!!');
// }

// exports.encodeQueryData = function(data) {
//    let ret = [];
//    for (let d in data)
//      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
//    return ret.join('&');
// }

// exports.getDateAfterString = function(date, n) {
// 	date.setDate(date.getDate() + n); 
// 	return this.getDateTimeShortString(date);
// }

// exports.getNameFromFullName = function(fullName) {
// 	return fullName.slice(fullName.lastIndexOf(' '), fullName.length);
// }

// exports.formatNumber = function(number) {
// 	number = parseInt(number);
//     var nf = wnumb({
//         thousand: '.'
//     });
//     return nf.to(number);
// }