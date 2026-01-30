function sayHi() {
    let userName = prompt("What is your name?");

    if (userName === null || userName === "") {
        alert("Hello! Nice to meet you 😊");
    } else {
        alert("Hello " + userName + "! Nice to meet you 😊");
    }
}

function changeTheme() {
    document.body.style.backgroundColor = "#dbeafe";
}