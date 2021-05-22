$("#addproject").on("click", function () {
    var data = {
        "uid": document.formanme.field.value,
        "password": document.studentSignin.pass.value
    };
    console.log(data);

    let error = "";
    let uid = /^[0-9]{2}[A-Z]{3}[0-9]{4}$/;
    let password = /^.{8,}$/;
    let flag = 0

    if (!uid.test(data['uid'])) {
        error += ">> Enter correct format of Reg No.!\n";
        flag = 1;
    }
    if (!password.test(data['password'])) {
        error += ">> Password must be of atleast length 8!\n";
        flag = 1;
    }
    if (flag) {
        return alert(error);
    }

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log('this.responseText :>> ', this.responseText);
            console.log('this.status :>> ', this.status);

            if (this.status === 0 || (this.status >= 200 && this.status < 400)) {
                // The request has been completed successfully
                var data = JSON.parse(this.responseText)
                if (data.ac_type == "Student") {
                    
                    window.location.replace('dashboard.html')
                }
                else {
                    alert("The account does not belong to Student! Try faculty login.")
                }
            } else {
                try {
                    var data = JSON.parse(this.responseText);
                    alert(Object.values(data)[0][0]);
                }
                catch (err) {
                    alert("Error signing in! Please contact admin.");
                }
            }
        }
    });

    xhr.open("POST", "https://projenarator.herokuapp.com/add/");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(JSON.stringify(data));
});