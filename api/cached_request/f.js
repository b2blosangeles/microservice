var request = pkg.request;

var url = 'https://www.google.com';
pkg.request.get(url).pipe(res); 
/*
res.writeHead(200, {'Content-Type': 'image/jpeg'});
cachedRequest({url: 'https://www.google.com'}).pipe(res); */