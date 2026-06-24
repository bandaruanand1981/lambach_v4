const https = require('https');

https.get('https://lambach.in/wp-sitemap-posts-page-1.xml', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const urls = data.match(/<loc>(.*?)<\/loc>/g);
    if (urls) {
      console.log(urls.map(u => u.replace('<loc>', '').replace('</loc>', '')).join('\n'));
    } else {
      console.log('No URLs found');
    }
  });
}).on('error', (err) => {
  console.error(err);
});
