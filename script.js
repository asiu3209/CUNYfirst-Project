const username = 
    ["aaron.siu@login.cuny.edu",
    "edison@login.cuny.edu",
    "alex@login.cuny.edu",
    "amal@login.cuny.edu"];
const password = ["1234",
    "abcdefgh",
    "87654321",
    "abcdefgh"];

function login(){
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const errors = document.getElementsByClassName("error");
    for(let i = 0; i < username.length; i++){
        if(user === username[i] && pass === password[i]){
            window.location.href = "cunyFirst.html";
            return;
        }
    }
    for (let error of errors) {
        error.style.display = 'block';
    }
}