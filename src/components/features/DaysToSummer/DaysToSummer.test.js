import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer.js';

const select = {
  title: '.title',
};

// const mockProps = {
//   title: 'Lorem ipsum',
// };

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
    // console.log(component.debug());
  });

  it('should render title', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists(select.title)).toEqual(true);
  });
});

const trueDate = Date;
const mockDate = (customDate) => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAboutSummer = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`${time}T00:00:00.135Z`);

    const component = shallow(<DaysToSummer />);
    const renderedTime = component.find(select.title).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkDescriptionAboutSummer('2020-06-10', '11 days to summer');
  checkDescriptionAboutSummer('2020-06-20', '1 day to summer');
  checkDescriptionAboutSummer('2020-06-21', '');
  checkDescriptionAboutSummer('2020-09-23', '');
  checkDescriptionAboutSummer('2020-09-24', '270 days to summer');
});
