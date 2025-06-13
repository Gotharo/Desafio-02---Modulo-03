const btnVerificar = document.querySelector("#btn-check");
const textWarning = document.querySelector("#text-warning");
const a = Number(document.querySelector("#count1").value);
const b = Number(document.querySelector("#count2").value);
const c = Number(document.querySelector("#count3").value);
let suma = a + b + c;

btnVerificar.addEventListener("click", allStickers)

function allStickers () {
    const a = Number(document.getElementById('count1').value);
    const b = Number(document.getElementById('count2').value);
    const c = Number(document.getElementById('count3').value);
    const suma = a + b + c;
    console.log(suma);
    if(suma >= 10){
            textWarning.textContent = "llevas demaciados Stickers"
        } else {
                return textWarning.textContent = `llevas  ${suma}  stickers` ;
            }
            
};
        

