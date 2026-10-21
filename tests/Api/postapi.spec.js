const {test,expect}=require("@playwright/test");
test("validation for the post API", async function({request})
{
const response=await request.post("https://petstore.swagger.io/v2/store/order", {data:{
"id": 9,
  "petId": 10,
  "quantity": 0,
  "shipDate": "2026-10-16T16:39:15.072Z",
  "status": "placed",
  "complete": true
}
})
console.log(response)
console.log(await response.json());
expect(response.status()).toBe(200)
})
test("Validation for get Api",async function({request})
{
    const response=await request.get("https://petstore.swagger.io/v2/store/order/9")
    console.log(await response.json())
    console.log(response)
    expect(response.status()).toBe(200)
})
test("validation for patch",async function({request}){
const response=await request.put("https://petstore.swagger.io/v2/pet",{data:{
    "id": 9,
  "category": {
    "id": 10,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 2,
      "name": "string"
    }
  ],
  "status": "available"
}})
console.log(await response.json())
    console.log(response)
   expect(response.status()).toBe(200)
})

test("validation  for delete", async function({request}){
    const response =await request.delete("https://petstore.swagger.io/v2/store/order/8")
console.log(await response.json())
    console.log(response)
    expect(response.status()).toBe(404)
})