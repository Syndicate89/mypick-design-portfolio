const puppeteer = require('puppeteer');

const sites = [
    { url: 'https://syndicate89.github.io/inpilates/', file: '1_mobile.png' },
    { url: 'https://syndicate89.github.io/nuevo/', file: '2_mobile.png' },
    { url: 'https://syndicate89.github.io/stay-yunseul/', file: '4_mobile.png' },
    { url: 'https://syndicate89.github.io/sewoom-medical-center/', file: '5_mobile.png' },
    { url: 'https://syndicate89.github.io/newton-ip-law-firm/', file: '6_mobile.png' },
    { url: 'https://syndicate89.github.io/designyouth/', file: '7_mobile.png' },
    { url: 'https://syndicate89.github.io/barundental/', file: '8_mobile.png' },
];

async function captureMobileScreenshots() {
    const browser = await puppeteer.launch();
    for (const site of sites) {
        console.log(`Capturing mobile: ${site.url}...`);
        const page = await browser.newPage();
        // iPhone 14 Pro dimensions
        await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 3, isMobile: true, hasTouch: true });
        await page.goto(site.url, { waitUntil: 'networkidle0', timeout: 60000 });
        // wait for animations
        await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 2000)));
        await page.screenshot({ path: `public/portfolio/${site.file}`, type: 'png', fullPage: false });
        await page.close();
        console.log(`  -> Saved: public/portfolio/${site.file}`);
    }
    await browser.close();
    console.log('All mobile screenshots captured!');
}

captureMobileScreenshots().catch(console.error);
