// Given stored username and password and input username and password, Print if the user can login or not.

let data_username = "jiv@gamail.com";
let data_password =  "j1234";

let my_username = "jive@gamail.com";
let my_password = "j1234";

if(data_username === my_username){

  if(data_password === my_password){
    console.log("Login Successfully");
  }
  else{
    console.log("Incorrect Password");
  }
}
else{
  console.log("Incorrect Username");
}