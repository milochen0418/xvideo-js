//let keypress = require('keypress');
let menu = require('./menu.js');
exports.all = function(index){
    menu.render(index);

    process.stdin.on('keypress',function arrow(ch,key){
        switch(key.name){
            case 'up':
                index==0?index=0:index--;
                menu.render(index);
                break;
            case 'down':
                index==3?index=3:index++;
                menu.render(index);
                break;
            case 'backspace':
            case 'left':
                menu.render(index=3);
                break;
            case 'return':
            case 'right':
                process.stdin.removeListener('keypress',arrow);
                menu.choose(index);
                break;
        };
    });
}