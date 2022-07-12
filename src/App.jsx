import React, { useState } from 'react'


import EventDemo from './useEventDemo';


function App() {
  let [intervalFlag, setIntervalFlag] = useState(true);


  return (
    <>
      <p>App works</p>
      <EventDemo />
    </>
  )
}

export default App
