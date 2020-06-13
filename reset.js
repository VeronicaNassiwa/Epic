function resetp(){
    let email_address= document.getElementById('emailadd');
    let new_password= document.getElementById('Passwad');

    let url="https://epicmail-sentongo-v2.herokuapp.com/api/v2/auth/reset";

    fetch(url,{
        method:"POST",
        headers:{"content-type":"application/json"
    },
    body:JSON.stringify({
        "email_address": email_address.value,
        "new_password": new_password.value
    })

    })
    .then(response => response.json())
    .then(data =>{
        if(data.status === 200){
            document.getElementById('resst').innerHTML="User password Succesfully updated";
        }else if(data.status === 404){
            document.getElementById('resst').innerHTML="No such record";
        }
    } )
}