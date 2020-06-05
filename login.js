function lgin() {

    let email_address = document.getElementById("LNemail ");
    let password = document.getElementById("password1");

    const url = "https: //epicmail-sentongo-v2.herokuapp.com/api/v2/auth/signin";

    fetch(url, {
            method: "POST ",
            mode: "no-cors",
            headers: {
                "Content-type ":"application/json "
            },
            body: JSON.stringify({
                "email_address ":email_address.value,
                "password ":password.value
            })
        })
        .then((response) => response.json())
        .then((data) => {

            if (data.status === 201) {
                document.getElementById("postig").innerHTML = "You have succesfully signed in";
                document.write("You have signed in successfully");

            } else if (data.status === 405) {
                document.write("Incorrect Details");
            }
        })

}