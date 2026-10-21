const {test} = require("@playwright/test");
test("mouse actions", async function({page}){
await page.goto("https://webdriveruniversity.com/?utm_source=chatgpt.com");
//Try to click on the block
await page.locator("//h4[text()='Drag, Drop, Hover, Double Click']").click();

//drag and drop action
await page.locator("//b[text()='DRAG ME TO MY TARGET!']").dragTo(page.locator("//b[text()='Dropped!']"));

//double click
await page.locator("//h2[text()='Double Click Me!']").dblclick();

// 
await page.locator("//button[text()='Hover Over Me First!']").hover();
await page.locator("//*[@id='div-hover']/div[1]/div/a").click();

});