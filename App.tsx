import './App.css'
import { Examples } from '../src/examples/Examples'
import { Nav } from '../src/docs/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Overview } from '../src/docs/Overview'
import React from 'react'

function App() {
  // if you only need one modal you can use this hook
  //const { isOpen, openModal, closeModal } = useModal()
  // if you need more than one modal, you need to use different names for the hooks
  /*  const {
    isOpen: isOpen1,
    openModal: openModal1,
    closeModal: closeModal1,
  } = useModal()
  const {
    isOpen: isOpen2,
    openModal: openModal2,
    closeModal: closeModal2,
  } = useModal()

  const onAfterCloseFunction = () => {
    alert('Modal closed')
  }
  function onAfterCloseFunction() {
    alert('Modal closed')
    //console.log('Modal closed')
  } */

  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">React Modal Demo</h1>
            <Nav />
          </header>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/examples/" element={<Examples />} />
          </Routes>
        </div>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
