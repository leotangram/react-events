import React, { Component } from 'react'

const EventsContext = React.createContext()
export const EventsConsumer = EventsContext.Consumer

class EventsProvider extends Component {
  token = 'DRQBFOM64LL27OWCFFBI'
  sort = 'date'

  state = {}

  getEvents = async search => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${
      search.name
    }&categories=${search.category}&sort_by=${this.sort}&token=${
      this.token
    }&locale=es_ES`
  }

  render() {
    return <div />
  }
}

export default EventsProvider
