import { useState } from 'react';
import movieFile from './MovieDataSample.json';

const movieInfo = movieFile.MovieDataSample;

function MovieCollection() {
  const [listOMovies, setListOMovies] = useState(movieInfo);

  const addMovie = () => {
    setListOMovies([
      ...movieInfo,
      {
        Category: 'Action/Adventure',
        Title: 'Batman Returns',
        Year: 1992,
        Director: 'Tim Burton',
        Rating: 'PG-13',
      },
    ]);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Year</td>
            <td>Director</td>
            <td>Rating</td>
            <td>Category</td>
          </tr>
        </thead>
        <tbody>
          {listOMovies.map((m) => (
            <tr>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Category}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />
      <br />
      <button onClick={addMovie}>Add Movie</button>
    </>
  );
}

export default MovieCollection;
