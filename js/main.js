const start = document.querySelector('#btn')
const numMat = document.querySelector('#match')
const time1 = document.querySelector('#player1 .timep')
const time2 = document.querySelector('#player2 .timep')
const rPlayer = document.getElementById('raplayer1')
const winer = document.querySelector('.winer')
let turno = 1;

start.addEventListener('click', () => {

  if (numMat.value > 0) {
    if (numMat.value % 2 == 0) {
      alert("no puede ser par");
    }
    else {
      numMat.readOnly = true;
      if (rPlayer.checked) {
        cronometro(time1);
        numMat.style.borderColor = "blue";
      }
      else {
        cronometro(time2);
      }
    }
  }
  else { error() }


})


const error = () => {
  numMat.style.borderColor = "red";
  console.log("deben ingresar el numero de partidas valido");
}

function cronometro(timer) {
  timer.innerHTML = 0
  t = setInterval(() => {
    timer.innerHTML = parseInt(timer.innerHTML) + 1;
  }, 1000);
}
const cliquear = document.querySelector('.triki')


function evaluar(elemento) {
  if (cliquear.children[0].innerHTML == elemento &&
    cliquear.children[1].innerHTML == elemento &&
    cliquear.children[2].innerHTML == elemento) {
    winer.innerHTML = "GANO " + elemento;
  }

  else if (cliquear.children[3].innerHTML == elemento &&
    cliquear.children[4].innerHTML == elemento &&
    cliquear.children[5].innerHTML == elemento) {
    winer.innerHTML = "GANO " + elemento;
  }
  else if (cliquear.children[6].innerHTML == elemento &&
    cliquear.children[7].innerHTML == elemento &&
    cliquear.children[8].innerHTML == elemento) {
    winer.innerHTML = "GANO " + elemento;
  }
  else if (cliquear.children[0].innerHTML == elemento &&
    cliquear.children[3].innerHTML == elemento &&
    cliquear.children[6].innerHTML == elemento) {
    winer.innerHTML = "GANO " + elemento;
  }
  else if (cliquear.children[1].innerHTML == elemento &&
    cliquear.children[4].innerHTML == elemento &&
    cliquear.children[7].innerHTML == elemento) {
    winer.innerHTML = "GANO " + elemento;
  }
  else if (cliquear.children[2].innerHTML == elemento &&
    cliquear.children[5].innerHTML == elemento &&
    cliquear.children[8].innerHTML == elemento) {
  }
  else if (cliquear.children[0].innerHTML == elemento &&
    cliquear.children[4].innerHTML == elemento &&
    cliquear.children[8].innerHTML == elemento) {
    winer.innerHTML = "GANO " + elemento;
  }
  else if (cliquear.children[2].innerHTML == elemento &&
    cliquear.children[4].innerHTML == elemento &&
    cliquear.children[6].innerHTML == elemento) {
    winer.innerHTML = "GANO " + elemento;
  }

}

// const cliquear = document.querySelector('.sec');
// cliquear.addEventListener('click', marcar());



function marcar(obj) {
  if (turno == 1) {
    if (obj.target.innerHTML == "") {
      obj.target.innerHTML = "X";
      turno = 2;
    }
  } else {
    if (obj.target.innerHTML == "") {
      obj.target.innerHTML = "O";
      turno = 1;
    }
  }
  evaluar(obj.target.innerHTML);
}