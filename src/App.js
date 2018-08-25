import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';
import Header from './components/common/Header';
import Bucket from './components/Bucket';
import { getBuckets } from './store/modules/buckets';

class App extends Component {
  componentDidMount() {
    this.props.getBuckets();
  }

  render() {
    const { buckets } = this.props;
    return (
      <div className="main">
        <Header title="InnRoad" />
        <div className="buckets-display">
          {buckets.map(bucket => (
            <Bucket bucket={bucket} key={bucket.BucketId} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  buckets: state.buckets.bucketsList
});

const mapDispatchToProps = dispatch => ({
  getBuckets: () => dispatch(getBuckets())
});

App.proptypes = {
  getBuckets: PropTypes.func.isRequired,
  buckets: PropTypes.arrayOf(PropTypes.object)
};

App.defaultProps = { buckets: [] };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
