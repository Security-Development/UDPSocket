const udp = require('dgram');

var client = udp.createSocket('udp4');

client.on('error', (err) => {
  console.log('에러 발생');
  client.close();
});

client.bind({
  address: 'localhost',
  port: 8080
});
