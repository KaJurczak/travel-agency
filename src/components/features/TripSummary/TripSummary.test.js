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

  it('should render correct tags', () => {
    const expectedTagOne = 'abc';
    const expectedTagTwo = 'def';
    const expectedTagThree = 'ghi';
    const component = shallow(<TripSummary tags={[expectedTagOne, expectedTagTwo, expectedTagThree]}/>);
  
    expect(component.find('.tags span').at(0).text()).toEqual(expectedTagOne);
    // console.log('first tag', component.find('.tags span').at(0).text());
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTagTwo);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTagThree);
  });

  it('should throw error when prop tags doesnt exist or is empty array', () => {
    const expectedTags = false;
    const component = shallow(<TripSummary tags={expectedTags}/>);
    // console.log('component', component);
    
    expect(component.find('.tags').text()).toEqual(expectedTags);
    // expect(() => component).toThrow();
  });
});