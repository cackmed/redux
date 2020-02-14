import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Moods from './Moods';
import store from '../store';

describe('container', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Provider store={store}><Moods /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
