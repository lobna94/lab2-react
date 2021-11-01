import React from 'react'
import { useEffect, useState } from "react";
import {Link,useHistory,useParams } from "react-router-dom";
import axiosInstance from "../../Network/axiosConfig";


    


export default function MovieDetails(props) {
    const params = useParams();
    const source="https://image.tmdb.org/t/p/w500"
    const [movie, setMovies] = useState([]);
    // console.log(params);
    
    useEffect(() => {
        axiosInstance
          .get(`/movie/${params.id}?`)
          .then((res) => {
            // console.log(res.data.title)
              setMovies(res.data)})
          .catch((err) => console.log(err));
      }, []);

    // {id : 12345}
   
    return (
        <div>
         <div className="card mb-3" style={{width: "600px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`${source}/${movie.poster_path}`} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5>
        <p className="card-text">{movie.overview} </p>
        <p className="card-text"><small className="text-muted">{movie.vote_average}</small></p>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
