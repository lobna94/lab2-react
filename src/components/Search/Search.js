import React from 'react'
import axiosInstance from "../../Network/axiosConfig";
import { useEffect, useState } from "react";



export default function Search() {
    const [movies ,setMovies] = useState([]);
    const [filtered ,setFilterd] = useState([]);
    const [result , setResult] = useState("");

    useEffect(()=>{
        const fetchMovie = async ()=> {
                try{
                    const res = await axiosInstance.get(`/search/movie?&query={BAC Nord}}`);
                    setMovies(res.data.results);
                    setFilterd(res.data.results);
                     console.log(res.data.results);
                }catch(err){
                    throw new Error(err);
                }
                 };
              fetchMovie(); 
    },[]);

    useEffect(()=> {
        const results = filtered.filter(res=> res.name.toLowerCase().includes(result)

        );
        
        setMovies(results)
    } ,[result])
    


  
    return (
        <div>
            
        </div>
    )
}
