exports.Homepage=class Homepage{
    constructor(page)
    {
        this.page=page;
        this.productlink="//*[@id='tbodyid']/div/div/div/h4/a";
        this.addToCart="//*[@id='tbodyid']/div[2]/div/a";
        this.cartclick="#cartur";
    }

    //methods
    async addToProduct(productlist)
    {
       const products= this.page.$$(this.productlink)
       for(const product in products)
       {
        if(productlist===this.product.textContent())
        {
            await product.click();
            break;
        }
       }

       await this.page.on("dialog",async dialog =>{
         await this.page.waitForTimeout(3000);
         await this.dailog('accept');
       })
       await this.page.locator(this.addToCart).click();
    }

    async clickoncart()
    {
        await this.page.locator( this.cartclick).click();
    }        
    }

