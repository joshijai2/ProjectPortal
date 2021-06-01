function preloadFunc() {
    //Is the user authenticated?
    if (sessionStorage.getItem('AuthenticationState') === null) {
        sessionStorage.clear();
        window.open("./", "_self");
    }
    //Is their authentication token still valid?
    else if (Date.now() > new Date(sessionStorage.getItem('AuthenticationExpires'))) {
        sessionStorage.clear();
        window.open("./", "_self");
    }
    else {
        console.log("The user is authenticated and the authentication has not expired.");

        let ac_type = sessionStorage.getItem("ac_type");
        let curr_loc = window.location.href.split("/");
        console.log('curr_loc[curr_loc.length-1] :>> ', curr_loc[curr_loc.length-1]);
        if (ac_type == "Student" &&
            curr_loc[curr_loc.length-1] == "dashboardf.html") {
            window.open("dashboard.html", "_self");
        }
        if (ac_type == "Faculty" &&
            (curr_loc[curr_loc.length-1] == "dashboard.html" || curr_loc[curr_loc.length-1] == "addproject.html")) {
            window.open("dashboardf.html", "_self");
        }

    }
};
window.onpaint = preloadFunc();