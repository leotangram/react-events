import React from 'react'
import { EventsConsumer } from '../context/EventsContext'
import Event from './Event'

const EventList = () => {
  return (
    <div className='uk-child-width-1-3@m' uk-grid='true'>
      <EventsConsumer>
        {value => {
          return value.events.map(event => <Event />)
        }}
      </EventsConsumer>
    </div>
  )
}

export default EventList
