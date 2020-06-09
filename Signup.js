function sign() {

    let email_address = document.getElementById("EmailAdd");
    let first_name = document.getElementById("FistName");
    let last_name = document.getElementById("LastName");
    let password = document.getElementById("Passwordd");

    const url = "https://epicmail-sentongo-v2.herokuapp.com/api/v2/auth/signup";
    fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "email_address":email_address.value,
                "first_name": first_name.value,
                "last_name": last_name.value,
                "password": password.value
            })
        }).then(response => response.json())
        .then(data => {

            if (data.status === 201) {
                document.getElementById('postig').innerHTML="You have signed up successfully";

            } else if (data.status === 400) {
                document.getElementById('postig').innerHTML="Provide correct details";
            }

        })

}


// fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-type ": "application/json",
//         },
//         body: JSON.stringify({
//             "email_address": email_address.value,
//             "first_name": first_name.value,
//             "last_name": last_name.value,
//             "password": password.value,
//         })

//     }).then(response => response.json())
//     .then(data => console.log(data))