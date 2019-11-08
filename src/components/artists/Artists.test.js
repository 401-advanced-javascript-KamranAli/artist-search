import React from 'react';
import { shallow } from 'enzyme';
import Artists from './Artists';

describe('Artists component', () => {
  it('renders Artists', () => {
    const wrapper = shallow(<Artists artists={[
      {
        'id': '0383dadf-2a4e-4d10-a46a-e9e041da8eb3',
        'type': 'Group',
        'type-id': 'e431f5f6-b5d2-343d-8b36-72607fffb74b',
        'score': 100,
        'name': 'Queen',
        'sort-name': 'Queen',
        'country': 'GB',
        'area': {
          'id': '8a754a16-0027-3a29-b6d7-2b40ea0481ed',
          'type': 'Country',
          'type-id': '06dd0ae4-8c74-30bb-b43d-95dcedf961de',
          'name': 'United Kingdom',
          'sort-name': 'United Kingdom',
          'life-span': {
            'ended': null
          }
        },
        'begin-area': {
          'id': 'f03d09b3-39dc-4083-afd6-159e3f0d462f',
          'type': 'City',
          'type-id': '6fd8f29a-3d0a-32fc-980d-ea697b69da78',
          'name': 'London',
          'sort-name': 'London',
          'life-span': {
            'ended': null
          }
        },
        'disambiguation': 'UK rock group',
        'isnis': [
          '0000000115265309'
        ],
        'life-span': {
          'begin': '1970-06-27',
          'ended': null
        },
        'tags': [
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
          {
            'count': -1,
            'name': '90s'
          },
          {
            'count': -1,
            'name': 'pop-rock'
          },
          {
            'count': 5,
            'name': 'british'
          },
          {
            'count': 0,
            'name': 'uk'
          },
          {
            'count': 0,
            'name': 'band'
          },
          {
            'count': 5,
            'name': 'hard rock'
          },
          {
            'count': 0,
            'name': 'britannique'
          },
          {
            'count': 0,
            'name': 'disco'
          },
          {
            'count': 3,
            'name': 'glam rock'
          },
          {
            'count': -1,
            'name': 'queen family'
          },
          {
            'count': 3,
            'name': 'art rock'
          },
          {
            'count': 2,
            'name': 'pop rock'
          },
          {
            'count': 0,
            'name': 'english'
          },
          {
            'count': 0,
            'name': 'united kingdom'
          },
          {
            'count': 1,
            'name': 'awesome'
          },
          {
            'count': -1,
            'name': 'queen'
          },
          {
            'count': 1,
            'name': 'film soundtrack'
          },
          {
            'count': -1,
            'name': 'classic pop and rock'
          },
          {
            'count': -1,
            'name': 'platinum'
          },
          {
            'count': -1,
            'name': 'pop/rock'
          },
          {
            'count': 0,
            'name': '80\'s'
          },
          {
            'count': -1,
            'name': '90\'s'
          },
          {
            'count': 0,
            'name': '70\'s'
          },
          {
            'count': -1,
            'name': 'langham 1 studio bbc'
          },
          {
            'count': -1,
            'name': 'kind of magic'
          },
          {
            'count': 1,
            'name': 'sa-town anthem'
          },
          {
            'count': 1,
            'name': 'server name'
          },
          {
            'count': 1,
            'name': 'rx27'
          }
        ]
      },
      {
        'id': '5eecaf18-02ec-47af-a4f2-7831db373419',
        'type': 'Person',
        'type-id': 'b6e035f4-3ce9-331c-97df-83397230b0df',
        'score': 79,
        'name': 'Queen',
        'sort-name': 'Queen',
        'country': 'US',
        'area': {
          'id': '489ce91b-6658-3307-9877-795b68554c98',
          'type': 'Country',
          'type-id': '06dd0ae4-8c74-30bb-b43d-95dcedf961de',
          'name': 'United States',
          'sort-name': 'United States',
          'life-span': {
            'ended': null
          }
        },
        'disambiguation': 'US rapper',
        'life-span': {
          'ended': null
        }
      },
    ]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
