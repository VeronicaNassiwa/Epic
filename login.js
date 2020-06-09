function loggin(){
    let email_address=document.getElementById('email');
    let password=document.getElementById('password1');

    let url='https://epicmail-sentongo-v2.herokuapp.com/api/v2/auth/signin';

    fetch(url,{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
            "email_address":email_address.value,
            "password":password.value
        })
        }).then(response =>response.json())
        .then(data => {
            if(data.status===200){
                document.getElementById('postig').innerHTML="You have sinined in successfully";
                window.location.replace("Home.html");
            }else if(data.status===404){
                document.getElementById('postig').innerHTML="Bad email and/or password";
            }
            else if(data.status===400){
                document.getElementById('postig').innerHTML="Provide correct details";
            }
        })
}