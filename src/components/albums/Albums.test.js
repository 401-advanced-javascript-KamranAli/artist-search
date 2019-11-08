import React from 'react';
import { shallow } from 'enzyme';
import Albums from './Albums';

describe('Albums component', () => {
  it('renders Albums', () => {
    const wrapper = shallow(<Albums albums={[
      {
        'title': 'Liar',
        'quality': 'normal',
        'release-events': [
          {
            'area': {
              'name': 'United States',
              'sort-name': 'United States',
              'disambiguation': '',
              'iso-3166-1-codes': [
                'US'
              ],
              'id': '489ce91b-6658-3307-9877-795b68554c98'
            },
            'date': '1974-02-14'
          }
        ],
        'status-id': '4e304316-386d-3409-af2e-78857eec5cfe',
        'packaging': 'Cardboard/Paper Sleeve',
        'date': '1974-02-14',
        'disambiguation': '',
        'cover-art-archive': {
          'front': false,
          'darkened': false,
          'count': 2,
          'artwork': true,
          'back': false
        },
        'packaging-id': 'f7101ce3-0384-39ce-9fde-fbbd0044d35f',
        'text-representation': {
          'language': 'eng',
          'script': 'Latn'
        },
        'status': 'Official',
        'id': '053b7800-979f-4e7d-a15f-9f9fe2156687',
        'country': 'US',
        'barcode': null,
        'asin': 'B00SVNM7FO'
      },
      {
        'disambiguation': '',
        'cover-art-archive': {
          'back': false,
          'artwork': true,
          'front': true,
          'count': 1,
          'darkened': false
        },
        'packaging-id': 'f7101ce3-0384-39ce-9fde-fbbd0044d35f',
        'text-representation': {
          'script': 'Latn',
          'language': 'eng'
        },
        'status': 'Official',
        'title': 'Queen',
        'quality': 'normal',
        'release-events': [
          {
            'date': '1973-09-04',
            'area': {
              'id': '489ce91b-6658-3307-9877-795b68554c98',
              'iso-3166-1-codes': [
                'US'
              ],
              'name': 'United States',
              'disambiguation': '',
              'sort-name': 'United States'
            }
          }
        ],
        'status-id': '4e304316-386d-3409-af2e-78857eec5cfe',
        'packaging': 'Cardboard/Paper Sleeve',
        'date': '1973-09-04',
        'barcode': '',
        'asin': null,
        'id': '1783da6a-9315-3602-a488-1738eb733a0f',
        'country': 'US'
      }
    ]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
