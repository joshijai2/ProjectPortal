// Faculty Signup
// -----------------------------------------------------------
$("#facSignupBtn").on("click", function () {
    var data = JSON.stringify({
        "name": document.facultySignup.name.value,
        "uid": document.facultySignup.uid.value,
        "email": document.facultySignup.email.value,
        "password": document.facultySignup.pass.value
    });

    console.log(data);

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log('this.responseText :>> ', this.responseText);
            console.log('this.status :>> ', this.status);

            if (this.status === 0 || (this.status >= 200 && this.status < 400)) {
                // The request has been completed successfully

                var data = JSON.parse(this.responseText)
                localStorage.setItem("Token", "Token " + data.token)
                localStorage.setItem("name", data.name)
                localStorage.setItem("email", data.email)
                localStorage.setItem("uid", data.uid)
                window.location.replace('dashboard.html')
            }
        }
    });

    xhr.open("POST", "https://projenarator.herokuapp.com/register-faculty/");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);


});

// Faculty Signin
// -----------------------------------------------------------
$("#facSigninBtn").on("click", function () {
    var data = JSON.stringify({
        "uid": document.facultySignin.uid.value,
        "password": document.facultySignin.pass.value
    });

    console.log(data);

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log('this.responseText :>> ', this.responseText);
            console.log('this.status :>> ', this.status);

            if (this.status === 0 || (this.status >= 200 && this.status < 400)) {
                // The request has been completed successfully

                var data = JSON.parse(this.responseText)
                localStorage.setItem("Token", "Token " + data.token)
                localStorage.setItem("name", data.name)
                localStorage.setItem("email", data.email)
                localStorage.setItem("uid", data.uid)
                window.location.replace('dashboard.html')
            }
        }
    });

    xhr.open("POST", "https://projenarator.herokuapp.com/login/");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);
});

// Student Signup
// -----------------------------------------------------------

$("#stuSignupBtn").on("click", function () {
    var data = JSON.stringify({
        "name": document.studentSignup.name.value,
        "uid": document.studentSignup.uid.value,
        "email": document.studentSignup.email.value,
        "password": document.studentSignup.pass.value
    });

    console.log(data);

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log('this.responseText :>> ', this.responseText);
            console.log('this.status :>> ', this.status);

            if (this.status === 0 || (this.status >= 200 && this.status < 400)) {
                // The request has been completed successfully

                var data = JSON.parse(this.responseText)
                localStorage.setItem("Token", "Token " + data.token)
                localStorage.setItem("name", data.name)
                localStorage.setItem("email", data.email)
                localStorage.setItem("uid", data.uid)
                window.location.replace('dashboard.html')
            }
        }
    });

    xhr.open("POST", "https://projenarator.herokuapp.com/register-student/");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);
});

// Student Signin
// -----------------------------------------------------------

$("#stuSigninBtn").on("click", function () {
    var data = JSON.stringify({
        "uid": document.studentSignin.uid.value,
        "password": document.studentSignin.pass.value
    });

    console.log(data);

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log('this.responseText :>> ', this.responseText);
            console.log('this.status :>> ', this.status);

            if (this.status === 0 || (this.status >= 200 && this.status < 400)) {
                // The request has been completed successfully

                var data = JSON.parse(this.responseText)
                localStorage.setItem("Token", "Token " + data.token)
                localStorage.setItem("name", data.name)
                localStorage.setItem("email", data.email)
                localStorage.setItem("uid", data.uid)
                window.location.replace('dashboard.html')
            }
        }
    });

    xhr.open("POST", "https://projenarator.herokuapp.com/login/");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);
});
