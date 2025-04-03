const username = 
    ["aaron.siu@login.cuny.edu",
    "edison@login.cuny.edu",
    "alex@login.cuny.edu",
    "amal@login.cuny.edu"];
const password = ["12345678",
    "abcdefgh",
    "87654321",
    "abcdefgh"];

function login(){
    const user = document.getElementById("username");
    const pass = document.getElementById("password");
    for(let i =0;i<username.length;i++){
        if(user === username[i] && pass === password[i]){
            console.log("sucessful login");//replace this with something else
            return;
        }
    }
    
}