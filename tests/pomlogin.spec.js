var {test}=require("@playwright/test");
var{LoginPage}=require("../page/LoginPage");
const { DashBoard } = require("../page/DashBoard");

test("validation on OrangeHrmPage", async function({page})
{
    //create the object for LoginPage
    const login=new LoginPage(page);
    await login.GotoUrl();
    await login.logindetails("Admin","admin123")
    await login.clickonlogin();


    //home pageda
    const dashboards=new DashBoard(page)
    await dashboards.dashboard();
    await dashboards.Admin();
    await dashboards.AddIcons();
    await dashboards.userName("ESS");
    await dashboards.employee("Peter Mac Anderson");
    await dashboards.Status();
    await dashboards.usernamefield("Reemajoe");
    await dashboards.passwordofuser("Reena@1234#");
    await dashboards.confirmpass("Reena@1234#");
    await dashboards.Submitbutton();

});
