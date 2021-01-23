var input=document.querySelector('.inp');
var main=document.getElementById('name');
var temp=document.getElementById('temp');
var clouds=document.getElementById('clouds');
var desc=document.getElementById('desc');
var button=document.getElementById('btn');
console.log(input.value);

button.addEventListener('click',function(name){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=abe2c7f0248e4f490b2e0322fab462ba')
    .then(response => response.json())
    .then(data => {
        var tempValue = data['main']['temp'];
        var nameValue=data['name'];
        var descValue=data['weather'][0]['description'];
        var cloudsValue=data['clouds']['all'];
        console.log(tempValue+" "+nameValue);

        main.innerHTML = nameValue;
        temp.innerHTML = "Temperature : "+tempValue;
        desc.innerHTML = "Description : "+descValue;
        clouds.innerHTML= "Clouds : "+cloudsValue;
        input.value="";
    })
    .catch(err => alert("No city found with that name"));
})