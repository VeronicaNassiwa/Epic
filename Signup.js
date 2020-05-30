function sign(){
    let email_address=document.getElementById("EmailAdd").value;
    let first_name=document.getElementById("FistName").value;
    let last_name=document.getElementById("LastName").value;
    let password=document.getElementById("Passwordd").value;
    
  fetch('https://epicmail-sentongo-v2.herokuapp.com/api/v2/auth/signup',{
    method:'POST',
    mode:"no-cors",
    headers: {
      'Content-type': 'application/json'
  },
    body: JSON.stringify({ 
      email_address: "EmailAdd",
      first_name: "FistName", 
     last_name: "LastName", 
      password: "Passwordd"})
})
  .then((res=>{console.log(res)}))
  .catch((err=>{console.log(err)}))

}