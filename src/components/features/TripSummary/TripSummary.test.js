import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate link to correct adress', () => {
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} tags={[]}/>);
  
    expect(component.find('.link').prop('to')).toEqual(`/trip/${expectedId}`);
  });

  it('should check correct src and alt at <img>', () => {
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'photo';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} tags={[]}/>);
  
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct name, cost and days', () => {
    const expectedName = 'Lorem ipsum';
    const expectedCost = '$1000';
    const expectedDays = 7;
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} tags={[]}/>);
  
    const renderedName = component.find('.title').text();
    expect(renderedName).toEqual(expectedName);
    const renderedCost = component.find('.details span').last().text();
    expect(renderedCost).toEqual(`from ${expectedCost}`);
    const renderedDays = component.find('.details span').first().text();
    expect(renderedDays).toEqual(`${expectedDays} days`);
    // console.log('renderedCost', renderedCost, 'renderedDays', renderedDays);
  });

  it('should throw error without any of props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
});