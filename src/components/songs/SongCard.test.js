import React from 'react';
import { shallow } from 'enzyme';
import SongCard from './SongCard';

describe('SongCard component', () => {
  it('renders SongCard', () => {
    const wrapper = shallow(<SongCard id={'asdgadg'} title={'adsgadsg'} name={'asdg'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
