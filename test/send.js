var dgram = require('dgram');
const crypto = require('crypto');

var s = dgram.createSocket('udp4');

var buff = Buffer.from('Some bytes');
s.send(buff, 8080, '127.0.0.1');
