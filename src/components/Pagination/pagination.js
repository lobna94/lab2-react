import React from 'react'
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

export default function pagination() {
    useEffect(() => {
        axiosInstance
          .get(`/popular&page=4`)
          
          .then((res) => {
            // console.log(res.data.title)
              setMovies(res.data)})
          .catch((err) => console.log(err));
      }, []);

    return (
        <div>
            
        </div>
    )
}



