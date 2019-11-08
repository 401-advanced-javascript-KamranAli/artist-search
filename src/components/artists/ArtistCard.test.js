import React from 'react';
import { shallow } from 'enzyme';
import ArtistCard from './ArtistCard';

describe('ArtistCard component', () => {
  it('renders ArtistCard', () => {
    const wrapper = shallow(<ArtistCard id={'adsg'} country={'adsg'} name={'adsg'} tags={[
      {
        'count': 18,
        'name': 'rock'
      },
      {
        'count': 0,
        'name': 'progressive rock'
      },
      {
        'count': -1,
        'name': '70s'
      },
      {
        'count': -1,
        'name': '80s'
      },
    ]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
