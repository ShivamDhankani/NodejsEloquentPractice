var http = require("http");
var qs=require("./quar")
var na="shivam";
var pa="pass";
var server=http.createServer(function(req,res){

console.log(Object.keys(req))
	if(req.method=="GET"){
		res.end("hiii");                           
	}else{res.end("bii");}

//console.log("---->",req.url);
 var ro=qs.obj(req.url);
console.log(ro);
var oo={};
 for(var i=0;i<ro.length;i++){
 	var op=""+ro[i];
 	var key=""+op.split("=")[0];
 	var value=""+op.split("=")[1];
 	//console.log("key",key,"value",value);
 	oo[key]=value;

 }

console.log(oo);

if(oo.name ==na &&  oo.password == pa){
	console.log("sahi ha");
}else {
	console.log("nahi sahi ha");
}

 });



server.listen(3000);