const {test}=require("@playwright/test");
const{Registration}=require("../page/Registration.js");
const testdata=require("../data.json")
testdata.forEach((datavalue) => {
test("Validation on Registration page"+datavalue.Name,async function({page})
{
    const reg=new Registration(page);
await reg.RegisterUrl();
    //await page.goto("https://blazedemo.com/register ");
    await page.locator("#name").fill(datavalue.Name);
    await page.locator("#company").fill(datavalue.Company);
    await page.locator("#email").fill(datavalue.MailAddress);
    await page.locator("#password").fill(datavalue.Password);
    await page.locator("#password-confirm").fill(datavalue["Confirm Password"]);
    await page.locator("//button[@type='submit']").click();
    await page.waitForTimeout(3000);

})
});