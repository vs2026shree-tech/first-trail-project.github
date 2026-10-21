const {test,expect}=require("@playwright/test");
import  userschema from "../../schema/schemaresponse.json";
import {Ajv} from "ajv";
test.describe("group1", function(){
test("validation for schema structure body", async function ({request})
{
    const response=await request.post("https://petstore.swagger.io/v2/pet",{data:{
        
  "id": 9223372000001084000,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
})
const responsebody=await response.json();
//create the object-another json validation
//const ajv=new Ajv();
const ajv=new Ajv();
const valid=ajv.compile(userschema);
const result=valid(responsebody);
console.log(response)
console.log(result);
expect(result).toBeTruthy();
})
})
test.describe("group2", function(){
test("validation for schema structure body invalid", async function ({request})
{
    const response=await request.post("https://petstore.swagger.io/v2/pet",{data:{
        
  "id": 9223372000001084000,
  "category": {
    "ids": 0,
    "username": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
})
const responsebody=await response.json();
//create the object-another json validation
//const ajv=new Ajv();
const ajv=new Ajv();
const valid=ajv.compile(userschema);
const result=valid(responsebody);
console.log(response)
console.log(result);
expect(result).toBeFalsy();
})
})




