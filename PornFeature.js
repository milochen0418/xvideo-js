
function pornFeauture(url){
	function tagSort(body){
		let $ = cheerio.load(body);
		let tagTable = $('.video-tags-list');
		let tag = [];
		let element = tagTable.find('li');
		if(element[1]===undefined) throw new Error('no tag');
		for(let i=1;i<element.length-1;i++){
			//i=0 is author name , the end is '+'
			tag.push(element.eq(i).text());
		}
		return tag;
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
			    		resolve(tagSort(body));
			    	}catch(err){
			    		reject(Error('no tag'));
			    	}	    	
			    }else{
			    	reject('No response');
			    }
		})
	})
}
