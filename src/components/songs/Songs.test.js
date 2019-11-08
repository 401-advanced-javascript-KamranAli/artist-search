import React from 'react';
import { shallow } from 'enzyme';
import Songs from './Songs';

describe('Songs component', () => {
  it('renders Songs', () => {
    const wrapper = shallow(<Songs name={'adsg'} songs={[
      {
        'video': false,
        'title': 'Liar',
        'id': '1b687aec-3659-4960-976f-93ff4e7ac4a9',
        'disambiguation': '',
        'length': 385800
      },
      {
        'title': 'Modern Times Rock ’n’ Roll',
        'video': false,
        'length': 108373,
        'disambiguation': '',
        'id': '26956d0b-38cf-4219-9807-1975e4b5ef7b'
      }
    ]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
