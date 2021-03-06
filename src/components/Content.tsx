import { useContext, useEffect, useState } from 'react';
import { ContentContext } from '../contexts/ContentContext';

import { Header } from './Header';
import { MovieCard } from './MovieCard';

import '../styles/content.scss';

export function Content() {
  const { movies } = useContext(ContentContext);

  return (
    <div className="container">
      <Header />
      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.Title}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}