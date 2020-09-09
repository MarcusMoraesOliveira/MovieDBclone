import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: 200,
    marginLeft: 20,
    display: "inline-flex"
  },
  flex:{
    display: 'flex',
  }
});


export default function Genres({genres}){
  const classes = useStyles();
  const ob = transformArrayObject()
  const [genreid, setGenreId] = React.useState(ob);
  let genresHalf = genres.filter(function(genre,i){
    return i<=genres.length/2
  })
  let genresSecond = genres.filter(function(genre,i){
    return i>genres.length/2 && i<genres.length
  })




  function transformArrayObject(){
    let object = {}
    genres.map( genre =>{
      object[genre.id] = false
    })
    return object
  } 

  function handleChange(event){
    console.log(!!event.target.checked)
    event.target.checked = !!event.target.checked
    console.log(event.target.checked)
    setGenreId({...genreid,[event.target.name]: event.target.checked})
    console.log(genreid)
  }
  return (
   
    <Card className={classes.root} variant="outlined">
      <CardContent >
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Genres
        </Typography>
        <Divider />
        <div className={classes.flex}>
        <FormGroup>
          {
            genresHalf.map((genre,i) =>{
              return(
                <FormControlLabel
                control={<Checkbox checked={genreid[genre.id]} onChange={handleChange} name={genre.id} />}
                label={genre.name}
                />
              )
            })
          }
        </FormGroup>
        <FormGroup>
          { 
            genresSecond.map((genre,i) =>{
              return(
                <FormControlLabel
                control={<Checkbox checked={genreid[genre.id]} onChange={handleChange} name={genre.id} />}
                label={genre.name}
                />
              )
            })
          }
        </FormGroup>
        </div>
        <Button size="small">Learn More</Button>
      </CardContent>
      
    </Card>
  );
}