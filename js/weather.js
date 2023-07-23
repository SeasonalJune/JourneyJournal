const weather=document.querySelector("#weather span:first-child");
const city=document.querySelector("#weather span:last-child");
const API_KEY="98826e932ee2cddb6748f1570de6787e";

function YesGeo(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid={API key}&units=metric`;
    fetch(url)
    .then((Response)=>Response.json())
    .then((data)=>{
        city.innerText=`${data.name}`;
        weather.innerText=`${data.weather[0].main}/${data.main.temp}°С`;
    })
}

function NoGeo(){
   alert("Can't find your location. No weather info for you");
}

navigator.geolocation.getCurrentPosition(YesGeo,NoGeo);

