// step:1 add the event handler with the submit button
document.getElementById('btn-submit').addEventListener("click", function () {
    // step:2 get the email adderss inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    emailField.value = "";
    // step-3 get the password
    // 1.set the id on the html element
    // 2.get the element
    // 3.get the value from, the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    passwordField.value = "";

    // DANGER:DO NOT VERIFY EMAIL OR PASSWORD ON THE CLIENT SIDE
    // step:4 verify emaail and password
    if (email === 'shontan@baap.com' && password === 'taka de') {
        window.location.href = "bank.html";
        console.log("Valid User");
    }
    else {
        alert("Invalid User");
    }


})