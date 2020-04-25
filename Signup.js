function sign(){
    let email_add=document.getElementById("EmailAdd").value;
    let first_name=document.getElementById("FistName").value;
    let last_name=document.getElementById("LastName").value;
    let password=document.getElementById("Passwordd").value;
    
  fetch('https://epicmail-sentongo.herokuapp.com/api/v1/auth/signup',{
    method:'POST',
    mode:"no-cors",
    headers: {
      'Content-type': 'application/json'
  },
    body: JSON.stringify({ "email_add": "EmailAdd", "first_name": "FistName", "last_name": "LastName", "password": "Passwordd"})
  })
  .then((response)=>response.json())
  .then((data)=>{
    console.log(data);
  })
  .catch(error => { console.log("error",error.massage)});
  
  }