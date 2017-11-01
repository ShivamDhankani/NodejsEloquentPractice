var obj=function(usl){
//console.log("A gaya",usl);
/*usl=usl.replace("?","")
usl=usl.replace("/","")
usl=usl.split("&");
console.log("A gaya",usl);
*/
//usl=usl.replace("&","  ");

//console.log("A gaya",usl);
    
var res=usl.match(/[a-zA-z]*=[a-z0-9A-Z]*/g);
//console.log(res);
//var ex=/[a-z]*:[a-z0-9]*/g;
//var ar=new RegExp([a-z]*:[a-z0-9]*,g);
  //  var ex=usl.match(ar);
    
  //console.log(res);
    return res;
}
module.exports= {
	obj : obj	
}