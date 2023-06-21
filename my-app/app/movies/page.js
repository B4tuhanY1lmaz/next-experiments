import React from "react";

import MoviesSection from "@/components/movies-section";
import Styles from "./styles.module.css"

import Movies from '@/mocks/movies.json';

function moviePage() {
    return <div>
    <MoviesSection 
        title="Popular Films" 
        movies={Movies.results.slice(1, 7)}/>
        <h2 className={Styles.header} >Sorted by Categories</h2>
        <MoviesSection 
        title="Popular Films" 
        movies={Movies.results.slice(7, 14)}/>
        <MoviesSection 
        title="Popular Films" 
        movies={Movies.results.slice(14, 21)}/>
        <MoviesSection 
        title="Popular Films" 
        movies={Movies.results.slice(21, 28)}/>
        <MoviesSection 
        title="Popular Films" 
        movies={Movies.results.slice(28, 35)}/>
        <MoviesSection 
        title="Popular Films" 
        movies={Movies.results.slice(35, 42)}/>
    </div>;
}

export default moviePage;