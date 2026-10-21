const {test,expect}=require("@playwright/test");
var userid;
//get request
test("get request validation",async function({request})
{
const Response=await request.get("https://reqres.in/api/users?page=2");
console.log(await Response.json());
await expect(Response.status()).toBe(200)
}) 

//post request 
test("post request validation",async function({request})
{//need to pass the values in the post
const Response=await request.post("https://reqres.in/api/users",{data:{
    "Name":"Michale",
    "Job":"Tester"},
    Header:{"Content-Type": "application/json"}
});
console.log(await Response.json())
await expect(Response.status()).toBe(201);
//to know the id 
var res=await Response.json()
userid=res.id;
});


//patch 
test("validation for patch",async function({request}){
const response=await request.patch("https://reqres.in/api/users/"+userid,
    {data:{"Name":"Michale",
        "Job":"Astronut",
        "email":"joshna@gmail.com",
    },
 Header:{"Content-Type": "application/json"}
})
console.log(await response.json())
await expect(response.status()).toBe(200);
var res=await response.json()
userid=res.id;
})

//Delete
test("Validation for delete", async function({request}){
    const response=await request.delete('https://reqres.in/api/users/'+userid);
    await expect(response.status()).toBe(204);
   
})

//});