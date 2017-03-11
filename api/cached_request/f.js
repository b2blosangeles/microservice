var request = pkg.request;

var url = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png';
pkg.request.get(url).pipe(res); 
/*
res.writeHead(200, {'Content-Type': 'image/jpeg'});
cachedRequest({url: 'https://www.google.com'}).pipe(res); */