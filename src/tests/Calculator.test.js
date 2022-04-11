import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it("should be able to add 1 and 4 to make 5", () => {
    const button1 = container.find('#number1')
    const button4 = container.find('#number4')
    const addButton = container.find('#operator-add')
    const equalButton = container.find('#operator-equals')
    const runningTotal = container.find('#running-total')
    button1.simulate('click')
    addButton.simulate('click')
    button4.simulate('click')
    equalButton.simulate('click')
    expect(runningTotal.text()).toEqual('5');
  })

  it("should be able to subtract 4 from 7 and get 3", () => {
    const button4 = container.find('#number4')
    const button7 = container.find('#number7')
    const subtractButton = container.find('#operator-subtract')
    const equalButton = container.find('#operator-equals')
    const runningTotal = container.find('#running-total')
    button7.simulate('click')
    subtractButton.simulate('click')
    button4.simulate('click')
    equalButton.simulate('click')
    expect(runningTotal.text()).toEqual('3');
  })

  it("Should be able to multiply 5 by 3 and get 15", () => {
    const button3 = container.find('#number3')
    const button5 = container.find('#number5')
    const multiplyButton = container.find('#operator-multiply')
    const equalButton = container.find('#operator-equals')
    const runningTotal = container.find('#running-total')
    button3.simulate('click')
    multiplyButton.simulate('click')
    button5.simulate('click')
    equalButton.simulate('click')
    expect(runningTotal.text()).toEqual('15');
  })

  it("Should be able to divide 21 by 7 and get 3", () => {
    const button2 = container.find('#number2')
    const button1 = container.find('#number1')
    const button7 = container.find('#number7')
    const divideButton = container.find('#operator-divide')
    const equalButton = container.find('#operator-equals')
    const runningTotal = container.find('#running-total')
    button2.simulate('click')
    button1.simulate('click')
    divideButton.simulate('click')
    button7.simulate('click')
    equalButton.simulate('click')
    expect(runningTotal.text()).toEqual('3');
  })

  it("Should be able to concatenate multiple number button clicks", () => {
    const button2 = container.find('#number2')
    const runningTotal = container.find('#running-total')
    button2.simulate('click')
    button2.simulate('click')
    expect(runningTotal.text()).toEqual('22')
  })

  it("should be able to chain multiple operations together", () => {
    const button1 = container.find('#number1')
    const button4 = container.find('#number4')
    const addButton = container.find('#operator-add')
    const equalButton = container.find('#operator-equals')
    const runningTotal = container.find('#running-total')
    button1.simulate('click')
    addButton.simulate('click')
    button4.simulate('click')
    equalButton.simulate('click')
    addButton.simulate('click')
    button4.simulate('click')
    equalButton.simulate('click')
    expect(runningTotal.text()).toEqual('9');
  })

  xit("Should be ", () => {
    
  })


})

