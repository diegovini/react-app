import React, { useState } from 'react'
import './NewEventForm.css'

export default function NewEventForm({addEvents}) {
const[title,setTitle] = useState('');
const[date,setDate] = useState('');
const[location,setLocation] = useState('manchester');

const resetForm = () => {
    setTitle('');
    setDate('');
    setLocation('manchester');
}

const handleSubmit = (e) => {
    e.preventDefault()
    const event = {
        title,
        date,
        location,
        id: Math.floor(Math.random() * 1000)
    }
    console.log(event)
    resetForm();
    addEvents(event);        
}



  return (
    <form onSubmit={handleSubmit} className="new-event-form">
        <label >
            <span>Event title:</span>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </label>
        <label>
            <span>Date:</span>
            <input type="Date" value={date} onChange={(e) => setDate(e.target.value)}/>
        </label>
        <label>
            <span>Event location:</span>
            <select onChange={(e) => setLocation(e.target.value)}>
                <option value="manchester">Manchester</option>
                <option value="london">London</option>
                <option value="cardiff">Cardiff</option>
            </select>
        </label>
        <button>Submit</button>
    </form>
  )
}
