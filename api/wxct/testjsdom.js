var url = require("url");
var url_src = 'http://www.wenxuecity.com';
var p = url.parse(url_src); 
res.send(p);
return true;
pkg.request({ uri:url_src  }, function (error, response, body) {  
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
			var objs = $('.maincontent').find('.col').find('li').find('a');
			var result = [];		  
			for (var i = 0; i < objs.length; i++) {
				result[result.length] = {href:$(objs[i]).attr('href'), text:$(objs[i]).html()};
			}
			res.send(result);
        }
      }
  });
});
