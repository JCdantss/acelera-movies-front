import './style.css'
import { client } from '../../service/client'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from '../../components/modal'

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
        <div className='user-title'>
          <div className='user'><h2> Hello, user </h2></div>
          <div className='title'><h1>Todos os Filmes</h1></div>
        </div>
        <Modal />
        <div className='space'>
          <ul>
            {movies.map((movie, index) => (
              <li key={index}>
                <div>{movie.image}</div>
                <div><Link to={`/movie/${movie.id}`}><h1>{movie.title}</h1></Link>
                  <p>{movie.releaseDate}</p><br />
                  {movie.resume}</div><br />
              </li>
            )
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
