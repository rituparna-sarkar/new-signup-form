function nameCheck() {
    const firstName = document.getElementById("firstName").value;
    const regex_firstName = /^[A_Za-z]{5,15}$/;
    if (!regex_firstName.test(firstName)) {
        document.getElementById("nameErr").style.display = 'block'
        document.getElementById("nameErr").innerHTML = "FirstName should contain 5-15 characters"
    }
    else {
        document.getElementById("nameErr").style.display = 'none'
    }
}
function checkUser() {
    const user = document.getElementById("userName").value;
    const regex_user = /^[A-Za-z0-9]{5,12}$/;

    if (!regex_user.test(user)) {
        document.getElementById("userErr").style.display = 'block'
        document.getElementById("userErr").innerHTML = "FirstName should contain 5-12 characters"
    }
    else {
        document.getElementById("userErr").style.display = 'none'
    }
}
function checkEmail() {
    const email = document.getElementById("email").value;
    const regex_email = /^[A-Za-z]{2,}@[a-z]{3,}[.]{1}[A-Za-z.]{3,6}$/;

    if (!regex_email.test(email)) {
        document.getElementById("emailErr").style.display = 'block'
        document.getElementById("emailErr").innerHTML = "Email must be a valid address e.g me@mydomain.com"
    }
    else {
        document.getElementById("emailErr").style.display = 'none'
    }
}
function checkPassword() {
    const password = document.getElementById("password").value;
    const regex_password = /^(?=.*[!@#$%^&*?-_A-Za-z0-9 ]).{8,20}$/;
    if (!regex_password.test(password)) {

        document.getElementById("passwordErr").style.display = 'block'
        document.getElementById("passwordErr").innerHTML = "Password must alphanumeric (@,_and -are also allowed) and be 8-20 characters"
    }
    else {
        document.getElementById("passwordErr").style.display = 'none'
    }
}
function checkTelephone() {
    const telephone = document.getElementById("telephone").value;
    const regex_telephone = /^[6-9]\d{9}$/;
    if (!regex_telephone.test(telephone)) {

        document.getElementById("telErr").style.display = 'block'
        document.getElementById("telErr").innerHTML = "Telephone must be a valid Indian Telephone number (10 digits)";

    }
    else {
        document.getElementById("telErr").style.display = 'none'
    }
}

function checkPan() {
    const pancard = document.getElementById("pancard").value;
    const regex_pancard = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    if (!regex_pancard.test(pancard)) {

        document.getElementById("pancardErr").style.display = 'block'
        document.getElementById("pancardErr").innerHTML = "Must be a valid panCard Number";
    }
    else {
        document.getElementById("pancardErr").style.display = 'none'
    }
}
