const temp = 200;
if (temp > 0 && temp <= 30){
    console.log("the weather is good");
}
else{
    console.log("the weather is bad");
}
const is_sunny = true;
if (!is_sunny)
{
    console.log("it is not sunny");
}
else{
    console.log("it is sunny");
}
if (!is_sunny || temp < 10)
{
    console.log("it is cold");
}
else{
    console.log("it is not cold");
}