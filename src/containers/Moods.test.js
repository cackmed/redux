import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Moods from './Moods';
import store from '../store';

describe('container', () => {
  it('matches a snapshot', () => {
    const wrapper = mount(<Provider store={store}><Moods /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
