const playwright = require('playwright');
const chai = require('chai')
const expect = chai.expect

describe('Smoke tests', function smoketests() {
    process.setMaxListeners(0);
    this.timeout(60000);
    this.slow(20000);    
    let page;

    afterEach(async () => {
        await page.screenshot({
            path: `./screenshots/test-${this.ctx.currentTest.fullTitle()}-${Math.random().toString(36).substr(2, 5)}.png`
        });
        await browser.close();
    });

    ['chromium', 'firefox', 'webkit'].forEach((browserType) => {
        beforeEach(async () => {
            browser = await playwright[browserType].launch();
            const context = await browser.newContext();
            page = await context.newPage();
        });

        it("First test - " + browserType, async () => {
            await page.goto('http://localhost:4100/');
        });

        it("Find element - " + browserType, async () => {
            await page.goto('http://localhost:4100/');
            const element = await page.$("a[href$='login']");

            expect(element).to.not.be.null;
        });

        it("Click - " + browserType, async () => {
            await page.goto('http://localhost:4100/');
            await page.click("a[href$='login']");

            expect(await page.url()).to.be.string('http://localhost:4100/login');
        });

        it("Click element - " + browserType, async () => {
            await page.goto('http://localhost:4100/');
            const element = await page.$("a[href$='login']");
            await element.click();

            expect(await page.url()).to.be.string('http://localhost:4100/login');
        });

        it("Type - " + browserType, async () => {
            await page.goto('http://localhost:4100/login');
            await page.type("input[type$='email']", 'example@example.com');

            expect(await page.$eval("input[type$='email']", el => el.value)).to.be.string('example@example.com');
        });

        it("Type - element" + browserType, async () => {
            await page.goto('http://localhost:4100/login');
            const element = await page.$("input[type$='email']");
            await element.type('example@example.com');

            expect(await element.evaluate(el => el.value)).to.be.string('example@example.com');
        });
    });
});