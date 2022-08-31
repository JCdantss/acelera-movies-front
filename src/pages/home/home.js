import './home.css'
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
    <section>
      <header><h1>Hello, User</h1></header>
      <nav className='menu'>
        <ul>
          <li>Home</li>
          <li>Lançamentos</li>
          <li>Séries
            <ul className='drop-list'>
              <li>Ação</li>
              <li>Terror</li>
              <li>Comédia</li>
              <li>Romance</li>
              <li>Ficção Científica</li>
              <li>Drama</li>
              <li>Suspence</li>
            </ul>
          </li>
          <li>Filmes
            <ul className='drop-list'>
              <li>Ação</li>
              <li>Terror</li>
              <li>Comédia</li>
              <li>Romance</li>
              <li>Ficção Científica</li>
              <li>Drama</li>
              <li>Suspence</li>
            </ul>
          </li>
          <li>Genero
            <ul className='drop-list'>
              <li>Ação</li>
              <li>Terror</li>
              <li>Comédia</li>
              <li>Romance</li>
              <li>Ficção Científica</li>
              <li>Drama</li>
              <li>Suspence</li>
            </ul>
          </li>
          <Modal />
        </ul>
      </nav>
      <main>
        <div className='title-page'>All Movies</div>
        <div className='main-list'>
          <ul>
            {movies.map((movie, index) => (
              <li key={index}>
                <figure className='img-movie'></figure>
                <div className='texto-film'><Link to={`/movie/${movie.id}`}><h1>{movie.title}</h1></Link><br />
                  <p>{movie.releaseDate}</p>
                  <div className='text-resume'>
                    <br />
                    <p>Classificação: {movie.classification}</p><br />
                    <p>Studio: {movie.studio}</p><br />
                    <br />
                    <p>{movie.resume}</p>
                  </div>
                </div>
                <div className='avaliation'>
                  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
                  <div className="estrelas">
                    <input type="radio" id="cm_star" name="fb" value="" />
                    <label htmlFor="cm_star-1"><i className="fa"></i></label>
                    <input type="radio" id="cm_star-1" name="fb" value="1" />
                    <label htmlFor="cm_star-2"><i className="fa"></i></label>
                    <input type="radio" id="cm_star-2" name="fb" value="2" />
                    <label htmlFor="cm_star-3"><i className="fa"></i></label>
                    <input type="radio" id="cm_star-3" name="fb" value="3" />
                    <label htmlFor="cm_star-4"><i className="fa"></i></label>
                    <input type="radio" id="cm_star-4" name="fb" value="4" />
                    <label htmlFor="cm_star-5"><i className="fa"></i></label>
                    <input type="radio" id="cm_star-5" name="fb" value="5" />
                  </div>
                </div>
              </li>
            )
            )}
          </ul>
        </div>
      </main>
    </section>
  )
}
