
var ejs = require('ejs');
var fs = require('fs');
console.log('start')
var file = fs.readFileSync('./output/client/index.ejs', 'utf8');
console.log('1',file);
var rendered = ejs.render(file, {
    html: 'asdf',
    assets: {
        vendor: {
            js:'sadf'
        },
        client: {
            js: '22'
        }
    }

});

console.log(rendered);