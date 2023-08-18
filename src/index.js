function updateTime() {

//Los-Angeles

let reykjavikElement = document.querySelector("#reykjavik");
if (reykjavikElement) {
let reykjavikDateElement = reykjavikElement.querySelector(".date");
let reykjavikTimeElement = reykjavikElement.querySelector(".time");
let reykjavikTime = moment().tz(`Atlantic/Reykjavik`);

reykjavikDateElement.innerHTML = reykjavikTime.format(`dddd Do [of] MMMM YYYY`);
reykjavikTimeElement.innerHTML = reykjavikTime.format(`h:mm:ss [<small>]A[<small>]`);
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
   if (cityTimeZone === "current-location") {
    cityTimeZone = moment.tz.guess();
   }

   let cityName = cityTimeZone.replace("_", " ").split("/")[1];
   let cityTime = moment().tz(cityTimeZone);
   let citiesElement = document.querySelector("#cities");
   citiesElement.innerHTML = 
   `<div class="city">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format(`dddd Do [of] MMMM YYYY`)}</div>
    </div>
    <div class="time">${cityTime.format(`h:mm [<small>]A[<small>]`)}</div>
    </div>
    <a href="/">◀ Back to start</a>`    
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);