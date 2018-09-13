import React, { Component } from 'react';
import CityOption from '../CityOption/CityOption'

export default class SearchBar extends Component{
  constructor(){
    super();

    this.state = {
      location: undefined,
      cityArray: []
    }

  }

  render(){

    return(
      <div className="location-container">
      <input list="cityList" onChange={(event)=>{
        if (this.props.trie.suggest) {
          this.setState({
            cityArray: this.props.trie.suggest(event.target.value),
            location: event.target.value
          }) 
        } else if (!event.target.value) {
          this.setState({
            cityArray: [],
            location: undefined
          })
        }
      }} className={this.props.inputClass} value={this.state.location} type='text' name="location-input" placeholder='City/Zip'></input>

      <datalist id='cityList' className='city-select'>

        {this.state.cityArray.length &&
          this.state.cityArray.map(city=>{
            return <CityOption key={city} city={city} cleanLocation={this.props.cleanLocation}/>
          })
        }

      </datalist>

      <div onClick={(event)=>{
        event.preventDefault();
        if (this.state.location === this.state.cityArray[0] && this.state.location) {
          this.props.cleanLocation(this.state.location);
        }
      }} className={this.props.magnifierDivClass}><img className={this.props.magnifierClass} src="./magnifier.svg" alt="search-button"/></div>
      </div>
    )
  }
}
