let temp = document.getElementById("temp");
const to_fahr = document.getElementById("to_fahrenheit");
const to_cel = document.getElementById("to_Celsius");
const res = document.getElementById("result");
function convert(){
    if (to_fahr.checked){
        res.textContent= (temp.value * (9 /5) + 32).toFixed(2);
    }
    else if (to_cel.checked){
        res.textContent= ((temp.value)-32 * 5 /9).toFixed(2);
    }
    else{
        res.textContent= "please select a unit";
    }
}