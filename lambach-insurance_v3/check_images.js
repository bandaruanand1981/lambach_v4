const https = require('https');

const imageIds = [
  '1501281668745-f7f579183884',
  '1598899134739-24c46f58b8c0',
  '1434626881859-194d673664d5',
  '1557804506-669a67965ba0',
  '1492684223066-81342ee5ff30',
  '1533174072545-7a4b6ad7a6c3',
  '1505236858219-8359eb29e329',
  '1451187580459-43490279c0fa',
  '1431543802226-c11f3263152d'
];

imageIds.forEach(id => {
  https.get(`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=800`, (res) => {
    console.log(`${id}: ${res.statusCode}`);
  });
});
