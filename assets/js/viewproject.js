function viewProject() {
    let index = sessionStorage.getItem("viewIndex");
    let projects = JSON.parse(sessionStorage.getItem("projects"));
    let authors = JSON.parse(projects[index]["author"]);
    $("title").replaceAll(projects[index]["title"]);
    $("snames").replaceAll(authors["name"]);
    $("regno").replaceAll(author["regno"]);
}

window.onpaint = viewProject();