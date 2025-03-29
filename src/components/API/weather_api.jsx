import axios from "axios";
import {useState} from "react";

export function Weather(){

    const url ='https://api.openweathermap.org/data/2.5/weather';
    const api_key = '5db9b9de22d54ff67e748e986580bd2f';

    const [cityName, setCityName] = useState('');
    const [weatherData, setWeatherData] = useState({name:'', main:{temp:0}, weather:[{description:''}]})

    function handleCityChange(e){
        setCityName(e.target.value);
    }

    function handleSearchclick(){
        axios.get(url,{params:{
            q:cityName,
            appid:api_key,
            units:'metric'
        }})

        .then(response=>{
            setWeatherData(response.data);
            console.log(response.data);
        })

    }

    return(
        <div className="container-fluid">
            <div className="mt-4 d-flex justify-content-center">
                <div className="w-50">
                    <div className="input-group">
                        <input type ="text" onChange={handleCityChange} placeholder="Enter City Name" className="form-control"/>
                        <button onClick={handleSearchclick} className="bi bi-search btn btn-warning"></button>

                    </div>
                        <div className="mt-4">
                            <h2>{weatherData.name}-{weatherData.weather[0].description}</h2>
                            <p className="fs-4">{Math.round(weatherData.main.temp)}&deg;C <span className="bi bi-sun"></span></p>
                        </div>
                </div>

            </div>

        </div>
    )
}