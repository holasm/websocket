var fs = require('fs');
var path = require('path');

var count = 0;

var items = fs.readdirSync('./');

var gofile = []

for (var i = items.length - 1; i >= 0; i--) {
  var item = items[i];
  var p = path.resolve(__dirname, item)
  if (item.split('.').indexOf('go') > -1 && !(item.split('.')[0].split('_').indexOf('test') > -1) && item.split('.')[0] !='doc') {
    gofile.push(p);
  }
}


for (var i = gofile.length - 1; i >= 0; i--) {
  var file = gofile[i];
  console.log(file)
  var data = ''
  var lines = []
  var data = fs.readFileSync(file, 'utf-8');
  var lines = data.split('\n');
  var cou = 0;
  // console.log(lines)
  for (var j = lines.length - 1; j >= 0; j--) {
    if(lines[j].search('//') == -1) {
      cou++
    }
  }
  count += cou
}

console.log(count)
count = 0;

var data = fs.readFileSync('/home/subhasis/DEV/git/websocket/conn.go', 'utf-8');
var lines = data.split('\n');
var cou = 0;
// console.log(lines)
for (var j = lines.length - 1; j >= 0; j--) {
  if(lines[j].search('//') == -1) {
    cou++
  }
}
count += cou
console.log(count)