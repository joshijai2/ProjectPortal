// Faculty Signup
// -----------------------------------------------------------

function facultySignup() {
    var data = JSON.stringify({
        "name": document.facultySignup.name,
        "uid": document.facultySignup.uid,
        "email": document.facultySignup.email,
        "password": document.facultySignup.pass
    });
    console.log(data);
    // var xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;

    // xhr.addEventListener("readystatechange", function () {
    //     if (this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // });
    // xhr.open("POST", "https://projenarator.herokuapp.com/register-faculty/");
    // xhr.setRequestHeader("Content-Type", "application/json");

    // xhr.send(data);
    // xhr.onload = () => { console.log(this.responseText) };
    // console.log(this.status);
};

// Faculty Signin
// -----------------------------------------------------------

function facultySignin() {
    console.log("fac signin")
};


// Student Signup
// -----------------------------------------------------------

function studentSignup() {
    var data = {
        "name": document.studentSignup.name,
        "uid": document.studentSignup.uid,
        "email": document.studentSignup.email,
        "password": document.studentSignup.pass
    }
};


// Student Signup
// -----------------------------------------------------------

function studentSignin() {
    console.log("stu signin")
};
