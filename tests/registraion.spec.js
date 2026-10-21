const {test}=require("@playwright/test");
const{Registration}=require("../page/Registration.js");
test("Validation on Registration page",async function({page})
{
    //create on object from the Pom 
    const Reg=new Registration(page);
    await Reg.RegisterUrl();
    await Reg.name("Joshn");
    await Reg.company("IBMs");
    await Reg.email("joshn@gmail.com")
    await Reg.pwd("joshn@134");
    await Reg.cnf_pwd("joshn@134");
    await Reg.register();

})