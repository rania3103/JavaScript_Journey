function roll(){
    const numb = document.getElementById("numb").value;
    const dice_result = document.getElementById("dice_result");
    const dice_img = document.getElementById("dice_img");
    const values = [];
    const images = [];
    for (let index = 0; index < numb; index++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="../img/dices/${value}.png">`);
    }
    console.log(images);
    dice_result.textContent = `Dice: ${values.join(", ")}`;
    dice_img.innerHTML= images.join(" ");

}