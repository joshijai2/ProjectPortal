// Logout --------------------------------------------------------------
$("#logout").on("click", function () {
    console.log('logout');
    sessionStorage.clear();
    window.location.replace('/');
});