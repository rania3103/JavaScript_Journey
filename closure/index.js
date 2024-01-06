function outer(){
    let name = "rania";
    function inner(){
        console.log(name);
    }
    inner();
}
outer();