let form1 = document.querySelector("#form1");
let user_name = document.querySelector("#username");
let usermessage = document.querySelector(".usermessage");

let email = document.querySelector("#email");
let emailmessage = document.querySelector(".emailmessage");

let phone = document.querySelector("#tele");
let phonemessage = document.querySelector(".telemessage");

let password1 = document.querySelector("#password1");
let passwordmessage1 = document.querySelector(".passwordmessage1");

let password2 = document.querySelector("#password2");
let passwordmessage2 = document.querySelector(".passwordmessage2");

//registration

form1.addEventListener("submit", (e) => {
  if (user_name.value == "") {
    usermessage.innerHTML = "username can not be empty";
    e.preventDefault();
  } else if (user_name.value.length > 9) {
    usermessage.innerHTML = "username must be at least 9 character";
    e.preventDefault();
  } else if (isNaN(phone.value) || phone.value == "") {
    phonemessage.innerHTML = "phone should be numbers only";
    e.preventDefault();
  } else if (password1.value == "" || password1.value.length > 10) {
    passwordmessage1.innerHTML = "password should be at least 10 characters";
    e.preventDefault();
  } else if (password2.value != password1.value) {
    passwordmessage2.innerHTML = "password don't match";
    e.preventDefault();
  } else {
    alert("congrats🎉you've signed up✅ successfully");
  }
  if (user_name.value != "" && user_name.value.length < 9) {
    usermessage.innerHTML = "";
  }
  if (password1.value != "" && password1.value.length < 10) {
    passwordmessage1.innerHTML = "";
  }

  let user = {
    username: user_name.value,
    password: password1.value,
    mail: email.value,
    tele: phone.value,
  };

  localStorage.setItem("user", JSON.stringify(user));
});

//log in
let form2 = document.querySelector("#form2");

let user_name2 = document.querySelector("#username2");
let usermessage2 = document.querySelector(".usermessage2");

let password3 = document.querySelector("#password3");
let passwordm3 = document.querySelector(".passwordmessage3");

form2.addEventListener("submit", (event) => {
  let data = JSON.parse(localStorage.getItem("user"));
  if (user_name2.value === data.username && password3.value === data.password) {
    alert("login successfully");
  } else if (user_name2.value != data.username) {
    usermessage2.innerHTML = "incorrect username";
    event.preventDefault();
  } else if (password3.value != data.password) {
    passwordm3.innerHTML = "incorrect password";
    event.preventDefault();
  }

  if (user_name2.value === data.username) {
    usermessage2.innerHTML = "";
  }

  if (password3.value === data.password) {
    passwordm3.innerHTML = "";
  }
});

//switch from log in to register and viceversa
let llog = document.querySelector(".log");
let sign = document.querySelector(".sign");
llog.addEventListener("click", () => {
  form1.style.display = "none";
});

sign.addEventListener("click", () => {
  form1.style.display = "flex";
  form1.style.zIndex = "2";
});
