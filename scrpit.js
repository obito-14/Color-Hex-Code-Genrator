let btnId =document.getElementById("btn");
let colorId =document.getElementById("color")

const updateColor=() =>{
    let randomNumber = Math.floor(Math.random()*16777215);

    let randomCode ="#" + randomNumber.toString(16);
    document.body.style.backgroundColor= randomCode;
    colorId.innerText = randomCode;
    console.log(randomNumber,randomCode)
}
    btnId.addEventListener("click",()=>{
    updateColor()
})
