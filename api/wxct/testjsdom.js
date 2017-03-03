pkg.request({ uri:'http://www.wenxuecity.com' }, function (error, response, body) {  
  var jsdom = require(env.space_path + '/api/pkg/jsdom/node_modules/jsdom');

  if (error && response.statusCode !== 200) {
    res.send('www.wenxuecity.com')
  }
  jsdom.env({
    html: body,
    scripts: [
      'http://code.jquery.com/jquery-1.5.min.js'
    ],
    done:function (err, window) {
        if (err) {
          res.send('errrr');
        } else {  
          var $ = window.jQuery;
          res.send($('.maincontent').html());
        }
      }
  });
});
