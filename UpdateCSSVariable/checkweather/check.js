const input = document.getElementById("input");
const btn = document.getElementById("btn");
const place = document.getElementById("place");
const weather = document.getElementById("weather");
const temp =document.getElementById("tempreature");

async function getdata(city){
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=339f9de9ceb04bd08a273056241411&q=${city}&aqi=yes`);
    return await promise.json();
}
btn.addEventListener("click", async()=>{
  const value = input.value;
const result= await getdata(value);
//console.log(result);
place.innerText= `${result.location.region}, ${result.location.country}`;
weather.innerHTML=  result.current.condition.text;
temp.innerText = result.current.temp_c;
})
