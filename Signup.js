    function sign() {
        let mail_address = document.getElementById("EmailAdd");
        let fist_name = document.getElementById("FistName");
        let lat_name = document.getElementById("LastName");
        let pasword = document.getElementById("Passwordd");
        const url = 'https://epicmail-sentongo-v2.herokuapp.com/api/v2/auth/signup';

        fetch(url, {
            method: "POST",
            //mode: "no-cors",
            headers: {
                "Content - type ": "application/json",
            },
            body: JSON.stringify({
                    "email_address": mail_address.value,
                    "first_name": fist_name.value,
                    "last_name": lat_name.value,
                    "password": pasword.value
                })
                .then((response) => {
                    return response.json()
                })
                .then((data) =>
                    console.log(data))
        })

    }