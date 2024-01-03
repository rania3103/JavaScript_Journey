let username = "";
while (username === "" || username === null){
    username = window.prompt("enter your name");
}
console.log(`hello ${username}`);
/////////
let logged_in = false;
let user_name;
let pwd;
while (! logged_in)
{
    do{
        user_name= window.prompt("enter username");
    }while(user_name === null);

    do{
        pwd= window.prompt("enter password");
    }while(pwd === null);
    if (user_name == "rania")
    {
        logged_in = true;
        console.log(`hello ${user_name} you are logged in`);
        break;
    }
    else{
        alert("invalid credentials");
    }
}
