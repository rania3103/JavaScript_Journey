function clock(){
    const time_now = new Date();
    const h = time_now.getHours();
    const m = time_now.getMinutes();
    const s = time_now.getSeconds ();
    const str_time = `${h}:${m}:${s}`;
    document.getElementById("clock").textContent = str_time;
}
clock();
setInterval(clock, 1000);