
var apiKey = '575ce8dbdd777ec3fc2ed3a4ac30f14d';



var button = document.getElementById('btn');
var print = document.getElementById('printCity');
var data;
document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
button.addEventListener('click', function(event){
  var req = new XMLHttpRequest();
  var cityName = {name: null}
  cityName.name = document.getElementById('city').value;
  req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q='+ cityName.name + ',us&appid=' + apiKey, false);
  req.send(null);
  data = JSON.parse(req.responseText);
  var cityString = "";
  cityString += "<p> The City is: " + data.name + "<br/>";
  cityString += "Min Temp: " + data.main.temp_min + "<br/>";
  cityString += "Max Temp: " + data.main.temp_max + "<br/>";
  cityString += "Wind speed: " + data.wind.speed + "</p>";
  print.insertAdjacentHTML('beforeend', cityString);


  event.preventDefault();
});
}
