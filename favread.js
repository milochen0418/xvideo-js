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
}//some day will use?
controll();
function controll(){    

	let index =0;
	let page =0;

	list = fav.readjson();
	render();

	function render(){

		console.reset =  function () {
		  return process.stdout.write('\033c');
		};
		console.reset();
		let start = Math.floor(index/10)*10;
		for(let i=start;i<start+10;i++){
			if(list[i]==undefined) break;
			if(i==index){
				console.log('->	'+list[i].attr.name);
			}else{
				console.log('  	'+list[i].attr.name);
			}
		}
	}
	var keypress = require('keypress');
	keypress(process.stdin);
    process.stdin.setRawMode(true);
    process.stdin.resume();
	process.stdin.on('keypress',(ch,key)=>{
		if(key && key.ctrl &&key.name=='c'){
			process.stdin.pause();
		}
	})

	process.stdin.on('keypress',(ch,key)=>{
		switch(key.name){
			case 'up':
				index==0?index=0:index-=1
				render();
				break;
			case 'down':
				index==list.length-1?index=list.length-1:index+=1
				render();
				break;
			case 'left':
				break;
			case 'right':
				break;
		}
	})
}
