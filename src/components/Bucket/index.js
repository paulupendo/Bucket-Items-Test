import React from 'react';

import Card from '../common/Card';
import './Bucket.css';

const Bucket = ({ bucket }) => (
  <div className="bucket">
    <span designation="title">{bucket.Description}</span>
    <div className="cards">
      {bucket.Items.map(item => (
        <Card
          key={item.ItemId}
          title={item.ItemTitle}
          description={item.Description}
        />
      ))}
    </div>
  </div>
);

export default Bucket;
