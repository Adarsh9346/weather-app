const apikey="b67e036954293487231baac32db7f733";
    const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchbox = document.querySelector(".search input");
    const searchbtn= document.querySelector(".search button");

    async function checkWeather(city){
        const response=await fetch(apiurl + city + `&appid=${apikey}`);
        var data= await response.json();
        console.log(data);
        document.getElementById('city').innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";
    }

        searchbtn.addEventListener('click',()=>{
            checkWeather(searchbox.value)
        })
        
        searchbtn.addEventListener('click',()=>{
            searchbox.value="";
        })
       
       
        

   