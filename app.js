let bgFlipperBtn = document.getElementById("bg-changer")
let showColorName  = document.getElementById("showColorName")

let myBody = document.getElementsByTagName("body")[0]
let colorsArray = ["red", "pink", "yellow", "green", "Mustard" ,"blue","orange","olive","purple","black","white","gray"]

const bgFlipperHandler = () => {
    console.log("han dost keys ho...");

    let randomNum = Math.floor(Math.random() * colorsArray.length);

    myBody.style.backgroundColor = colorsArray[randomNum]
    showColorName.innerHTML = "Color Name:" + " " +  colorsArray[randomNum]
}

bgFlipperBtn.addEventListener("click", bgFlipperHandler)