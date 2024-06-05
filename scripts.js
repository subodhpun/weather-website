const inputCity= document.querySelector('#cityNameInput');
const button= document.querySelector('.button')

const cityName= document.querySelector('.cityName');
const temp= document.querySelector('.temp');
const humidityPer=document.querySelector('.humidityPer');
const windSpeed=document.querySelector('.windSpeed');

// const apiKey= "6261a2a98a52089c9863f74d71b7d6bb";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&q=city&appid=6261a2a98a52089c9863f74d71b7d6bb&units=metric";
const getWeather= async (city)=> {
	const response = await fetch(apiUrl.replace('city', city));
	// const response= await fetch(apiUrl);
		var data= await response.json();
		return data;
	}

const fetchData=async()=>{
	const city = inputCity.value;
	const result= await getWeather(city);
	console.log(result);
	cityName.innerHTML=result.name;
	temp.innerHTML=result.main.temp + "°C";
	humidityPer.innerHTML=result.main.humidity + "%";
	windSpeed.innerHTML=result.wind.speed + "km/hr";
}

button.addEventListener('click', fetchData);
inputCity.addEventListener('keydown', async (event)=> {
if (event.key ==='Enter'){
	await fetchData();}
});
