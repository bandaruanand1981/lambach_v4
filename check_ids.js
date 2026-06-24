const https = require('https');
const ids = [
  '1492144534655-ae79c964c9d7', // steering wheel?
  '1533473359331-01f5ce0b2b8e', // car?
  '1580587771525-78b9dba3b914', // house exterior?
  '1513694203232-719a280e022f', // living room?
  '1469854523086-cc02fe5d8800', // travel map?
  '1503220317375-aaad61436b43', // travel?
  '1584439121650-32df27685459', // medical?
  '1505576391880-b3f9d7132897', // hospital bed?
  '1551076805-e18690c5e53b',    // steth?
  '1532938911079-1b06ac7ceec7'  // doc?
];

let pending = ids.length;
ids.forEach(id => {
  const req = https.request({
    hostname: 'images.unsplash.com',
    path: '/photo-' + id + '?w=10',
    method: 'HEAD'
  }, (res) => {
    console.log(id, res.statusCode);
  });
  req.on('error', e => console.error(id, e.message));
  req.end();
});
