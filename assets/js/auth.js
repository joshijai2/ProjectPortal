Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + (h * 60 * 60 * 1000));
    return this;
}

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

                sessionStorage.setItem("Token", "Token " + data.token)
                sessionStorage.setItem("ac_type", data.ac_type)
                sessionStorage.setItem("name", data.name)
                sessionStorage.setItem("email", data.email)
                sessionStorage.setItem("uid", data.uid)

                //The user has successfully authenticated.
                sessionStorage.setItem("AuthenticationState", "Authenticated");

                //This authentication key will expire in 1 hour.
                sessionStorage.setItem("AuthenticationExpires", new Date().addHours(1));

                window.location.replace('dashboard.html')
            } else {
                var data = JSON.parse(this.responseText)
                alert(data.non_field_errors);
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

                sessionStorage.setItem("Token", "Token " + data.token)
                sessionStorage.setItem("ac_type", data.ac_type)
                sessionStorage.setItem("name", data.name)
                sessionStorage.setItem("email", data.email)
                sessionStorage.setItem("uid", data.uid)

                //The user has successfully authenticated.
                sessionStorage.setItem("AuthenticationState", "Authenticated");

                //This authentication key will expire in 1 hour.
                sessionStorage.setItem("AuthenticationExpires", new Date().addHours(1));

                window.location.replace('dashboard.html')
            } else {
                var data = JSON.parse(this.responseText)
                alert(data.non_field_errors);
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

                sessionStorage.setItem("Token", "Token " + data.token)
                sessionStorage.setItem("ac_type", data.ac_type)
                sessionStorage.setItem("name", data.name)
                sessionStorage.setItem("email", data.email)
                sessionStorage.setItem("uid", data.uid)

                //The user has successfully authenticated.
                sessionStorage.setItem("AuthenticationState", "Authenticated");

                //This authentication key will expire in 1 hour.
                sessionStorage.setItem("AuthenticationExpires", new Date().addHours(1));

                window.location.replace('dashboard.html')
            } else {
                var data = JSON.parse(this.responseText)
                alert(data.non_field_errors);
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

                sessionStorage.setItem("Token", "Token " + data.token)
                sessionStorage.setItem("ac_type", data.ac_type)
                sessionStorage.setItem("name", data.name)
                sessionStorage.setItem("email", data.email)
                sessionStorage.setItem("uid", data.uid)

                //The user has successfully authenticated.
                sessionStorage.setItem("AuthenticationState", "Authenticated");

                //This authentication key will expire in 1 hour.
                sessionStorage.setItem("AuthenticationExpires", new Date().addHours(1));

                window.location.replace('dashboard.html')
            } else {
                var data = JSON.parse(this.responseText)
                alert(data.non_field_errors);
            }
        }
    });

    xhr.open("POST", "https://projenarator.herokuapp.com/login/");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);
});