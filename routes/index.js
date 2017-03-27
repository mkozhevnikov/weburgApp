var express = require('express');
var router = express.Router();
var Client = require('utorrent-api');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  var utorrent = new Client('localhost', '8080');
  utorrent.setCredentials('admin', '123qweasd');
  
  utorrent.call('list', function(err, torrents_list) {
      if(err) { console.log(err); return; }
  
      console.log(torrents_list);
  });
});

module.exports = router;
