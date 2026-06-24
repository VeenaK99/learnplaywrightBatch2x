let loggedIn = true;
let role = "editor";

if (loggedIn) {

    if (role === "admin") {
        console.log("logged in as admin");
    }
    else if (role === "editor") {
        console.log("logged in as editor");
    }
    else if (role === "guest") {
        console.log("logged in as GUEST");
    }
} else
    console.log("not logged in");