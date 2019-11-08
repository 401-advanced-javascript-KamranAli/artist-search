import React from 'react';
import { shallow } from 'enzyme';
import AlbumCard from './AlbumCard';

describe('AlbumCard component', () => {
  it('renders AlbumCard', () => {
    const wrapper = shallow(<AlbumCard id={'asdg'} title={'adshasdh'} image={'adsh'} name={'asdh'}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
