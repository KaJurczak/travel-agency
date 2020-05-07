import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct link', () => {
    const expectedLink = '/trip/abc';
    const component = shallow(<TripSummary id={expectedLink} />);
  
    expect(component.find('.abc').prop('id')).toEqual(expectedLink);
  });
});