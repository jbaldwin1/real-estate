import React, { Component} from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render () {
    return (<section className="filter">
    <h4>Filter</h4>
    <select name="neighborhood" className="filters neighborhood">
      <option>Creekside</option>
    </select>
    <select name="style" className="filters style">
      <option>Ranch</option>
    </select>
    <select name="bedrooms" className="filters bedrooms">
      <option>3</option>
    </select>
    <select name="baths" className="filters baths">
      <option>2</option>
    </select>
    <div className="filters price">
      <span className="title">Price</span>
      <input type="text" name="min-price" className="min-price"/>
      <input type="text" name="max-price" className="max-price"/>
    </div>
    <div className="filters square-footage">
      <span className="title">Square Footage</span>
      <input type="text" name="min-square-footage" className="min-square-footage"/>
      <input type="text" name="max-square-footage" className="max-square-footage"/>
    </div>
    <div className="filters Amenities">
      <label for="Amenities">
        <span>Elevators</span>
        <input name="amenities" value="elevators" type="checkbox" />
      </label>
      <label for="Amenities">
        <span>Swimming Pool</span>
        <input name="amenities" value="swimming-pool" type="checkbox" />
      </label>
      <label for="Amenities">
        <span>Finished Basement</span>
        <input name="amenities" value="finished-basement" type="checkbox" />
      </label>


    </div>
      </section>)
  }
}
