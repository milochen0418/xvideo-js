let keypress = require('keypress');
keypress(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();

process.stdin.on('keypress',(ch,key)=>{
    if(key &&key.ctrl && key.name=='c'){
        process.stdin.pause();
    }});

console.reset =  function () {
  return process.stdout.write('\033c');
};

let xvideo = require('./ReqParse.js');

homepage(0);

async function homepage(index){
	console.reset();
	console.log('loading ...');
	let home_list = await xvideo.hpc(0);
	let start = 0;//closure
	function render_ten(){
		console.reset();
		for(let i=start;i<start+10;i++){
			console.log('    '+home_list[i].attr.name);
		}
		start+10;
	}
	render_ten();
	console.log(start);
//	render_ten(start);
//	console.log(home_list);
}

async function keywordpage(keyword,index){
	console.reset();
	console.log('loading ...');
	let keyword_list =  await xvideo.kwc(keyword,index);
	return keyword_list;
}