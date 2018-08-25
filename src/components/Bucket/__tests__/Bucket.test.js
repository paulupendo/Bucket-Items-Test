import React from 'react';
import { shallow } from 'enzyme';

import Bucket from '../';

let Component;

const props = {
  bucket: {
    Items: [
      {
        ItemId: 78,
        ItemTitle: 'Basic Stock Mgmt',
        Type: 'New Feature',
        Description:
          'We have ability today to create items/add ons.  This feature would be to add fields for:\n1. In Stock (decrements each time the item is added to a reservation.\n2. Reorder Threshold (When in stock hits this number send alert to client)\n3. Stop Sell Threshol',
        Priority: 20,
        Version: 0,
        MockUpLink: 'Pending',
        BucketId: 1,
        OrderInLane: 9
      },
      {
        ItemId: 79,
        ItemTitle: 'Custom Fields',
        Type: 'Reservations',
        Description:
          'Ability to create custom fields (i.e. Allergy, License Plate, etc) and then store information in these fields for a given reservation.  Ideally would make these available on new booking engine',
        Priority: 26,
        Version: 0,
        MockUpLink: 'Pending',
        BucketId: 1,
        OrderInLane: 10
      }
    ],
    BucketId: 1,
    Description: 'Small Features ',
    OrderInVertical: 18
  }
};

describe('Bucket Display test', () => {
  it('should render cards from props', () => {
    Component = shallow(<Bucket bucket={props.buckets} />);
    const cards = Component.find('.card');
    expect(cards).toHaveLength(2);
  });
});
