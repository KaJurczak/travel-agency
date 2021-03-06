import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
  descr: '.countdown',
};

const mockProps = {
  title: 'Lorem ipsum',
  promoDescription: 'Dolomit sum',
};

beforeAll(() => {
  const utilsModule = jest.requireActual('../../../utils/formatTime.js'); /* jest.requireActual use intead of import - we sure it will return real version, not mock version*/
  utilsModule.formatTime = jest.fn(seconds => seconds);
});

describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
    // console.log(component.debug());
  });

  it('should render title and promoDescription', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });


  it('should render correct title', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);
    expect(component.find(select.title).text()).toEqual(mockProps.title);
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

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtTime('11:57:58', '122');
  checkDescriptionAtTime('11:59:59', '1');
  checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');
});

const checkDescriptionAfterTime = (time, delaySeconds, expectedDescription) => {
  it(`should show correct value ${delaySeconds} seconds after ${time}`, () => {
    jest.useFakeTimers();

    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);

    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + delaySeconds);
    global.Date = mockDate(newTime.getTime());

    jest.advanceTimersByTime(delaySeconds * 1000);

    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
    jest.useRealTimers();
  });
};

// test no5. 
// ExpectedDescription = how many seconds is left to noon
describe('Component HappyHourAd with mocked Date and delay', () => {
  checkDescriptionAfterTime('11:57:58', 62, '60');
  checkDescriptionAfterTime('11:59:58', 1, '1');
  checkDescriptionAfterTime('13:00:00', 60 * 60, 22 * 60 * 60 + '');
});

// test no6 - do we see promoDescription between 12-13 hour
describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtTime('12:35:58', mockProps.promoDescription);
  checkDescriptionAtTime('12:59:59', mockProps.promoDescription);
  checkDescriptionAtTime('12:00:00', mockProps.promoDescription);
});

// test no7 - do we see promoDescription when coundown goes to 0
describe('Component HappyHourAd with mocked Date and delay', () => {
  checkDescriptionAfterTime('11:57:58', 60 * 2 + 2, mockProps.promoDescription);
  checkDescriptionAfterTime('11:59:59', 1 * 60 * 60, mockProps.promoDescription);
  checkDescriptionAfterTime('11:59:59', 1 * 60 * 60 + 2, 23 * 60 * 60 - 1 + '');
});