const https = require('https');
const fs = require('fs');
const path = require('path');

const items = [
  { url: 'https://fortunegourmet.com/wp-content/uploads/2025/03/SALAME-NAPOLI-100g-verticale-AP-600x600.jpg', name: 'salami-napoli.jpg' },
  { url: 'https://fortunegourmet.com/wp-content/uploads/2025/03/sb150gm-600x600.png', name: 'streaky-bacon-150gm.png' },
  { url: 'https://fortunegourmet.com/wp-content/uploads/2025/03/Streaky-bacon-1kg-600x600.jpg', name: 'streaky-bacon-1kg.jpg' }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error('Status ' + res.statusCode));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Successfully downloaded', dest);
        resolve();
      });
    }).on('error', reject);
  });
}

async function main() {
  const targetDir = path.join(__dirname, 'public', 'assets');
  for (const item of items) {
    const dest = path.join(targetDir, item.name);
    try {
      await download(item.url, dest);
    } catch (err) {
      console.error('Failed to download', item.url, err.message);
    }
  }
}

main();
