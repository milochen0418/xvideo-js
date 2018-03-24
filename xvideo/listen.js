let ctrl = require('./ctrl.js');
let mkl = require('../menu.js');

let home = ctrl.homepage();
let keyword = ctrl.keypage('');
let fav = ctrl.favpage();
exports.fpages = fav;
exports.kkk = keyword;
exports.homes = home;
exports.keywords = keyword;

function homeChoose(ch,key){
	switch(key.name){
		case 'up':
			home.up();
			break;
		case 'down':
			home.down();
			break;
		case 'left':
			process.stdin.removeListener('keypress',homeChoose);
			mkl.control(0);
			break;
		case 'right':
			home.right()
			break;
		case 'space':
			home.save();
			break;
		case 'return':
			home.open();
			break;
	}
}

function keyChoose(ch,key){
	switch(key.name){
		case 'up':
			keyword.up();
			break;
		case 'down':
			keyword.down();
			break;
		case 'left':
			process.stdin.removeListener('keypress',keyChoose);
			mkl.control(1);
			break;
		case 'right':
			keyword.right();
			break;
		case 'space':
			keyword.save();
			break;
		case 'return':
			keyword.open();
	}	
}

function favChoose(ch,key){
	switch(key.name){
		case 'up':
			fav.up()
			break;
		case 'down':
			fav.down();
			break;
		case 'left':
			process.stdin.removeListener('keypress',favChoose);
			mkl.control(2);
			break;
		case 'right':
			fav.right();
			break;
		case 'd':
			fav.delete();
			break;
		case 'return':
			fav.open();
	}
}

exports.hchoose = homeChoose;
exports.kchoose = keyChoose;
exports.fchoose = favChoose;
