let fav = require('./favorite.js')

function dataclean(){
	let favList = fav.readjson();
	fav.cleanjson();
	let page =0
	for(let i=0;i<favList.length;i++){
		if(favList[i]==undefined) break;
		favList[i].page=page;
		fav.addjson(favList[i])
		if(Math.floor(i/10)<Math.floor((i+1)/10)) page+=1;
	}
}

let favList = fav.readjson();
let index = 0;
let page  = 0;
for(let i=index;i<index+10;i++){
	
}