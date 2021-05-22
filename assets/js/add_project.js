$("#addprj").on("click", function () {
    sessionStorage.setItem("prj_add", 0);
    var data = {
        "title": document.addnew.title.value,
        "start_date": document.addnew.sdate.value,
        "end_date": document.addnew.fdate.value,
        "file": document.addnew.file.value,
        "link": document.addnew.link.value,
        "author": " {\"author\" : [{\"name\" : \"" + document.addnew.sname.value + "\",\"regno\" : \"" + document.addnew.rno.value + "\"}]}",
        "faculty": document.addnew.faculty.value,

        // "file", fileInput.files[0], "VL2019205003491_DA.pdf"
        "course_code": document.addnew.code.value,
        "course_name": document.addnew.cname.value,
        "duration": document.addnew.duration.value,
        "description": document.addnew.desc.value
        // "domain" :document.addnew.domain.value,
        // "facultyid" :document.addnew.fid.value,

    };
    console.log(data);

    let error = "";
    let name = /^[A-Za-z0-9]+$/;
    let regno = /^[0-9]{2}[A-Z]{3}[0-9]{4}$/;
    let letters = /^[A-Za-z]+$/;
    // let urllink = /^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
    let coursecode = /^[A-Za-z]{3}[0-9]{4}$/;
    let duration = /^[0-9]+$/;

    let flag = 0

    if (!name.test(data['title'])) {
        error += ">> Enter proper name of Project! (No Special Characters)\n";
        flag = 1;
    }
    if (!regno.test(data['rno'])) {
        error += ">> Registration Number should be of the type 11XXX1111!\n";
        flag = 1;
    }
    if (!letters.test(data['sname'])) {
        error += ">> Student Name should consist of Alphabets!\n";
        flag = 1;
    }
    if (!letters.test(data['faculty'])) {
        error += ">> Faculty Name should consist of !\n";
        flag = 1;
    }
    // if (!urllink.test(data['link'])) {
    //     error += ">> Link should be of proper format!\n";
    //     flag = 1;
    // }
    if (!coursecode.test(data['code'])) {
        error += ">> Course Code should be of the format XXX1111!\n";
        flag = 1;
    }
    if (!letters.test(data['cname'])) {
        error += ">> Course Name should not contain any special characters or Numbers!\n";
        flag = 1;
    }
    if (!duration.test(data['duration'])) {
        error += ">> Duration should contain numbers (in months)!\n";
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