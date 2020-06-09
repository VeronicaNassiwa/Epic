function send(){
    const token=localStorage.getItem('token');

    let message_details=document.getElementById("textare");
    let parent_message_id=document.getElementById("msgid");
    let reciever_id=document.getElementById("receiver_id");
    let sender_status=document.getElementById("sender_status");

     let url="https://epicmail-sentongo-v2.herokuapp.com/api/v2/messages";

     fetch(url,{
         method:"POST",
         headers:{"content-type":"application/json",
         "Authorization": `Bearer  ${token}`
        },
        body:JSON.stringify({
            "message_details": message_details.value,
            "parent_message_id": parent_message_id.value,
            "reciever_id": reciever_id.value,
            "sender_status": sender_status.value
        })
     }).then(response => response.json())
        .then(data => {
            console.log(data);
        })

}