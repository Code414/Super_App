import React from 'react'
import action from "../../assets/action.jpeg"
import drama from "../../assets/drama.jpeg"
import fantasy from "../../assets/fantasy.jpeg"
import fiction from "../../assets/fiction.jpeg"
import horror from "../../assets/horror.jpeg"
import music from "../../assets/music.jpeg"
import romance from "../../assets/romance.jpeg"
import thriller from "../../assets/thriller.jpeg"
import western from "../../assets/western.jpeg"
import Box from "../../components/MovieBox"
import Chip from "../../components/Chip"

import { useState } from 'react'
import {useNavigate} from "react-router-dom"

const genres = [
  {
    id : "Action",
    color : "blue",
    image : <img style = {{ width : "160px", height : "120px"}} src = {action}/>
  },
  {
    id : "Drama",
    color : "violet",
    image : <img style = {{ width : "160px", height : "120px"}} src = {drama}/>
  },
  {
    id : "Fantasy",
    color : "skyblue",
    image : <img style = {{ width : "160px", height : "120px"}} src = {fantasy}/>
  },
  {
    id : "Fiction",
    color : "pink",
    image : <img style = {{ width : "160px", height : "120px"}} src = {fiction}/>
  },
  {
    id : "Horror",
    color : "orange",
    image : <img style = {{ width : "160px", height : "120px"}} src = {horror}/>
  },
  {
    id : "Music",
    color : "grey",
    image : <img style = {{ width : "160px", height : "120px"}} src = {music}/>
  },
  {
    id : "Romance",
    color : "green",
    image : <img style = {{ width : "160px", height : "120px"}} src = {romance}/>
  },
  {
    id : "Thriller",
    color : "purple",
    image : <img style = {{ width : "160px", height : "120px"}} src = {thriller}/>
  },
  {
    id : "Western",
    color : "red",
    image : <img style = {{ width : "160px", height : "120px"}} src = {western}/>
  }
];

function Info() {
  const [selectedMovies, setSelectedMovies] = useState([]);
  //console.log(selectedMovies);

  const navigate =useNavigate();
  return (
    <div>
        <h1>Info</h1>
        <div style = {{display:"grid" , gridTemplateColumns: "1fr 1fr 1fr", gap: "12px"}}>
        {
          genres.map((genre) => (
            <Box key = {genre.id} data = {genre} selectedMovies = {selectedMovies} setSelectedMovies = {setSelectedMovies} />
          ))
        }
        </div> 

        {/* For Chip */}
        <div 
          style = {{display : "flex", gap : "12px" , flexWrap: "wrap", marginTop: "12px"}}>
          {selectedMovies.map((movie) => (
          <Chip key = {movie} data={movie} selectedMovies = {selectedMovies} setSelectedMovies = {setSelectedMovies} />
          ))}
        </div> 

        {/* Minimum 3 required */}
        {selectedMovies.length < 3 ? (<p style = {{color:"red"}}>Minimum 3 categories  are required</p>) : (<></>)}

        <button style={{ background: "green", padding: "12px", borderRadius: "12px", width:"none", marginTop:"12px" }}
          onClick = { () => {
            //to save movies in local storage to use in showcase page
            window.localStorage.setItem(
              "selectedMovies",
              JSON.stringify(selectedMovies)
            );
            navigate("/showcase");
          }}
          disabled = {selectedMovies.length < 3}
          >
          Next
        </button>
    </div>
  );
}

export default Info