import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}){
  
    return(
        <>
      
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://media.istockphoto.com/id/1175895542/photo/nasik-maharashtra-august-2018-man-standing-at-the-edge-of-road-to-bhandardara.jpg?s=1024x1024&w=is&k=20&c=mrewNVsEQg9Q2YbU-qOYF91B5aAL4cN0LpZ9Ij7gcow="
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        City       : {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
       
          <p>Feels Like : {info.feelsLike}</p>
          <p>Temp       : {info.temp}</p>
          <p>Temp Max   : {info.tempMax}</p>
          <p>Temp Min   : {info.tempMin}</p>
          <p>Weather    : {info.weather}</p>
        </Typography>
      </CardContent>

    </Card>
        </>
    )
}