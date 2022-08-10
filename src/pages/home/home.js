import './style.css'
import { client } from '../../service/client'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  const [movies, setMovie] = useState([])

  useEffect(() => {
    client.get('/movie').then((response) => {
      setMovie(response.data)
    })
  }, [])

  return (
    <div className="containerMovie">
      <div className="home">
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
            </li>
          )
          )}
        </ul>
      </div>
    </div>
  )
}
