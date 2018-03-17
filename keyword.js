let request = require('request');
let cheerio = require('cheerio');
let host = "https://www.xvideos.com";
var URL = require('url');
let readline = require('readline')
//main page => /new/${page}
//keyword page => &p=${page}

console.log('Program stating...');
console.log('Please give me your keyword :)');

async function Porn(keyword,page){
		function giveMePorn(url){
			function pageSort(body){
				let $ = cheerio.load(body);
				let content = $('#content');

				let avArray = [];
				let video = content.find('.thumb-block')
				if(video[0]===undefined) throw new Error('no content')
				for(let i=0;i<video.length;i++){
					let obj = {
						name:video.eq(i).children('p').eq(0).text(),
						link:video.eq(i).children('p').eq(0).children('a').attr('href')
					}
					avArray.push(obj);
				}
				return avArray;
			}
			return new Promise(function(resolve,reject){
				request(
				{
				method:'GET',
				header:{'Content-Type' : 'application/json; charset=UTF-8'},
				uri:url
				},(err,res,body)=>{
					    if(!err){
					    	try{
					    		resolve(pageSort(body));
					    	}catch(err){
					    		reject(Error('no content'));
					    	}	    	
					    }else{
					    	reject('No response');
					    }
				})
			})
		}
		//If you use keyword
		function urlGen(keyword,page){
			let url = host+URL.format({
					query:{
						k:keyword,
						p:page
					},
					json:true
				});
			return url;
		}
		let url = urlGen(keyword,page);
		//
		try{
			let res = await giveMePorn(url);
			console.log(res);
		}catch(err){
			console.log(err);
		}
}

(function PornPorn(){
	let page = 0;
	let history = [];

	let rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout,
	  terminal: false
	});

	rl.on('line', line=>{
		if(line==='next'){
			try{
				page++;
				keyword = history[history.length-1];
				Porn(keyword,page)
			}catch(err){
				console.log(err);
			}
		}else{
			history.push(line);
			page=0;
			Porn(line,page);
		}
	})
})()


