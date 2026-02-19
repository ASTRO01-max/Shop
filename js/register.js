const elForm = document.querySelector(".form");
const elName = document.querySelector("#firstname");
const elLastName = document.querySelector("#lastname");
const elMail = document.querySelector("#mail");
const elPassword = document.querySelector("#password");
 
let baseUrl = "https://shop-co-backend-1.onrender.com";

elForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let registerObj = {
        firstName: elName.value,
        lastName: elLastName.value,
        email: elMail.value,
        password: elPassword.value,
    };

    register(registerObj)
});

function register(obj) {
    fetch(baseUrl + "/api/auth/login", {
        method: "POST",
        headers: {
            "Content-type": "Application/json",
        },
        body: JSON.stringify(obj)
    }).then((res) => {
        if (res) {
            console.log(res);
        }
        return res.json();
    })
    .then((data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = "/html/home.html";
    })
}
