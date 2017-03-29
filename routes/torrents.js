var express = require('express');
var router = express.Router();
var Client = require('utorrent-api');

var utorrent = new Client('localhost', '8080');
utorrent.setCredentials('admin', '123qweasd');

function mapTorrent(torrent) {
  return { name: torrent[2] };
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  utorrent.call('list', function(err, torrents_list) {
    if(err) { console.log(err); return; }
    res.send(torrents_list.torrents.map(mapTorrent));
  });
});

module.exports = router;
