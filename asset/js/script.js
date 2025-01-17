// Actividad 1
const img = document.querySelector("#sticker_logo");

img.addEventListener("click", () => {
  if (img.style.border === "2px solid red") {
    img.style.border = "";
  } else {
    img.style.border = "2px solid red";
  }
});

// Actividad 2

const stkr1 = document.querySelector("#card1");
const stkr2 = document.querySelector("#card2");
const stkr3 = document.querySelector("#card3");
const stkr4 = document.querySelector("#card4");
const boton = document.querySelector("#btn_verificar");
let verificar = document.querySelector("#txt-verificar");

const limpiar = () => {
  stkr1.value = "";
  stkr2.value = "";
  stkr3.value = "";
  stkr4.value = "";
};
// Validaciones compra de stickers
boton.addEventListener("click", () => {
  let suma =
    Number(stkr1.value) +
    Number(stkr2.value) +
    Number(stkr3.value) +
    Number(stkr4.value);

  if (suma <= 10) {
    verificar.innerHTML = `El total de la suma es: ${suma}`;
  } else {
    verificar.innerHTML = "Llevas demasiados stickers";
  }

  limpiar();
});

// Actividad 3

const digito1 = document.querySelector("#digito1");
const digito2 = document.querySelector("#digito2");
const digito3 = document.querySelector("#digito3");
const btnPassword = document.querySelector("#btn-ingresar");
let ingresar = document.querySelector("#txt-password");

//validaciones contraseña
btnPassword.addEventListener("click", () => {
  let contraseña = digito1.value + digito2.value + digito3.value;

  if (contraseña === "911") {
    ingresar.innerHTML = "Password 1 correcto";
    ingresar.style.color = "green";
  } else if (contraseña === "714") {
    ingresar.innerHTML = "Password 2 correcto";
    ingresar.style.color = "green";
  } else {
    ingresar.innerHTML = "Password incorrecto";
    ingresar.style.color = "red";
  }
});
