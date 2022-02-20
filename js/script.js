const btnInicio = document.querySelector(".start"),
  btnParar = document.querySelector(".stop"),
  btnBorrar = document.querySelector(".reset");

btnInicio.addEventListener("click", inicio);
btnParar.addEventListener("click", parar);
btnBorrar.addEventListener("click", borrar);
let h = 0,
  m = 0,
  s = 0,
  id;

const mostrar = (h, m, s) => {
  const hora = document.querySelector(".hour"),
    minutos = document.querySelector(".minute"),
    segundos = document.querySelector(".second");
  hora.innerText = h;
  minutos.innerText = m;
  segundos.innerText = s;
};
const cronometrar = () => {
  let hAux, mAux, sAux;
  s++;
  if (s > 59) {
    m++;
    s = 0;
  }
  if (m > 59) {
    h++;
    m = 0;
  }
  if (h > 24) {
    h = 0;
  }

  s < 10 ? (sAux = `0${s}`) : (sAux = s);
  m < 10 ? (mAux = `0${m}`) : (mAux = m);
  h < 10 ? (hAux = `0${h}`) : (hAux = h);

  mostrar(hAux, mAux, sAux);
};

function inicio() {
  id = setInterval(cronometrar, 1000);
  btnInicio.removeEventListener("click", cronometrar);
}

function parar() {
  clearInterval(id);
  btnInicio.addEventListener("click", cronometrar);
}
function borrar() {
  clearInterval(id);
  h = 0;
  m = 0;
  s = 0;
  mostrar("00", "00", "00");
}
