import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function Weather(){
    const [weatherInfo, setWeatherInfo] = useState( {
        city: "Eluru",
        temp: 24.84,
        tempMin: 24.84,
        tempMax: 26.98,
        humudity: 47,
        feelsLike: 24.84,
        weather: "haze",
    });

    function updateInfo(newResult){
        setWeatherInfo(newResult);
    }

    return(
        <>
        <h2 style={{color:"green"}}>Weather App</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>

        </>
    )


}