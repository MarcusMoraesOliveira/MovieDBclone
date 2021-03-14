import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import FormGroup from '@material-ui/core/FormGroup';
import Button from "@material-ui/core/Button";
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


export default function Genres({genres, genreFilter}){
  const classes = useStyles();
  const [genreid, setGenreId] = React.useState(transformArrayObject());

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
      return true
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
                <FormControlLabel key={i}
                control={<Checkbox  color="primary" checked={genreid[genre.id]} onChange={handleChange} name={genre.id.toString()} />}
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
                <FormControlLabel key={i}
                control={<Checkbox color="primary" checked={genreid[genre.id]} onChange={handleChange} name={genre.id.toString()} />}
                label={genre.name}
                />
              )
            })
          }
        </FormGroup>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center',marginTop: '2vh'}}>
          <Button color="secondary" variant="contained" 
          onClick={ 
            ()=>{
              let selectedGenres = []
              for (var prop in genreid) {
                if(genreid[prop] == true) selectedGenres.push(prop)
              }
              genreFilter(selectedGenres)
            }
            }>
              filtrar
          </Button>
        </div>
      </CardContent>
      
    </Card>
  );
}