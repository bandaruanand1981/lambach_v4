const https = require('https');
const http = require('http');

http.get('http://lambach.in', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const lines = data.split('\n');
    for (let line of lines) {
       if (line.includes('<img')) {
          console.log(line.trim());
       }
    }
  });
}).on('error', (err) => {
  console.error(err);
});
