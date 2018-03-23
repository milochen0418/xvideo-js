const fs = require('fs');

function addJSONsync(something){
	let obj;
	try{
		obj = fs.readFileSync('./fav.json', 'utf8');
		obj = JSON.parse(obj);	
	}catch(err){
		//not exist
		obj = [];
	}
	obj.push(something)
	fs.writeFile('./fav.json', JSON.stringify(obj),err=>{
	if(err)
		console.log(err);
//	else
//		console.log('write done');
	});	
}

function readJSONsync(){
	let obj;
	try{
		obj = fs.readFileSync('./fav.json', 'utf8');
		obj = JSON.parse(obj);	
	}catch(err){
		obj = [];
	}
	return obj;
}

exports.addjson = addJSONsync;
exports.readjson = readJSONsync;
