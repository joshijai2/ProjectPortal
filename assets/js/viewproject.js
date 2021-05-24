function viewProject() {
    let index = sessionStorage.getItem("viewIndex");
    let projects = JSON.parse(sessionStorage.getItem("projects"));
    let authors = JSON.parse(JSON.parse(projects[index]["author"]));

    for (let i in projects[0])
        if (projects[index][i] == null)
            projects[index][i] = "Unknown";

    $("#title").empty().append(projects[index]["title"]);
    $("#snames").empty().append(authors["name"]);
    $("#regno").empty().append(authors["regno"]);
    $("#sdate").empty().append(projects[index]["start_date"]);
    $("#edate").empty().append(projects[index]["end_date"]);
    $("#fname").empty().append(projects[index]["faculty"]);
    $("#fid").empty().append(projects[index]["facultyId"]);
    $("#link").empty().append(projects[index]["link"]);
    $("#ccode").empty().append(projects[index]["course_code"]);
    $("#cname").empty().append(projects[index]["course_name"]);
    $("#domain").empty().append(projects[index]["domain"]);
    $("#duration").empty().append(projects[index]["duration"]);
    $("#desc").empty().append(projects[index]["description"]);
}