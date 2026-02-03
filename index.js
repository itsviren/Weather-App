let city = document.querySelector(".city");
let btn = document.querySelector(".search-btn");
let invalid = document.querySelector(".invalid");
let subweatherbox = document.querySelector(".sub-weather-box");
let mainweatherbox = document.querySelector(".main-weather-box");

let weatherImg = document.querySelector(".weather-img");
let weatherDegree = document.querySelector(".weather-degree");
let cityName = document.querySelector(".city-name");

let humidityScore = document.querySelector(".humidityScore");
let windSpeed = document.querySelector(".windSpeed");

let apiKey = "cba5287e76fa251e043c4f7a39df94ec";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&"

btn.addEventListener("click",()=>{
    let cityValue= city.value.trim();
    let finalUrl=`${apiUrl}q=${cityValue}&appid=${apiKey}`

    async function getData(url){
        let reponse = await fetch(url);
        if(reponse.status===404){
            invalid.style.display="flex";
             subweatherbox.style.display="none";
              mainweatherbox.style.display="none";

            
        }
        else{
            invalid.style.display="none";
             subweatherbox.style.display="flex";
              mainweatherbox.style.display="flex";

        let data = await reponse.json();
        console.log(data);
        weatherImg.src=`${data.weather[0].main}.png`;
        weatherDegree.innerHTML=`${data.main.temp}°c`;
        cityName.innerHTML=`${data.name}`;
        humidityScore.innerHTML=`${data.main.humidity}%`;
        windSpeed.innerHTML=`${data.wind.speed}km/h`;


        }
    }
    getData(finalUrl);








});
