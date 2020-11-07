let http = require("http");
// let fs = require("fs");
let archiver = require("archiver");
let child_process = require("child_process");

// 1.打开 https://github.com/login/oauth/authorize

child_process.exec(`open https://github.com/login/oauth/authorize?client_id=Iv1.75cc1c552c2c1388`)

// 3.创建server，接受token，点击发布

// let request = http.request({
//   hostname: "127.0.0.1",
//   port: 8082,
//   method: "POST",
//   headers: {
//     'Content-Type': 'application/octet-stream'
//   }
// }, response => {
//   console.log(response);
// });

// // let file = fs.createReadStream("./sample.html");

// const archive = archiver('zip', {
//   zlib: { level: 9 }
// });

// archive.directory('./sample/', false);

// archive.finalize();

// archive.pipe(request);