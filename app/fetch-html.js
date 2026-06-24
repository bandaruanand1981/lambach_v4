const https = require('https');
const http = require('http');
const fs = require('fs');

http.get('http://lambach.in', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('lambach-home.html', data);
    console.log("Saved to lambach-home.html");
  });
}).on('error', (err) => {
  console.error(err);
});
