function display(projects, page = 1) {
  let n = projects.length;
  let start_index = 6 * (page - 1);
  let end_index = min(start_index + 6, n - 1);

  let rows = math.ceil((end_index - start_index) / 2)

  for (let row = 1; row <= rows; row++) {
    $('#projects').append('<div id="row' + row + '" class="row"></div>');
    let end = min(start_index + 3, n - 1);
    for (let i = start_index; i <= end; i++)
      $("#row" + row).append(
        `
        <div class="col-lg-4 d-flex flex-column justify-content-center">
          <div id="` + projects[i]["uuid"] + `" class="card bg-card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">`+ projects[i]["title"] + `</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem</p>
              <a href="viewproject.html" class="btn btn-card">View Project</a>
            </div>
          </div>
        </div>
        `
    );
  }
};

function loadProjects() {
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log('this.responseText :>> ', this.responseText);
      console.log('this.status :>> ', this.status);

      if (this.status === 0 || (this.status >= 200 && this.status < 400)) {
        // The request has been completed successfully
        var data = JSON.parse(this.responseText);
        sessionStorage.setItem("projects", data);
        sessionStorage.setItem("page", 1);
        let n = projects.length;
        let pages = math.ceil(n / 6);
        display(data);

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
