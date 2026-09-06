const https = require('https');

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function extractImages(url) {
  try {
    const html = await fetchHtml(url);
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    let match;
    const urls = new Set();
    while ((match = imgRegex.exec(html)) !== null) {
      if (match[1].includes('wp-content/uploads')) {
        urls.add(match[1]);
      }
    }
    console.log('--- ' + url + ' ---');
    console.log(Array.from(urls).join('\n'));
  } catch (e) {
    console.error(e);
  }
}

(async () => {
  await extractImages('https://fortunegourmet.com/testimonials/');
  await extractImages('https://fortunegourmet.com/in-the-news/');
  await extractImages('https://fortunegourmet.com/recipes/');
})();
