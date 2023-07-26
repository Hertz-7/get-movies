
import './mainpage.css';
import Navbar from '../navbar/navbar.js';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Moviecard from '../moviecard/moviecard.js';
function App() { 
    const [movies, setmovies] = useState([]);
    const [searchterm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const getmovies = async () => {
       
        const options = {
            headers:{
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTk3M2M3ZWQwMDQ5YWYwZjIxYzFkZjcxNzMyZmI2YyIsInN1YiI6IjY0YmY2ZTA0MDU4MjI0MDBlZWQ3ZThkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5ZlHAD-OXoKy_a_fnNAziPNFsnGhKBguHxWE3l8dgzY'
              }  
        }
        const response = await axios.get(
            'https://api.themoviedb.org/3/trending/movie/week',
            options
          );
            
            setmovies(response.data.results);
        
            
    }

    const searchmovies = async () => {
        setLoading(true);
        const options = {
            headers:{
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTk3M2M3ZWQwMDQ5YWYwZjIxYzFkZjcxNzMyZmI2YyIsInN1YiI6IjY0YmY2ZTA0MDU4MjI0MDBlZWQ3ZThkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5ZlHAD-OXoKy_a_fnNAziPNFsnGhKBguHxWE3l8dgzY'
              }  
        }
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?query=${searchterm}&page=1`,
            
            options
            );
            console.log(response.data.results);
            
            setmovies(response.data.results);
            setLoading(false);
            

    }
   
    useEffect(() => {
        getmovies();
      } ,[]);

    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value);  
        
    }
    const handleSubmit = (e) => {
        console.log(searchterm);
        searchmovies();
    }
  return (
    <>
      <Navbar />
      <div className="search-form d-flex">
                <input className="form-control me-2" type="search" onChange={handleSearchTerm}  placeholder="Search" aria-label="Search"/>
                <button className="search-btn btn" type="button" onClick={handleSubmit} >Search</button>
                {/*  */}
        </div>
      <div className="container-movies">
        {
                loading ? <div className='loading'>
                <div class="spinner-grow text-secondary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-secondary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                </div>
                :movies.length===0 ? <div className='loading'> No search results available.. </div>: movies.map((obj,index)=>{
                    return(
                        <Moviecard key={index}
                        img={`https://image.tmdb.org/t/p/w500${obj.poster_path}`}
                        title={obj.title}
                        info={obj.overview}
                        rating={obj.vote_average}
                        release_date={obj.release_date}
                        vcount={obj.vote_count}
                        />
                    )
                })
        }
      </div>
    </>
  );
}

export default App;
