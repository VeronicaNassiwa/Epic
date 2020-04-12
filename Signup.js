function sign(){
    let myname=document.getElementById('name').value;
    let mylname=document.getElementById('lname').value;
    let myemail=document.getElementById('emaill').value;
    let mypasscode=document.getElementById('pasword').value;
    
  fetch('https://epicmail-sentongo.herokuapp.com/api/v1/auth/signup',{
    method:'POST',
    mode:'cors',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
  },
    body: JSON.stringify({myname:document.getElementById('name').value,
    myemail:document.getElementById('emaill').value,
    mypasscode:document.getElementById('pasword').value,
    mylname:document.getElementById('lname').value})
  })
  .then((response)=> response.json())
  .then((data)=>{
    console.log(data);
  })
  
  }