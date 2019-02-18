
var apiKey = '575ce8dbdd777ec3fc2ed3a4ac30f14d';

var button = document.getElementById('btn');
var print = document.getElementById('printCity');


document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
button.addEventListener('click', function(event){
  var req = new XMLHttpRequest();
  var cityName = {name: null}
  cityName.name = document.getElementById('city').value;
  req.open('POST', 'http://httpbin.org/post', true);
  req.setRequestHeader('Content-Type', 'application/json');
  //var data = JSON.parse(req.responseText);
  req.addEventListener('load',function(){
    if (req.status >= 200 && req.status < 400){
      var res = JSON.parse(req.responseText);
      var cityString = "";
      cityString += "<p> The City is: " + res.name + "<br/>";
      cityString += "Clouds: " + res.clouds + "<br/>";
      cityString += "Rain: " + res.rain + "<br/>";
      cityString += "Wind speed: " + res.wind + "</p>";
      print.insertAdjacentHTML('beforeend', cityString);
    } else {
      console.log("Error in network request: " + req.statusText);
    }
  });
  req.send(JSON.stringify(cityName));
  event.preventDefault();
});
}
