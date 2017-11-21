var http = require("http");
const { spawn } = require('child_process');
const ls = spawn('node', ['child.js']);
const fs = require('fs');
var dat;
ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
fs.appendFile('hello', data, function (err) {
  if (err) throw err;
  console.log('Saved!');
dat=data;
});

    console.log("The file was saved!");
}); 


ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});


ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);


});
var server=http.createServer(function(req,res){

	if(req.method=="GET"){
		res.end(dat);                           
	}
});
server.listen(4000);

