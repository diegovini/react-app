import React from 'react'
import styles from './EventList.module.css'

export default function EventList({events, handleClick}) {
  return (
    events.map((e,index) => (
        <div className={styles.card} key={e.id}>
          <h2>{e.title} - {e.id}</h2>
          <p>{e.location} - {e.date}</p>
          <button onClick={() => handleClick(e.id)}>Delete event</button>
          </div>
        ))
  )
}
