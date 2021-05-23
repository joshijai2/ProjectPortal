function welcome() {
  $("#welcome").empty().append("Welcome " + sessionStorage.getItem("name") + " " + sessionStorage.getItem("uid"));
}

function viewProject(uuid){
  
}

function display(projects, page = 1) {
  sessionStorage.setItem("page",page);
  welcome();
  console.log(projects);
  let n = projects.length;
  console.log("project ka length",n);
  let start_index = 6* (page - 1);
  let end_index = Math.min(start_index + 6, n);
  console.log("endindex",end_index);
  let rows = Math.ceil((end_index - start_index) / 3)
  console.log("rows",rows);
  $('#projects').empty();
  for (let row = 1; row <= rows; row++) {
    $('#projects').append('<div id="row' + row + '" class="row"></div>');

    let start = start_index + 3 * (row - 1);
    let end = Math.min(start + 2, n - 1);

    console.log('start :>> ', start);

    for (let i = start; i <= end; i++) {
    
      $("#row" + row).append(
        `
        <div class="col-lg-4 d-flex flex-column justify-content-center" style="padding: 3%;">
          <div id="` + i + `" class="card bg-card" onclick="viewProject(` + projects[i]["uuid"] + `)" style="width: 18rem;">
            <div class="card-body">
              <h4 class="card-title">`+ projects[i]["title"] + `</h4>
              <h5 class="card-text">`+ projects[i]["domain"]+`</h5>
              <h5 class="card-text">`+ projects[i]["faculty"]+`</h5>
              <a href="viewproject.html" class="btn btn-card">View Project</a>
            </div>
          </div>
          </div>
  
      
        `
      );
    }
  }
};

function showpage(pages) {
  if(pages>1)
  {
    $("#pageno").append(`<nav aria-label="...">
    <ul class="pagination">
      <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1">Previous</a>
      </li>`)
     for(let i= 1;i<=pages;i++)
     {
      $("#pageno").append(`<li class="page-item"><a class="page-link" onclick="display(JSON.parse(sessionStorage.getItem('projects')),`+i+`)">`+i+`</a></li>`)
     }
    $("#pageno").append(`
     
     <li class="page-item">
        <a class="page-link" >Next</a>
      </li>
    </ul>
  </nav>`)
  }
}

function loadProjects() {
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log('this.responseText :>> ', this.responseText);
      console.log('this.status :>> ', this.status);

      if (this.status >= 200 && this.status < 400) {
        // The request has been completed successfully
        var data = JSON.parse(this.responseText);
        sessionStorage.setItem("projects", JSON.stringify(data));
        sessionStorage.setItem("page", 1);
        let n = data.length;
        let pages = Math.ceil(n / 6);
        console.log(n);
        display(data);
        showpage(pages);
        console.log(pages);
      

      } else {
        alert("Error in loading projects! Please reload.");
      }
    }
  });

  xhr.open("GET", "https://projenarator.herokuapp.com/projects/new/");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", sessionStorage.getItem("Token"));

  xhr.send();
};

window.onpaint = loadProjects();

  // display(data, page)
