//fetch
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(response => {
    if(!response.ok){
        throw new Error("could not fetch ressource");
    }
    return response.json();
})
.then(data => console.log(data))
.catch(error => console.error(error));
// with async/await
async function fetchData(){
    try{
        const name = document.getElementById("name").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if(!response.ok){
            throw new Error("could not fetch ressource");
        }
        const data = await response.json();
        const sprite = data.sprites.front_default;
        const image = document.getElementById("image");
        image.src= sprite;
    }
    catch(error){
        console.error(error);
    }
}
fetchData();
