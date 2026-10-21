//This imports the test function from Playwright.
const {test}=require('@playwright/test');
//"Validation for OrangeHRM" → test case name
//async → allows us to use await
//{ page } → Playwright browser page object
//Think of page as the browser tab controlled by Playwright.
test('Validation for orange lab', async function({page}){
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.locator("//input[@name='username']").fill("Admin");
await page.locator("//input[@name='password']").fill("admin123");
//await page.pause();
await page.keyboard.press("Enter")
await page.pause();
});