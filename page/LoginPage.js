exports.LoginPage=class LoginPage{
    constructor(page)
    {
        this.page=page;
        this.username=page.locator("//input[@name='username']");
        this.password=page.locator("//input[@name='password']");
        this.loginbutton=page.locator("//button[@type='submit']");  
    }
    //method
   async GotoUrl(){
    //await this.page.waitForTimeout(30000)
     await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
 }
   async logindetails(username1,password1)
    {
        //await this.page.waitForTimeout(30000);
        await this.username.fill(username1);
        await this.password.fill(password1);

    }
    async clickonlogin(){
        await this.loginbutton.click();
        //await this.page.pause();
    } 

    
}
