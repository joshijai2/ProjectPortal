function preloadFunc() {
    //Is the user authenticated?
    if (sessionStorage.getItem('AuthenticationState') === null) {
        window.open("./", "_self");
    }
    //Is their authentication token still valid?
    else if (Date.now > new Date(sessionStorage.getItem('AuthenticationExpires'))) {
        window.open("./", "_self");
    }
    else {
        //The user is authenticated and the authentication has not expired.
    }
};
window.onpaint = preloadFunc();