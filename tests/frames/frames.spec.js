const {test}=require("@playwright/test")



test("validation for frame", async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");

    const frames = page
        .frameLocator('iframe[src="frame_1.html"]')
        .locator('//input[@name="mytext1"]');
   await page.waitForTimeout(3000)
    await frames.fill("fieldvalues");
   
    await expect(frames).toHaveValue(" ");
});
