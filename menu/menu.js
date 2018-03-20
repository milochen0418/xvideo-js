console.reset =  function () {
  return process.stdout.write('\033c');
};
const menu = {
    0:'Watch the home page',
    1:'Input your keyword to find',
    2:'Favorite',
    3:'Exit'
};

exports.render = function(index){
	console.reset();

	for(i in menu){
		if(i == index) tab = '->  ';
		else tab = '    '
	    console.log(tab+menu[i]);
	}
};

exports.choose = function(index){
	if(index==3){
		console.log('Goodbye!');
		process.stdin.pause();
	}else{
		console.reset();
		process.stdin.pause();
		switch(index){
			case 0:
				console.reset();
				process.stdin.setRawMode(false);
				let home = require('../homepage/homepage.js');
				home.homeporn();
				//function main page listener
				break;
			case 1:
				console.reset();
				process.stdin.setRawMode(false);
				let key = require('../keyword/keyword.js');
				key.search();
				//keyword page listener
				break;
			case 2:
				//Favorite page listener
				console.log('2');
				break;
			default:
				break;
		}
	}
}