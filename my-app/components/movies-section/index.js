import React from "react";
import Link from 'next/link';
import Image from 'next/image'

import styles from "./styles.module.css"

function MoviesSection({ title, movies }) {
    return (
        <div className={styles.moviesSection}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.movies}>
                {Array.isArray(movies) && movies.map((movie) => (
                    <div className={styles.movie} key={movie.id}>
                        <Link href={`/movie/${movie.id}`}>  // I really don't know what I did over there but it works.
                            <Image 
                                fill
                                unoptimized
                                alt={movie.title}
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
};


export default MoviesSection;
