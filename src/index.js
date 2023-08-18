function updateTime() {

//Los-Angeles

let losAngelesElement = document.querySelector("#los-angeles");
if (losAngelesElement) {
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz(`America/Los_Angeles`);

losAngelesDateElement.innerHTML = losAngelesTime.format(`dddd Do [of] MMMM YYYY`);
losAngelesTimeElement.innerHTML = losAngelesTime.format(`h:mm:ss [<small>]A[<small>]`);
}

//Shanghai

let shanghaiElement = document.querySelector("#shanghai");
if (shanghaiElement) {
let shanghaiDateElement = shanghaiElement.querySelector(".date");
let shanghaiTimeElement = shanghaiElement.querySelector(".time");
let shanghaiTime = moment().tz(`Asia/Shanghai`);

shanghaiDateElement.innerHTML = shanghaiTime.format(`dddd Do [of] MMMM YYYY`);
shanghaiTimeElement.innerHTML = shanghaiTime.format(`h:mm:ss [<small>]A[<small>]`);

}
};

updateTime();
setInterval(updateTime, 1000);


function updateCity(event) {
   let cityTimeZone = event.target.value;
   let cityName = cityTimeZone.replace("_", " ").split("/")[1];
   let cityTime = moment().tz(cityTimeZone);
   let citiesElement = document.querySelector("#cities");
   citiesElement.innerHTML = 
   `<div class="city">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format(`dddd Do [of] MMMM YYYY`)}</div>
    </div>
    <div class="time">${cityTime.format(`h:mm:ss [<small>]A[<small>]`)}</div>
    </div>`    
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);