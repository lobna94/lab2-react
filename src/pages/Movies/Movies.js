import React from "react";
import { useEffect, useState } from "react";
import axiosInstance from "../../Network/axiosConfig";
import { CardGroup, Card } from "react-bootstrap";
import { Link, useHistory, useParams, useLocation } from "react-router-dom";
import './Movie.css';
import { MovieDetails } from "../../pages/MovieDetais/MovieDetails";
import MovieItem from "../../components/MovieItem/MovieItem";
import ReactPaginate from "react-paginate";
import { constant } from "async";

export default function Movies(props) {
  // console.log(props);
  const history = useHistory();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchMovie, setSearchMovie] = useState("");

  useEffect(() => {
    axiosInstance
      .get(`/movie/popular?&page=${page}`)

      .then((res) => {
        setMovies(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [page]);
  useEffect(() => {
    axiosInstance
      .get(`search/movie?&query=${searchMovie}`)

      .then((res) => {
        setMovies(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [searchMovie]);

  const redirectToDetails = () => {
    history.push(`/Moviedetails/${movies.id}`);
  };

  return (
    <div className="Container fluid ">
      
      <div className="border border-danger border-4 Movie-container">
        <input
          type="text"
          class="form-control"
          placeholder="Search Movie"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => setSearchMovie(e.target.value)}
        />
      </div>
      <div className="row ">
        {movies.map((movie) => {
          return (
            <div className="col-2 my-3  " Movie>
              <Card.Img
                variant="top "
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />

              <Card.Body>
                <div className="text-danger">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="rgb(206, 187, 22)"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>

                <Card.Title key={movie.id}>{movie.original_title}</Card.Title>
                <Card.Text>
                  <Link to={`MovieDetails/${movie.id}`} className="text-danger">
                    show More
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    type="button"
                    width="20"
                    height="20"
                    fill="red"
                    class="bi bi-heart-fill  w-30 "
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    />
                  </svg>
                </Card.Text>
              </Card.Body>
            </div>
          );
        })}
      </div>
      <div className=" ">
        <div className=" d-flex d-flex justify-content-center ">
          <div className="px-2">
            <button
              className="btn btn-danger"
              onClick={() => {
                if (page > 1) setPage(page - 1);
              }}
            >
              Prev
            </button>
          </div>
          <div className="px-2">
            <button
              className="btn btn-danger"
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
}
