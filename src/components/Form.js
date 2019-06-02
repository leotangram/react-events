import React, { Component } from 'react'
import { CategoriesConsumer } from '../context/CategoriesContext'

class Form extends Component {
  state = {
    name: '',
    category: ''
  }

  // Si el usuario agrega un evento o categoría
  getDataEvent = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form>
        <fieldset className='uk-fieldset uk-margin'>
          <legend className='uk-legend uk-text-center'>
            Busca tu evento por nombre o categoría
          </legend>
        </fieldset>
        <div className='uk-column-1-3@m uk-margin'>
          <div className='uk-margin' uk-margin='true'>
            <input
              type='text'
              name='name'
              className='uk-input'
              placeholder='Nombre de evento o ciudad'
              onChange={this.getDataEvent}
            />
          </div>
          <div className='uk-margin' uk-margin='true'>
            <select
              className='uk-select'
              name='category'
              onChange={this.getDataEvent}
            >
              <option value=''>-- Selecciona categoría --</option>
              <CategoriesConsumer>
                {value => {
                  return value.categories.map(category => (
                    <option
                      key={category.id}
                      value={category.id}
                      data-uk-form-select
                    >
                      {category.name_localized}
                    </option>
                  ))
                }}
              </CategoriesConsumer>
            </select>
          </div>
          <div>
            <input
              type='submit'
              className='uk-button uk-button-danger'
              value='Busca eventos'
            />
          </div>
        </div>
      </form>
    )
  }
}

export default Form
