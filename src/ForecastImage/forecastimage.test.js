import React from 'react';
import ForecastImage from './ForecastImage';
import { mount, shallow } from 'enzyme';
import { data } from '../fakeapi';

describe('ForecastImage', ()=>{

  let wrapper;

  let props = {

  }

  beforeEach(()=>{
    wrapper = shallow(<ForecastImage icon='rain'/>)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should accept props', () => {
    expect(wrapper.props().src).toEqual('./rainy.svg')
  })

  it('should render a picture', () => {
    expect(wrapper.find('img').length).toBe(1);
  });

})
