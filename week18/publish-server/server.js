let http = require('http');
let unzipper = require('unzipper');
let querystring = require('querystring');

// 2.auth路由：接受code，用code + client_id + client_secret换token

function auth(request, response) {

}

// 4.publish路由： 用token获取用户信息，检查权限，接受发布

function publish(request, response) {

}

http.createServer(function(request, response){
  if (request.url.match(/^\/auth\?/))
    return auth(request, response);
  if (request.url.match(/^\/publish\?/))
    return publish(request, response);
  // console.log("request")
  // request.pipe(unzipper.Extract({ path: '../express-server/public/'}));

}).listen(8082);     