import './App.css';
import {useState } from 'react';
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {  
  const [events, setEvents] = useState([
    {title:"mario's birthday bash", id:1},
    {title:"bowser's live stream", id:2},
    {title:"race on moo moo farm", id:3}
  ])

  const [showModal, setShowModal] = useState(false);

  const subTitle = "All the events in Marioland"
  const[showEvents, setShowEvents] = useState(true);

  const handleClick = (id) =>{    
    
    setEvents((prevEvents) => prevEvents.filter(prevEvent => prevEvent.id !== id));    
  }
        
  const addEvents = (event) => {    
    setEvents((prevEvents) => [...prevEvents, event] );
    setShowModal(false);    
  }

  return (
    <div className="App">
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      <Title title="Events in you area" subTitle={subTitle}/>
      <Title title="Events in another area" subTitle="Another subtitle"/>
      <div>
        <button onClick={() => setShowEvents(prev => !prev)}>
          {showEvents === false ? 'Show Events' : 'Hide Events'}
        </button>
      </div>

      {showEvents && 
        <EventList events={events} handleClick={handleClick}/>      
      }
      {showModal && 
        <Modal  isSalesMode={true}>
          <NewEventForm addEvents={addEvents}/>
        </Modal>
      }

    </div>
    
  );
}

export default App;
