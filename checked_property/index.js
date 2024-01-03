const subscribe = document.getElementById("subscribe");
const pizza = document.getElementById("pizza");
const ma9loub = document.getElementById("ma9loub");
const result = document.getElementById("result");
const result2 = document.getElementById("result2");
const sub = document.getElementById("sub");
sub.onclick = function(){
    if (pizza.checked)
    {
        result.textContent= `You like ${pizza.value}`;
    }
    else if (ma9loub.checked)
    {
        result.textContent= `You like ${ma9loub.value}`;
    }


    if (subscribe.checked)
    {
        result2.textContent= `You are subscribed`;
    }
    else
    {
        result2.textContent= `You are not subscribed`;
    }
}