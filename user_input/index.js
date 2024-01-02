let username;
username = window.prompt("what's your username");
console.log(username);
//print the input
document.getElementById("btn").onclick = function(){
    user_name = document.getElementById("user_name").value;
    console.log(user_name);
    document.getElementById("h1").textContent = `welcome ${user_name}`;
}