import { Button, Card, CardActions, CardContent,  Typography } from '@mui/material'


import { Link } from 'react-router-dom';
const MovieItem = ({title , releaseDate, posterUrl , id}) => {
  return (
   
      <Card 
      sx={{
        margin:2,
        width:250,
        height:320,
        borderRadius:5,
        ":hover":{
            boxShadow:"10px 10px 20px #ccc"
        },
       
    }}>
         
        <img height={"50%"} width="100%" src={posterUrl} alt='' />
<CardContent >
    <Typography textAlign="start" gutterBottom variant="h5" component="div" >
{title}
    </Typography>
    <Typography textAlign='start' alignContent={'start'}  gutterBottom variant="body2" color="text.secondary">
    {new Date(releaseDate).toDateString()}
    </Typography>
</CardContent>
<CardActions >
    <Button fullWidth variant='contained' LinkComponent={Link} to={`/booking/${id}`} sx={{margin:"auto"}} size='small'  >
        Book
    </Button>
</CardActions>
      </Card>
   
  )
}

export default MovieItem
