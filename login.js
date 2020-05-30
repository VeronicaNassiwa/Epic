function lgin(){
    let email_address=document.getElementById('LNemail').value;
    let password=document.getElementById('password1').value;
    fetch('https://epicmail-sentongo-v2.herokuapp.com/api/v2/auth/signin',{
    method:'POST',
      body: JSON.stringify({ 
        email_address: "EmailAdd", 
        password: "Passwordd"})
})
    .then((response =>{console.log(response)
    }))
    .catch((err=>{console.log(err)}))
}
