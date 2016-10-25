import path from 'path';
let pt = path.resolve('./output/client');
let pt2 = path.join(__dirname, './output/client');
console.log(pt, pt2);