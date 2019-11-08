import React from 'react';
import { shallow } from 'enzyme';
import LyricCard from './LyricCard';

describe('LyricCard component', () => {
  it('renders LyricCard', () => {
    const wrapper = shallow(<LyricCard lyric={'asdga'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
