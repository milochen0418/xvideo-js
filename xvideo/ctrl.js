let keypress = require('keypress');
/*keypress(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();

process.stdin.on('keypress',(ch,key)=>{
    if(key &&key.ctrl && key.name=='c'){
        process.stdin.pause();
    }});

*/
console.reset =  function () {
  return process.stdout.write('\033c');
};
let xvideo = require('./ReqParse.js');

var a = homeXv();
a.down();

function homeXv(){
	let obj={};
	obj.page = 0;//initial
	obj.videoList = [];
	obj.nextHomepage = async function(){	
		let temp = await xvideo.hpc(obj.page);
		obj.videoList = obj.videoList.concat(temp);
		obj.page+=1;
	};
	obj.pointer = 0;
	obj.index = 0;
	obj.renderTen = function(){
		console.reset();
		if(obj.videoList[obj.index]==undefined){
			console.log('Loading....')
			obj.nextHomepage().then(()=>{
				obj.renderTen();
			})
		}else{
			for(let i=obj.index;i<obj.index+10;i++){
				if(i==obj.pointer) console.log('->	'+obj.videoList[i].attr.name);
				else console.log('  	'+obj.videoList[i].attr.name);
			}
		}
		if(obj.videoList[obj.index+20]==undefined) obj.nextHomepage();
	}

	obj.down = function(){
		obj.pointer+=1;
		if(Math.floor(obj.pointer/10)> Math.floor((obj.pointer-1)/10)) obj.index+=10;
		console.log(obj.index);
		obj.renderTen();
	}
	obj.up = function(){
		if(obj.pointer==0) return;

		obj.pointer-=1;
		if(Math.floor(obj.pointer/10)< Math.floor((obj.pointer+1)/10)) obj.index-=10;
		obj.renderTen();
	}

	return obj;
}

function keyXv(key){
	obj = homeXv();
	obj.keyword = key;
	obj.nextKeywordPage = async function(){
		let temp = await xvideo.kwc(obj.keyword,obj.page);
		obj.videoList = obj.videoList.concat(temp);
		obj.page+=1;
	}
	return obj;
}
