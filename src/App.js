import './App.css';
import {useState } from 'react';
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList';

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

  const handleClose = () => {
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
        <Modal handleClose={handleClose}  isSalesMode={true}>
          <h2>Terms and conditions</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
             in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
             sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Modal>
      }

    </div>
    
  );
}

export default App;
