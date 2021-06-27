var request = require('request');

export default function findByIdCB(id) {
 return new Promise(function(resolve, reject) {
  request({
     method:'POST',
     url:'https://jquery-a7b1ae.appdrag.site/api/findById', 
     form: {"id" : id,"AD_PageNbr" : "1","AD_PageSize" : "500"}
  }, function(err,httpResponse,body) {
    if ( err != null ) {
    reject(err);
    }
    else {
     resolve(body);
    }
  });
 });
}