import React from 'react'
import Header from './components/Header'
import CategoriesProvider from './context/CategoriesContext'
import Form from './components/Form'
import EventsProvider from './context/EventsContext'

function App() {
  return (
    <EventsProvider>
      <CategoriesProvider>
        <Header />
        <div className='uk-container'>
          <Form />
        </div>
      </CategoriesProvider>
    </EventsProvider>
  )
}

export default App
