import React from 'react';
import CityOption from './CityOption'
import { mount, shallow } from 'enzyme';
import { data } from '../fakeapi'

// import App from '/App.js';

let props = {
  city: 'Denver, CO'
}

describe('CityOption', ()=>{

  let wrapper;


  beforeEach(()=>{
    wrapper = shallow(<CityOption city={props.city} />)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render content to the DOM', () => {
    expect(wrapper.find('option').length).toBe(1);
  });

  it('should have a prop of city', () => {
    console.log(wrapper.props())
    expect(wrapper.props().value).toBe('Denver, CO')
  })
})
