var{expect}=require("@playwright/test")
exports.DashBoard=class DashBoard{
    constructor(page)
    {
        this.page=page;
        this.dashboardpage=page.locator("//h6[text()='Dashboard']");
        this.clickonAdmin=page.locator("//span[text()='Admin']");
        this.AddIcon=page.locator("//i[@class='oxd-icon bi-plus oxd-button-icon']")
        this.username=page.getByText('-- Select --').first();
        //page.getByRole('option', { name: 'ESS' })
        //page.getByText('-- Select --').first();
        this.employename=page.getByPlaceholder('Type for hints...').filter({hastext:'ab'})
        this.status=page.locator("//div[@class='oxd-select-text-input']").nth(1);
        this.user=page.getByRole('textbox', { name: 'Type for hints...' });
        //page.locator("//input[@class='oxd-input oxd-input--active']").nth(1);
        this.password=page.locator("//input[@type='password']").nth(0);
        this.confirmpassword=page.locator("//input[@type='password']").nth(1);
        this.submit=page.locator("//button[@type='submit']")
        //this.require=page.locator("getByText('Required').first()")
        this.require = page.getByText("Required", { exact: true });
       
    }
    async dashboard(){
        await expect(this.dashboardpage).toBeVisible();
    }
//Clicking on Admin
    async Admin()
    {
        await this.page.waitForTimeout(3000);
        await this.clickonAdmin.click();
    }
//clikcing on Addicon
    async AddIcons()
    {
        await this.AddIcon.click();
    }
    //taping on role and selecting thevalue
    async userName(nam)
    { 
    await this.username.fill(nam)
    await this.keyboard.press("Enter")
    //await this.page.keyboard.press("ArrowUp");
//await this.page.pause()
    }
//searching for the employee name
    async employee(emp)
    {
        await this.employename.fill(emp);
        //getByRole('textbox', { name: 'Type for hints...' }).fill('a');
        //await this.page.keyboard.press("ArrowUp");
        //await this.page.keyboard.press("Enter")
        //await expect(this.require).toBeVisible();
        
    }
//status
    async Status()
    {
        await this.status.click();
        await this.page.keyboard.press("ArrowDown");
          await this.page.keyboard.press("Enter")
        await this.page.waitForTimeout(3000);
         //await expect(this.require).toBeVisible();
    } 

    //username
    async usernamefield(name){
        await this.user.fill(name);
         //await expect(this.require).toBeVisible();
    }

    //password
    async passwordofuser(passwords){
        await this.password.fill(passwords);
        //await this.page.waitForTimeout(3000);
         //await expect(this.require).toBeVisible();
    }
    //confirm password
    async confirmpass(passwordss){
        await this.confirmpassword.fill(passwordss);
        //await this.page.waitForTimeout(3000);
         //await expect(this.require).toBeVisible();
    }

    //submitbutton
    async Submitbutton()
    {
        await this.submit.click();
    //      await expect(this.require).toBeVisible();
    //       await this.page.pause()
    // }
     //await expect(this.require).toBeVisible();

        const count = await this.require.count();
        console.log("Required messages displayed:", count);

        for (var i = 0; i < count; i++) {
            await expect(this.require.nth(i)).toBeVisible();
            
        }
        await this.page.pause()
    }
}
