$("#addprj").on("click", function () {
    sessionStorage.setItem("prj_add", 0);
    var data = {
        "title": document.addnew.text.value,
        "start_date": document.addnew.sdate.value,
        "end_date": document.addnew.fdate.value,
        "file": document.addnew.file.value,
        "link": document.addnew.link.value,
        "author": " {\"author\" : [{\"name\" : \"" + document.addnew.sname.value + "\",\"regno\" : \"" + document.addnew.rno.value + "\"}]}",
        "faculty": document.addnew.faculty.value,

        // "file", fileInput.files[0], "VL2019205003491_DA.pdf");
        "course_code": document.addnew.code.value,
        "course_name": document.addnew.cname.value,
        "duration": document.addnew.duration.value,
        "description": document.addnew.desc.value,
        // "domain" :document.addnew.domain.value,
        // "facultyid" :document.addnew.fid.value,

    };
    console.log(data);

    let error = "";
    let name = /^[A-Za-z]$/;
    let regno = /^[0-9]{2}[A-Z]{3}[0-9]{4}$/;

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
                sessionStorage.setItem("prj_add", 1);

                window.location.replace('dashboard.html')
            } else {
                try {
                    var data = JSON.parse(this.responseText);
                    alert(Object.values(data)[0][0]);
                } catch (err) {
                    alert("Error in adding project");
                }
            }
        }
    });

    xhr.open("POST", "https://projenarator.herokuapp.com/projects/new/");
    xhr.setRequestHeader("Content-Type", "multipart/form-data");
    xhr.setRequestHeader("Authorization", sessionStorage.getItem("Token"));
    xhr.send(JSON.stringify(data));
});