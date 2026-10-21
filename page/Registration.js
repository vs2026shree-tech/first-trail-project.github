const {expect}=require("@playwright/test")
exports.Registration=class Registration{
    constructor(page)
    {
        this.page=page;
        this.Name=page.locator("#name");
        this.Company=page.locator("#company");
        this.Email=page.locator("#email");
        this.Password=page.locator("#password");
        this.Confirmpwd=page.locator("#password-confirm");
        this.Register=page.locator("//button[@type='submit']").click();
        this.expected=page.locator("//div[text()='Register']");
    }
    //mentod
    async RegisterUrl()
    {
        await this.page.goto("https://blazedemo.com/register ")

    }
//name field
    async name(namefield){
        await this.Name.fill(namefield)
        await expect(this.expected).toHaveText("Register");
    }

    //company
    async company(companyfield){
        await this.Company.fill(companyfield);
    }
    //email
    async email(emailfield){
        await this.Email.fill(emailfield);
    }
    //password
    async pwd(passwordfield){
        await this.Password.fill(passwordfield);
    }
    //confirm password
    async cnf_pwd(cmfpasswordfield){
        await this.Confirmpwd.fill(cmfpasswordfield);
    }
    //Registrarion
    async register(){
        await this.Register.click();
    console.log("page title is :",await this.page.title())
    console.log("page URL is :",await this.page.url())
    }
    
}