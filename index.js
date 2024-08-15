let username;

document.getElementById("submit").onclick = function () {
    username = document.getElementById("textbox").value;
    console.log(username);
    document.getElementById("heading").textContent = `Hello ${username}`;
}


