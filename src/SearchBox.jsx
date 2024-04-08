import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "910e34ace852edc3d30e42219f0efc03";

    let getWeatherInfo = async () =>{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humudity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }
        console.log(result);
        setErr(false);
        return result;
    }



    async function handleSubmit(event){
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let res = await getWeatherInfo();
            updateInfo(res);
        }catch{
            setErr(true);
        }
       
    }

    function updatingName(event){
      
        setCity(event.target.value);
    }
    return (
        <>
       
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City Name" variant="outlined" value={city} onChange={updatingName} required/>
                <br /> <br />
                <Button style={{marginBottom:"20px"}}
                variant="contained" type='submit'>Contained</Button>
                { err && <p style={{color:"red"}}>No such place Exists !!</p>}

            </form>
           

        </>
    )
}
    
