const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.setViewportSize({ width: 1440, height: 900 });

  await page.goto('http://localhost:3000/work/wbit-ai-platform', {
    waitUntil: 'networkidle',
    timeout: 30000
  });

  await page.waitForTimeout(2000);

  await page.screenshot({
    path: '/Users/weijinshan/Desktop/wbit-fullpage.png',
    fullPage: true
  });

  console.log('Full page screenshot saved!');
  await browser.close();
})();
