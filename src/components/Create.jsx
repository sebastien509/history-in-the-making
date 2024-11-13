import React, { useState } from 'react'
import EventList from './EventList'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Create() {

  const navigate = useNavigate();

  const [title, setTitle] = useState('')
  const [img1, setImg1] = useState('')
  const [img2, setImg2] = useState('')
  const [century, setCentury] = useState('')
  const [country, setCountry] = useState('')
  const [description, setDescription] = useState('')

  const handleChangeTitle = (event) => setTitle(event.target.value)
  const handleChangeImage1 = (event) => setImg1(event.target.value)
  const handleChangeImage2 = (event) => setImg2(event.target.value)
  const handleChangeCentury = (event) => setCentury(event.target.value)
  const handleChangeCountry = (event) => setCountry(event.target.value)
  const handleChangeDescription = (event) => setDescription(event.target.value)

  function resetForm() {
    setTitle('')
    setImg1('')
    setImg2('')
    setCentury('')
    setCountry('')
    setDescription('')
  }



  async function handleSubmit(event) {
    event.preventDefault()

    const newEvent = {title, img1, img2, century, country, description}

    try {
      const response = await fetch('http://localhost:3000/events', {
        method: 'POST',
        header: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify(newEvent)
      })
      const data = await response.json()

      // resetForm()

      navigate('/home/search'); 
      
    } catch (error) {
      console.error(error)
      alert('Not posted properly')
    }
    
    
  }
  
  // const goToSearch = () => Navigate(`/home/search`)
  // goToSearch()



  return (
    <div>        
        <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          required={true}
          name="title"
          value={title}
          onChange={handleChangeTitle}
        />

        <label htmlFor="img1">Image</label>
        <input
          type="text"
          required={true}
          name="img1"
          value={img1}
          onChange={handleChangeImage1}
         />
        <label htmlFor="img2">Image</label>
         <input
          type="text"
          required={false}
          name="img2"
          value={img2}
          onChange={handleChangeImage2}
        />

        <label htmlFor="century">Century</label>
        <input
          type="text"
          required={true}
          name="century"
          value={century}
          onChange={handleChangeCentury}
        />

        <label htmlFor="country">Country</label>
        <input 
          type="text"
          required={true}
          name="country"
          value={country}
          onChange={handleChangeCountry}
        
        />

        <label htmlFor="description">Description</label>
        <input 
          type="text"
          required={true}
          name="description"
          value={description}
          onChange={handleChangeDescription}
        />

        <button type="submit">Create Event</button>

        </form>
    </div>
  )

}

export default Create