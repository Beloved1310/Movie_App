import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../../CSS/Searchbox.css'

const SearchBox = ({movies}) => {
	const   [movieName, setMovieName] = useState("")
	const   [searchedMovies, setSearchedMovies] = useState([])

useEffect(() => {
	const searchResult = movies &&  movieName.length &&  movies.filter((e)=>e.original_title.toLowerCase().includes(movieName.toLowerCase()) )
	setSearchedMovies(searchResult)
}, [movieName, movies])



	
	return (
		<div className='search-box'>
			<input
				className='search-txt'
				value={movieName}
				onChange={(e) => setMovieName(e.target.value)}
				placeholder='Type to search...'
			/>
			<div className = "search-btn">
				<i class = "fas fa-search"></i>
			</div>
			


			{searchedMovies && searchedMovies.map((e)=><div className ="Link-item"> <Link to = {`/home/${e.id}`} style={{ textDecoration: 'none' }}>
				<li className= "linkitem">{e.original_title}</li>
				
				</Link></div>)}
		</div>
	);
};

export default SearchBox;