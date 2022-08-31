import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { client } from '../../service/client'
import './style.css'

export const Movie = () => {
  const { id } = useParams()
  const [movieId, setMovieId] = useState([])

  const deletarMovie = () => {
    alert('Movie deletado com sucesso')
    client.delete(`/movie/${id}`).then((response) => {
    })
  }
  const putMovie = () => {
    alert('Movie editado com sucesso')
    client.put(`/movie/${id}`).then((response) => {
      return (response.data)
    })
  }

  useEffect(() => {
    client.get(`/movie/${id}`).then((response) => {
      setMovieId(response.data)
    })
  }, [])

  return (
    <section>
      <header>
        <div className='title'>
          <h1>Hello, User</h1>
        </div>
      </header>
      <nav>
        <ul className='preview-home'>
          <li>
            <Link to={'/home'}>Home</Link>
          </li>
        </ul>
      </nav>
      <main>
        <div className='button-styler'>
          <h1 className='font'>{movieId.title}</h1>
          <div>
            <button onClick={deletarMovie} className='deletar'>del</button>
            <button onClick={putMovie} className='editar'>edit</button>
          </div>
        </div>
        <div className='user-movie-id'>
          <div className='movie-image'>
            <div>
              <figure className='img-movie-2'></figure>
            </div>
          </div>
          <div className='edit'><h2>{movieId.title}</h2>
            <p>{movieId.releaseDate}</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            {movieId.resume}
          </div>
        </div>
        <div className='info-movie'>
          <p>{`Director: ${movieId.director}`}</p><br />
          <p>{`Writer: ${movieId.writer}`}</p><br />
          <p>{`Studio: ${movieId.studio}`}</p><br />
          <p>{`Stars: ${movieId.note}`}</p>
        </div>
      </main>
    </section>
  )
}
