const start = document.querySelector('#btn')
const numMat = document.querySelector('#match')
const time1 = document.querySelector('#player1 .timep')
const time2 = document.querySelector('#player2 .timep')
const rPlayer = document.getElementById('raplayer1')


start.addEventListener('click',()=>{

  if(numMat.value > 0){
    if(numMat.value % 2 == 0){
      alert("no puede ser par")
    }
    else{
      numMat.readOnly = true;
      if(rPlayer.checked ){
      cronometro(time1)
      }
      else{
        cronometro(time2)
      }
    }
  }
  else{error()}
    
  
})


const error = ()=> {
  numMat.style.borderColor = "red";
  console.log("deben ingresar el numero de partidas valido")
}

function cronometro(timer){
    timer.innerHTML=0
    t = setInterval(()=>{
      timer.innerHTML = parseInt(timer.innerHTML)+ 1;
    },1000)
}