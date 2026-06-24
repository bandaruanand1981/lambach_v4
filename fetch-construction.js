const https = require('https');

https.get('https://lambach.in/construction/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const lines = data.split('\n');
    let inContent = false;
    for (let line of lines) {
       line = line.trim();
       if (line.includes('<h1') || line.includes('<h2') || line.includes('<h3') || line.includes('<p') || line.includes('<li')) {
          console.log(line.replace(/<[^>]*>/g, ''));
       }
    }
  });
}).on('error', (err) => {
  console.error(err);
});
