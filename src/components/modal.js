
import { useState } from 'react'
import { client } from '../service/client'
import './style.css'

export const Modal = () => {
  let title = ''
  let subtitle = ''
  let resume = ''
  let releaseDate = ''
  let image = ''
  let director = ''
  let writer = ''
  let classification = ''
  let studio = ''
  let note = ''
  // let gender = ''
  // let actor = ''
  // let awards = ''

  const [toggle, setToggle] = useState(false)

  const handleChangeTitle = (event) => {
    title = event.target.value
  }
  const handleChangeSubtitle = (event) => {
    subtitle = event.target.value
  }
  const handleChangeResume = (event) => {
    resume = event.target.value
  }
  const handleChangeDate = (event) => {
    releaseDate = event.target.value
  }
  const handleChangeImage = (event) => {
    image = event.target.value
  }
  const handleChangeDirector = (event) => {
    director = event.target.value
  }
  const handleChangeWriter = (event) => {
    writer = event.target.value
  }
  const handleChangeClassification = (event) => {
    classification = event.target.value
  }
  const handleChangeStudio = (event) => {
    studio = event.target.value
  }
  const handleChangeNote = (event) => {
    note = event.target.value
  }
  const handleChangeGender = (event) => {
    // gender = event.target.value
  }
  const handleChangeActor = (event) => {
    // actor = event.target.value
  }
  const handleChangeAwards = (event) => {
    // awards = event.target.value
  }

  const submit = () => {
    alert('Movie inserido com sucesso')
    client.post('/movie', {
      title,
      subtitle,
      resume,
      releaseDate,
      image,
      director,
      writer,
      classification,
      studio,
      note,
      gender: '',
      actor: '',
      awards: ''
    }).then((response) => {
      console.log(response.data)
    })
  }

  const handleClick = () => {
    setToggle(toggle => !toggle)
  }

  return (
    <>
      <li onClick={handleClick}>Add Filme</li>
      {toggle && (<div className='modal-container'>
        <div className='modal'>
          <header className='style-modal'>
            <h2>Modal</h2>
            <button className='close' onClick={handleClick}>x</button>
          </header>
          <form action='' className='inputs-form'>
            <div className='inputs-form1'>
              <input onChange={handleChangeTitle} placeholder='Title' />
              <input onChange={handleChangeSubtitle} placeholder='Subtitle' />
            </div>
            <textarea onChange={handleChangeResume} placeholder='Resume' />
            <div className='inputs-form1'>
              <input onChange={handleChangeDate} placeholder='Release Date' />
              <input onChange={handleChangeImage} placeholder='imagem' />
            </div>
            <div className='inputs-form1'>
              <input onChange={handleChangeDirector} placeholder='Director' />
              <input onChange={handleChangeWriter} placeholder='Writer' />
            </div>
            <div className='inputs-form1'>
              <input onChange={handleChangeClassification} placeholder='Classification' />
              <input onChange={handleChangeStudio} placeholder='Studio' />
            </div>
            <div className='inputs-form1'>
              <input onChange={handleChangeGender} placeholder='Gender' />
              <input onChange={handleChangeNote} placeholder='Note' />
            </div>
            <div className='inputs-form1'>
              <input onChange={handleChangeActor} placeholder='Actor' />
              <input onChange={handleChangeAwards} placeholder='Awards' />
            </div>
            <input className='width' placeholder='Stars' />
          </form>
          <button onClick={submit} className='button-style'>Creater Movie</button>
        </div >
      </div >)
      }
    </>
  )
}
