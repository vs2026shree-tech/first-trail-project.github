const{test, expect}=require("@playwright/test");
import { SauceLogin } from "../../page/saucelab/SauceLogin";

test("validation for sauce_login page",async function({page}){
//create the object to the call the method:
const login=new SauceLogin(page);
await login.Navigate_URL();
await login.credentical("standard_user","secret_sauce");
await login.loginButton();
await expect(page.locator("[data-test='add-to-cart-sauce-labs-backpack']")).toBeVisible("Add to cart")
await login.MenuBar();
await login.Logout();
})

test("validation for sauce_login page with in valid",async function({page}){
//create the object to the call the method:
const login=new SauceLogin(page);
await login.Navigate_URL();
await login.credentical("standard_user","secret_satuce");
await login.loginButton();
await expect(page.locator("[data-test='add-to-cart-sauce-labs-backpack']")).toBeVisible("Add to cart")
})