//const clock=document.querySelector(h2"clock")

function getClock(){
  const date= new date();
  const hours=String(date.getHours()).padStart(2,"0");
  const minutes=String(date.getMinutes()).padStart(2,"0");
  const seconds=String(date.getSeconds()).padStart(2,"0");
  getClock.innerText=`⏰NOW ${hours}:${minutes}:${seconds}⌚`    
}

getClock();
setInterval(getClock,1000);