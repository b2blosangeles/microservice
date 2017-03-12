var url = require('url');
var v  = url.resolve('http://example.com/one/1/2/3/index.html', '../two')
res.send(v);
// res.send('test1');