import './Range.module';
import PropTypes from 'prop-types';
import Range from '@molecules/range/Range';

function RangePage(props) {
  return <div>
    <Range min={1} max={100} step={1} />
  </div>;
}

RangePage.propTypes = {};

export default RangePage;
