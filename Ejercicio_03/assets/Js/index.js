const passMessage = document.querySelector("#message");
const btnIng = document.querySelector("#btnIng");

function passWord() {
     const selectOne = Number(document.querySelector("#select-1").value);
     const selectTwo = Number(document.querySelector("#select-2").value);
     const selectTree = Number(document.querySelector("#select-3").value);

    if (selectOne === 9 && selectTwo === 1 && selectTree === 1) {
        return passMessage.textContent = "password 1 es correcto";
    } else if (selectOne === 7 && selectTwo === 1 && selectTree === 4) {
        return passMessage.textContent = "password 2 es correcto";
    } else {
        return passMessage.textContent = "password incorrecto";
}};

btnIng.addEventListener("click", passWord);