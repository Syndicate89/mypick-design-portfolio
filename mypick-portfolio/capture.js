const puppeteer = require('puppeteer');

const sites = [
    { url: 'https://syndicate89.github.io/inpilates/', file: '1.png' },
    { url: 'https://syndicate89.github.io/nuevo/', file: '2.png' },
    { url: 'https://syndicate89.github.io/stay-yunseul/', file: '4.png' },
    { url: 'https://syndicate89.github.io/sewoom-medical-center/', file: '5.png' },
    { url: 'https://syndicate89.github.io/newton-ip-law-firm/', file: '6.png' },
    { url: 'https://syndicate89.github.io/designyouth/', file: '7.png' }
];

async function captureScreenshots() {
    const browser = await puppeteer.launch();
    for (const site of sites) {
        console.log(`Capturing ${site.url}...`);
        const page = await browser.newPage();
        await page.setViewport({ width: 1920, height: 1080 });
        await page.goto(site.url, { waitUntil: 'networkidle0', timeout: 60000 });
        // wait a moment for any animations to finish
        await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 2000)));
        await page.screenshot({ path: `public/portfolio/${site.file}`, type: 'png' });
        await page.close();
    }
    await browser.close();
    console.log('All screenshots captured.');
}

captureScreenshots();
